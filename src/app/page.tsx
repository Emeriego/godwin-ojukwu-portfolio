import { Container, GradientText, Heading, Section, StatusPill, Surface, Text } from "@/components/ui";
import { sections, site } from "@/lib/site";

// Layout skeleton. Each section gets its real content in later build steps.
export default function Home() {
  return (
    <main>
      <Section spacing="sm" className="text-center">
        <Container size="md">
          <StatusPill>Open to software developer roles in Germany</StatusPill>
          <Heading level={1} className="mt-6">
            <GradientText>Hello</GradientText>, I&apos;m {site.firstName}.
          </Heading>
          <Text size="lead" weight="semibold" className="mt-2">
            {site.role}
          </Text>
          <Text size="small" tone="muted" className="mt-1">
            {site.techLine.join(" · ")}
          </Text>
          <Text size="small" tone="faint" className="mt-10">
            Hero design arrives in step 2.
          </Text>
        </Container>
      </Section>

      {sections.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 0 ? "alt" : "default"} spacing="lg">
          <Container>
            <Heading level={2}>{s.label}</Heading>
            <Surface className="mt-6">
              <Text tone="muted">Coming in a later step.</Text>
            </Surface>
          </Container>
        </Section>
      ))}
    </main>
  );
}
