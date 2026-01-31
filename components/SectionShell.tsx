"use client";

import PageHeader from "./PageHeader";

export default function SectionShell({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full mx-auto py-16">
      <PageHeader />
      <div>{children}</div>
    </section>
  );
}
