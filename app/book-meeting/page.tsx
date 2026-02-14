import SectionShell from "../../components/SectionShell";
import CalendlyEmbed from "./calendly-widget";

export const metadata = {
  title: "Book a Meeting",
  description: "Schedule a consultation with BIMACME’s civil and BIM experts.",
  openGraph: {
    title: "Book a Meeting with BIMACME",
    description: "Schedule your call with BIMACME’s team.",
    url: "https://bimacme.com/book-meeting",
  },
};

export default function BookMeetingPage() {
  return (
    <SectionShell
      id="meeting"
      title="Book a Meeting"
      subtitle="Schedule a consultation with our BIM and Construction experts. Pick a convenient time using the calendar below."
    >
      <div className="grid md:grid-cols-2 gap-6 items-center 2xl:mt-[-70px] md:mt-0 ">
        <div className="col-span-1 h-[500px] bg-[url('/meeting.jpg')] bg-cover rounded-current shadow-lg" />
        <div className="col-span-1 w-full">
          <CalendlyEmbed />
        </div>
      </div>
    </SectionShell>
  );
}
