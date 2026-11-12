import Hero from "@/components/sections/Hero";
import { Container, Heading, Section, Surface, Text } from "@/components/ui";
import { sections } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Placeholders: each section gets its real content in later build steps */}
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
