import { projectSections, getStats, type TaskStatus, type TaskOwner } from "@/data/projectLaunch";
import Footer2 from "@/components/footers/Footer2";

function statusLabel(s: TaskStatus) {
  const map: Record<TaskStatus, string> = {
    done: "Done",
    "in-progress": "In Progress",
    todo: "Todo",
    blocked: "Blocked",
  };
  return map[s];
}

function StatusPill({ status }: { status: TaskStatus }) {
  const styles: Record<TaskStatus, React.CSSProperties> = {
    done: { background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)" },
    "in-progress": { background: "rgba(59,130,246,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.3)" },
    todo: { background: "rgba(148,163,184,0.1)", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.2)" },
    blocked: { background: "rgba(239,68,68,0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" },
  };
  return (
    <span style={{
      ...styles[status],
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: "4px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
      fontFamily: "inherit",
    }}>
      {statusLabel(status)}
    </span>
  );
}

function OwnerBadge({ owner }: { owner: TaskOwner }) {
  const styles: Record<TaskOwner, React.CSSProperties> = {
    AI: { background: "rgba(139,92,246,0.15)", color: "#c4b5fd", border: "1px solid rgba(139,92,246,0.3)" },
    Human: { background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.25)" },
    Both: { background: "rgba(20,184,166,0.12)", color: "#2dd4bf", border: "1px solid rgba(20,184,166,0.25)" },
  };
  return (
    <span style={{
      ...styles[owner],
      display: "inline-block",
      padding: "2px 7px",
      borderRadius: "4px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
      fontFamily: "inherit",
    }}>
      {owner}
    </span>
  );
}

function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{
        flex: 1,
        height: "4px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${pct}%`,
          height: "100%",
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          borderRadius: "2px",
          transition: "width 0.3s ease",
        }} />
      </div>
      <span style={{ fontSize: "12px", color: "#94a3b8", whiteSpace: "nowrap" }}>{pct}% done</span>
    </div>
  );
}

export default function ProjectLaunchPage() {
  const stats = getStats();

  return (
    <>
      <div className="mxd-page-content inner-page-content" style={{ paddingTop: "7rem" }}>
        <div className="mxd-container grid-l-container">

          {/* Header */}
          <div className="mxd-block" style={{ paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div className="mxd-hero__mark permanent" style={{ margin: 0 }}>
                    <span className="mark-icon" />
                    <span className="mark-text">Internal use only</span>
                  </div>
                </div>
                <h1 className="large" style={{ margin: 0, lineHeight: 1 }}>Project Launch</h1>
                <p className="t-large" style={{ marginTop: "0.75rem", color: "#94a3b8", maxWidth: "520px" }}>
                  Living build checklist for Gibson-azurio MVP. Stages, owners, tools, and status — all in one place.
                </p>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "1.5rem 2rem",
                minWidth: "260px",
              }}>
                <div style={{ marginBottom: "1rem" }}>
                  <ProgressBar done={stats.done} total={stats.total} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  {[
                    { label: "Done", value: stats.done, color: "#22c55e" },
                    { label: "In Progress", value: stats.inProgress, color: "#60a5fa" },
                    { label: "Blocked", value: stats.blocked, color: "#f87171" },
                    { label: "Todo", value: stats.todo, color: "#94a3b8" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{ fontSize: "22px", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px", letterSpacing: "0.04em" }}>{s.label.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "11px", color: "#475569" }}>
                  {stats.total} tasks across 10 sections
                </div>
              </div>
            </div>
          </div>

          {/* Owner legend */}
          <div className="mxd-block" style={{ paddingBlock: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.06em" }}>OWNER</span>
            {(["AI", "Human", "Both"] as const).map((o) => (
              <span key={o} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#64748b" }}>
                <OwnerBadge owner={o} /> {o === "AI" ? "Claude handles it" : o === "Human" ? "Gibson provides input or asset" : "Collaboration needed"}
              </span>
            ))}
          </div>

          {/* Sections */}
          {projectSections.map((section) => (
            <div key={section.number} className="mxd-block" style={{ paddingBlock: "2.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                <span style={{ fontSize: "11px", color: "#3b82f6", fontWeight: 700, letterSpacing: "0.08em" }}>
                  SECTION {String(section.number).padStart(2, "0")}
                </span>
                <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#e2e8f0" }}>
                  {section.title}
                </h2>
                <span style={{ fontSize: "11px", color: "#475569", marginLeft: "auto" }}>
                  {section.tasks.filter(t => t.status === "done").length}/{section.tasks.length} done
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {/* Column headers */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 70px 80px 160px 90px",
                  gap: "0.5rem",
                  padding: "0.4rem 0.75rem",
                  fontSize: "10px",
                  color: "#475569",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <span>#</span>
                  <span>TASK</span>
                  <span>OWNER</span>
                  <span>STATUS</span>
                  <span>TOOL</span>
                  <span>NOTES</span>
                </div>

                {section.tasks.map((task, idx) => (
                  <div key={task.id} style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr 70px 80px 160px 90px",
                    gap: "0.5rem",
                    padding: "0.65rem 0.75rem",
                    alignItems: "start",
                    background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                    borderRadius: "4px",
                    fontSize: "13px",
                  }}>
                    <span style={{ color: "#475569", fontSize: "11px", paddingTop: "2px" }}>{String(task.id).padStart(2, "0")}</span>
                    <span style={{
                      color: task.status === "done" ? "#64748b" : "#cbd5e1",
                      textDecoration: task.status === "done" ? "line-through" : "none",
                      textDecorationColor: "#475569",
                      lineHeight: 1.4,
                    }}>
                      {task.title}
                    </span>
                    <span><OwnerBadge owner={task.owner} /></span>
                    <span><StatusPill status={task.status} /></span>
                    <span style={{ color: "#64748b", fontSize: "12px", lineHeight: 1.35 }}>{task.tool}</span>
                    <span style={{ color: "#64748b", fontSize: "11px", lineHeight: 1.4 }}>{task.notes}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div className="mxd-block" style={{ paddingBlock: "2rem" }}>
            <p style={{ fontSize: "12px", color: "#334155", textAlign: "center" }}>
              Update statuses in <code style={{ background: "rgba(255,255,255,0.06)", padding: "1px 5px", borderRadius: "3px", fontFamily: "monospace" }}>data/projectLaunch.ts</code> — changes rebuild automatically.
            </p>
          </div>

        </div>
      </div>
      <Footer2 />
    </>
  );
}
