import Playground from "../../components/Playground";
import SectionShell from "../../components/SectionShell";
import playgroundProjects from "./playgroundProjects";
import ContactUs from "../../components/ContactUs";

export const metadata = {
  title: "Playground",
  description: "Gallery of completed projects.",
};
export default function PlaygroundPage() {
  return (
    <SectionShell title="Playground" subtitle="cross-disciplinary explorations">
      <Playground detailedMode={true} projects={playgroundProjects} />
      <ContactUs />
    </SectionShell>
  );
}
