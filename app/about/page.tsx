import SectionShell from "../../components/SectionShell";
import AboutDetail from "../../components/AboutDetail";
import ContactUs from "../../components/ContactUs";

export const metadata = {
  title: "About",
  description: "Meet Panchal's Curriculum Vitae.",
  openGraph: {
    title: "Meet Panchal's Curriculum Vitae",
    description: "Meet Panchal's Curriculum Vitae",
    url: "https://meetpanchal.com/about",
  },
};

export default function AboutPage() {
  return (
    <SectionShell title="About" subtitle="Curriculum Vitae">
      <AboutDetail />
      <ContactUs />
    </SectionShell>
  );
}
