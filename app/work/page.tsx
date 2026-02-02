import Work from "../../components/Work";
import SectionShell from "../../components/SectionShell";
import ContactUs from "../../components/ContactUs";
import workProjects from "./projectList";

export const metadata = {
  title: "Work",
  description: "A selection of recent projects",
  openGraph: {
    title: "A selection of recent projects",
    description: "Meet Panchal's Portfolio",
    url: "https://meetpanchal.com/work",
  },
};
export default function WorkPage() {
  return (
    <SectionShell title="Work" subtitle="A selection of recent projects">
      <Work projects={workProjects} detailedMode={true} />
      <ContactUs />
    </SectionShell>
  );
}
