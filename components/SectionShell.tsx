"use client";

import PageHeader from "./PageHeader";

export default function SectionShell({
  id,
  title,
  subtitle,
  children,
  isProjectPage = false,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  isProjectPage?: boolean;
}) {
  return (
    <section id={id} className="w-full mx-auto py-16">
      {isProjectPage ? null : <PageHeader />}
      <div>{children}</div>
    </section>
  );
}
