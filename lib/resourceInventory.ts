import { promises as fs } from "node:fs";
import path from "node:path";

export type PublicAsset = {
  name: string;
  src: string;
  folder: string;
  extension: string;
  group: string;
};

export type AssetGroup = {
  key: string;
  label: string;
  assets: PublicAsset[];
};

export type PhosphorIcon = {
  name: string;
  className: string;
};

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const SVG_EXTENSION = new Set([".svg"]);
const ASSET_ROOTS = ["img-temp", "img"];

async function pathExists(targetPath: string) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function walkDirectory(directory: string): Promise<string[]> {
  if (!(await pathExists(directory))) return [];

  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return walkDirectory(entryPath);
      if (entry.isFile()) return [entryPath];
      return [];
    }),
  );

  return files.flat();
}

function toPublicAsset(filePath: string): PublicAsset {
  const relativePath = path.relative(PUBLIC_DIR, filePath);
  const src = `/${relativePath.split(path.sep).join("/")}`;
  const parsed = path.parse(relativePath);

  return {
    name: parsed.name,
    src,
    folder: parsed.dir.split(path.sep).join("/"),
    extension: parsed.ext.replace(".", "").toUpperCase(),
    group: getAssetGroup(parsed.dir.split(path.sep).join("/")),
  };
}

function getAssetGroup(folder: string) {
  const normalized = folder.toLowerCase();
  if (normalized.includes("/works") || normalized.endsWith("works")) return "works";
  if (normalized.includes("/demo") || normalized.endsWith("demo")) return "demo";
  if (normalized.includes("/illustrations") || normalized.endsWith("illustrations")) {
    return "illustrations";
  }
  if (normalized.includes("/hero") || normalized.endsWith("hero")) return "hero";
  if (normalized.includes("/blog") || normalized.endsWith("blog")) return "blog";
  if (normalized.includes("/cta") || normalized.endsWith("cta")) return "cta";
  if (normalized.includes("/dividers") || normalized.endsWith("dividers")) return "dividers";
  if (normalized.includes("/services") || normalized.endsWith("services")) return "services";
  if (normalized.includes("/avatars") || normalized.endsWith("avatars")) return "avatars";
  if (normalized.includes("/backgrounds") || normalized.endsWith("backgrounds")) return "backgrounds";
  if (normalized.includes("/gifs") || normalized.endsWith("gifs")) return "gifs";
  if (normalized.includes("/cursor-trail")) return "motion";
  if (normalized.includes("/favicon") || normalized.endsWith("favicon")) return "favicons";
  return "other";
}

const imageGroupLabels: Record<string, string> = {
  works: "Works",
  demo: "Demo",
  illustrations: "Illustrations",
  hero: "Hero",
  blog: "Blog",
  cta: "CTA",
  dividers: "Dividers",
  services: "Services",
  avatars: "Avatars",
  backgrounds: "Backgrounds",
  gifs: "GIFs",
  motion: "Motion",
  favicons: "Favicons",
  other: "Other",
};

const imageGroupOrder = [
  "works",
  "hero",
  "demo",
  "illustrations",
  "blog",
  "cta",
  "dividers",
  "services",
  "avatars",
  "backgrounds",
  "gifs",
  "motion",
  "favicons",
  "other",
];

async function getAssetsByExtension(extensions: Set<string>, limit?: number) {
  const rootFiles = await Promise.all(
    ASSET_ROOTS.map((root) => walkDirectory(path.join(PUBLIC_DIR, root))),
  );

  const assets = rootFiles
    .flat()
    .filter((filePath) => extensions.has(path.extname(filePath).toLowerCase()))
    .map(toPublicAsset)
    .sort((a, b) => a.src.localeCompare(b.src));

  return typeof limit === "number" ? assets.slice(0, limit) : assets;
}

export async function getImageInventory() {
  return getAssetsByExtension(IMAGE_EXTENSIONS);
}

export async function getGroupedImageInventory(): Promise<AssetGroup[]> {
  const images = await getImageInventory();
  const byGroup = new Map<string, PublicAsset[]>();

  images.forEach((image) => {
    const existing = byGroup.get(image.group) ?? [];
    existing.push(image);
    byGroup.set(image.group, existing);
  });

  return imageGroupOrder
    .filter((group) => byGroup.has(group))
    .map((group) => ({
      key: group,
      label: imageGroupLabels[group] ?? group,
      assets: byGroup.get(group) ?? [],
    }));
}

function iconPriority(asset: PublicAsset) {
  if (asset.folder.includes("/icons") || asset.folder.endsWith("icons")) return 0;
  if (asset.folder.includes("/brands") || asset.folder.endsWith("brands")) return 1;
  if (asset.folder.includes("/tech") || asset.folder.endsWith("tech")) return 2;
  if (asset.folder.includes("/clients") || asset.folder.endsWith("clients")) return 3;
  if (asset.folder.includes("/demo") || asset.folder.endsWith("demo")) return 4;
  return 5;
}

export async function getSvgIconInventory(limit = 150) {
  const assets = await getAssetsByExtension(SVG_EXTENSION);

  return assets
    .sort((a, b) => {
      const priorityDelta = iconPriority(a) - iconPriority(b);
      return priorityDelta === 0 ? a.src.localeCompare(b.src) : priorityDelta;
    })
    .slice(0, limit);
}

export async function getPhosphorIconInventory(limit = 150): Promise<PhosphorIcon[]> {
  const cssPath = path.join(PUBLIC_DIR, "css", "plugins.css");
  if (!(await pathExists(cssPath))) return [];

  const css = await fs.readFile(cssPath, "utf8");
  const iconNames = new Set<string>();
  const regex = /\.ph(?:-[a-z]+)?\.ph-([a-z0-9-]+):before/g;
  let match = regex.exec(css);

  while (match && iconNames.size < limit) {
    iconNames.add(match[1]);
    match = regex.exec(css);
  }

  return Array.from(iconNames)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, limit)
    .map((name) => ({
      name,
      className: `ph-bold ph-${name}`,
    }));
}
