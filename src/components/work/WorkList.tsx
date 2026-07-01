import SectionHeading from "@/components/primitives/SectionHeading";
import WorkRow from "./WorkRow";
import { PROJECTS } from "@/lib/projects";

export default function WorkList() {
  return (
    <section id="work" className="scroll-mt-24 pt-32">
      <SectionHeading index="01" title="Work" />
      <div className="border-t border-white/[0.05]">
        {PROJECTS.map((p) => (
          <WorkRow key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
