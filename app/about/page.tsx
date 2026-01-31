import SectionShell from "../../components/SectionShell";
import AboutDetail from "../../components/AboutDetail";
import ContactUs from "../../components/ContactUs";

export default function AboutPage() {
  return (
    <SectionShell title="About" subtitle="Curriculum Vitae">
      <AboutDetail />
      <ContactUs />
    </SectionShell>
  );
}
