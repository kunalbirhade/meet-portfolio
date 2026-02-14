import SectionShell from "../../components/SectionShell";
import ContactUs from "../../components/ContactUs";
export const metadata = {
  title: "Contact Me",
  description: "Get in touch with Meet Panchal for enquiries and quotes.",
  openGraph: {
    title: "Get in touch with Meet Panchal",
    description: "Meet Panchal's Curriculum Vitae",
    url: "https://meetpanchal.com/contact",
  },
};

export default function ContactPage() {
  return (
    <SectionShell
      id="contact"
      title="Contact Us"
      subtitle="Ready to start your next project? Contact us for a consultation and quote."
    >
      <ContactUs detailedMode={true} />
    </SectionShell>
  );
}
