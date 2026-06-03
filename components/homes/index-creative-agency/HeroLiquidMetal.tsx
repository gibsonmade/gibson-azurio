"use client";
import { LiquidMetal } from "@paper-design/shaders-react";

export default function HeroLiquidMetal() {
  return (
    <LiquidMetal
      speed={1}
      softness={0.3}
      repetition={3.29}
      shiftRed={0.3}
      shiftBlue={0.3}
      distortion={0.07}
      contour={0.4}
      scale={0.7}
      rotation={0}
      shape="diamond"
      angle={70}
      image="https://app.paper.design/file-assets/01KT2MGSAWT5PDCKT5NV88SHD6/01KT5S30FTWK1KRKCRE7XK43RR.svg"
      colorBack="#00000000"
      colorTint="#FFFFFF"
      style={{ height: "480px", width: "480px" }}
    />
  );
}
