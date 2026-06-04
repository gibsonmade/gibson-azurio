import Footer2 from "@/components/footers/Footer2";
import { projectLaunch, type LaunchTaskStatus } from "@/data/projectLaunch";
import { siteCopy } from "@/data/siteCopy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Project Launch | ${siteCopy.brand.site}`,
  description: "Internal Gibson launch checklist and current project status.",
  robots: {
    index: false,
    follow: false,
  },
};

const statusLabels: Record<LaunchTaskStatus, string> = {
  pass: "Pass",
  fail: "Fail",
  blocked: "Blocked",
  watch: "Avoid",
  next: "Next",
};

export default function ProjectLaunchPage() {
  return (
    <>
      <main className="project-launch-page">
        <section className="project-launch-hero">
          <div className="project-launch-hero__intro">
            <p className="project-launch-eyebrow">{projectLaunch.eyebrow}</p>
            <h1>{projectLaunch.title}</h1>
            <p>{projectLaunch.summary}</p>
          </div>
          <div className="project-launch-current" aria-label="Current step">
            <p>{projectLaunch.currentStep.label}</p>
            <h2>{projectLaunch.currentStep.title}</h2>
            <span>{projectLaunch.currentStep.detail}</span>
          </div>
        </section>

        <section className="project-launch-stats" aria-label="Launch summary">
          {projectLaunch.stats.map((stat) => (
            <div className="project-launch-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="project-launch-plan" aria-label="Launch plan">
          {projectLaunch.phases.map((phase, phaseIndex) => (
            <article className="project-launch-phase" key={phase.title}>
              <div className="project-launch-phase__heading">
                <p>/{String(phaseIndex + 1).padStart(2, "0")}</p>
                <div>
                  <h2>{phase.title}</h2>
                  <span>{phase.description}</span>
                </div>
              </div>
              <div className="project-launch-task-list">
                {phase.tasks.map((task, taskIndex) => (
                  <div
                    className={`project-launch-task is-${task.status}`}
                    key={task.title}
                  >
                    <div className="project-launch-task__index">
                      {String(taskIndex + 1).padStart(2, "0")}
                    </div>
                    <div className="project-launch-task__body">
                      <h3>{task.title}</h3>
                      <p>{task.detail}</p>
                      {task.promptBefore ? (
                        <div className="project-launch-task__prompt">
                          <strong>Prompt first</strong>
                          <span>{task.promptBefore}</span>
                        </div>
                      ) : null}
                    </div>
                    <div className="project-launch-task__status">
                      {statusLabels[task.status]}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer2 />
    </>
  );
}
