import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Button,
  Chip,
  Container,
  Heading,
  Icon,
  PrintButton,
  Section,
  Surface,
  Text,
  TimelineItem,
} from "@/components/ui";
import { cv } from "@/content/cv";
import { contactHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: `CV of ${site.name}, ${site.role} in ${site.location}.`,
};

/** One titled block of the CV */
function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="break-inside-avoid-page">
      <Heading level={2} size="eyebrow" className="uppercase tracking-[0.08em]">
        {title}
      </Heading>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function CvPage() {
  return (
    <main>
      <Section spacing="md" className="print:py-0">
        <Container size="md" className="flex flex-col gap-6">
          {/* Actions: hidden when printing */}
          <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
            <Button variant="ghost" size="sm" href="/" icon={<Icon name="arrow-left" size={16} />}>
              Back to home
            </Button>
            <div className="flex flex-wrap gap-2">
              <PrintButton size="sm" />
              <Button size="sm" href={site.cv} download icon={<Icon name="download" size={16} />}>
                Download PDF
              </Button>
            </div>
          </div>

          <Surface padding="lg" className="flex flex-col gap-10 print:border-0 print:p-0 print:shadow-none">
            {/* Header */}
            <header className="flex flex-col gap-3 border-b border-line pb-8">
              <Heading level={1} size="h1">
                {site.name}
              </Heading>
              <Text size="lead" weight="semibold" tone="accent">
                {site.role}
              </Text>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-sec">
                <li className="flex items-center gap-1.5">{site.location}</li>
                <li>
                  <a href={contactHref} className="flex items-center gap-1.5 hover:text-text">
                    <Icon name="mail" size={15} />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.links.linkedin} className="flex items-center gap-1.5 hover:text-text">
                    <Icon name="linkedin" size={15} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.links.github} className="flex items-center gap-1.5 hover:text-text">
                    <Icon name="github" size={15} />
                    GitHub
                  </a>
                </li>
                <li>{cv.languages.join(" · ")}</li>
              </ul>
            </header>

            <CvSection title="Profile">
              <Text className="max-w-3xl">{cv.profile}</Text>
            </CvSection>

            <CvSection title="Technical skills">
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {cv.skills.map((group) => (
                  <div key={group.name} className="break-inside-avoid">
                    <dt className="text-sm font-semibold text-text">{group.name}</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Chip key={item} size="sm">
                          {item}
                        </Chip>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </CvSection>

            <CvSection title="Selected projects">
              <div className="flex flex-col gap-7">
                {cv.projects.map((p) => (
                  <TimelineItem key={p.title} {...p} />
                ))}
              </div>
            </CvSection>

            <CvSection title="Professional experience">
              <div className="flex flex-col gap-7">
                {cv.experience.map((e) => (
                  <TimelineItem key={e.title} {...e} />
                ))}
              </div>
            </CvSection>

            <div className="grid gap-10 sm:grid-cols-2">
              <CvSection title="Education & training">
                <div className="flex flex-col gap-5">
                  {cv.education.map((e) => (
                    <TimelineItem key={e.title} {...e} />
                  ))}
                </div>
              </CvSection>
              <CvSection title="Open source">
                <div className="flex flex-col gap-5">
                  {cv.openSource.map((e) => (
                    <TimelineItem key={e.title} {...e} />
                  ))}
                </div>
              </CvSection>
            </div>
          </Surface>

          <div className="flex justify-center print:hidden">
            <Button href={site.cv} download variant="secondary" icon={<Icon name="download" size={17} />}>
              Download PDF
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
