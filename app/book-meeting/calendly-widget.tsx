"use client";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <InlineWidget
      url="https://calendly.com/bimacme-info/30min?hide_gdpr_banner=1"
      styles={{ height: "700px", width: "100%", padding: 0, margin: 0 }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        primaryColor: "1a1a1a",
        textColor: "1a1a1a",
      }}
    />
  );
}
