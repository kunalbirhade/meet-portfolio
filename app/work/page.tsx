import Work from "../../components/Work";
import SectionShell from "../../components/SectionShell";
import ContactUs from "../../components/ContactUs";
import workProjects from "./projectList";

export const metadata = {
  title: "Work",
  description: "A selection of recent projects",
};
export default function WorkPage() {
  return (
    <SectionShell title="Work" subtitle="A selection of recent projects">
      <Work projects={workProjects} detailedMode={true} />
      <ContactUs />
    </SectionShell>
  );
}
