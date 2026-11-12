import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Button,
  Chip,
  Container,
  GradientText,
  Heading,
  Icon,
  Section,
  StatusPill,
  Surface,
  Text,
  type IconName,
} from "@/components/ui";
import { FluidBlob, FluidPortrait, ImageFrame, PhoneMockup, PhotoMosaic } from "@/components/media";
import SegmentedDemo from "./SegmentedDemo";

// A living catalogue of every component and variant.
// Use it to check components in both themes and at every screen size (toggle the theme in the nav).
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const themeGroups = [
  { title: "Brand palette (change these to re-brand)", tokens: ["--brand-primary", "--brand-primary-deep", "--brand-secondary", "--brand-highlight"] },
  { title: "Surfaces and text (switch with the theme)", tokens: ["--bg", "--bg-2", "--text", "--sec", "--faint", "--chip"] },
  { title: "Accents and effects", tokens: ["--accent", "--on-accent", "--highlight", "--gradient", "--blob", "--glow"] },
];

const buttonVariants = ["primary","secondary", "outline", "soft", "ghost", "link"] as const;
const buttonSizes = ["sm", "md", "lg"] as const;
const icons: IconName[] = [
  "sun", "moon", "menu", "close", "arrow-right", "arrow-up-right", "download", "mail",
  "mic", "smile", "briefcase", "layers", "clock", "copy", "check", "github", "linkedin",
];

function Demo({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-8">
      <Heading level={2} size="h3">
        {title}
      </Heading>
      {note && (
        <Text size="small" tone="muted" className="mt-1">
          {note}
        </Text>
      )}
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main>
      <Section spacing="md">
        <Container className="flex flex-col gap-14">
          <div>
            <Heading level={1} size="eyebrow">
              Design system
            </Heading>
            <Heading level={2} size="h1" className="mt-2">
              Every component, every variant.
            </Heading>
            <Text size="lead" tone="muted" className="mt-3 max-w-2xl">
              Toggle the theme in the nav and resize the window to check each one in light, dark, and from phone to TV.
            </Text>
          </div>

          <Demo
            title="Theme colours"
            note="Every colour comes from src/styles/tokens.css. Change a brand colour there and every swatch and component below updates. Toggle the theme to see the dark values."
          >
            <div className="flex flex-col gap-8">
              {themeGroups.map((group) => (
                <div key={group.title}>
                  <Heading level={3} size="h4">{group.title}</Heading>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {group.tokens.map((t) => (
                      <div key={t}>
                        <div className="h-16 rounded-2xl border border-line" style={{ background: `var(${t})` }} />
                        <Text as="span" size="caption" tone="muted" className="mt-1.5 block font-mono">
                          {t}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Demo>

          <Demo title="Buttons" note="variant × size. Buttons with href render as links.">
            <div className="flex flex-col gap-5">
              {buttonVariants.map((v) => (
                <div key={v} className="flex flex-wrap items-center gap-3">
                  <Text as="span" size="caption" tone="faint" className="w-20">
                    {v}
                  </Text>
                  {buttonSizes.map((s) => (
                    <Button key={s} variant={v} size={s}>
                      {v} {s}
                    </Button>
                  ))}
                </div>
              ))}
              <div className="flex flex-wrap items-center gap-3">
                <Text as="span" size="caption" tone="faint" className="w-20">
                  with icons
                </Text>
                <Button icon={<Icon name="mail" />}>Contact me</Button>
                <Button variant="secondary" icon={<Icon name="download" />}>
                  Download CV
                </Button>
                <Button variant="outline" iconRight={<Icon name="arrow-right" />}>
                  Read the case study
                </Button>
                <Button variant="soft" size="icon" aria-label="Menu">
                  <Icon name="menu" />
                </Button>
                <Button size="icon-lg" aria-label="Send">
                  <Icon name="arrow-right" size={20} />
                </Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="max-w-sm">
                <Button fullWidth size="lg">
                  Full width
                </Button>
              </div>
            </div>
          </Demo>

          <Demo title="Headings" note="level = semantic tag; size = look. All sizes are fluid.">
            <div className="flex flex-col gap-4">
              <Heading level={3} size="display">
                <GradientText>Display</GradientText> heading
              </Heading>
              <Heading level={3} size="h1">Heading h1</Heading>
              <Heading level={3} size="h2">Heading h2</Heading>
              <Heading level={3} size="h3">Heading h3</Heading>
              <Heading level={3} size="h4">Heading h4</Heading>
              <Heading level={3} size="eyebrow">Eyebrow label</Heading>
            </div>
          </Demo>

          <Demo title="Text" note="size × tone">
            <div className="flex max-w-2xl flex-col gap-3">
              <Text size="lead">Lead: from the first sketch to the final release.</Text>
              <Text>Body: I design, build and ship software that solves real problems.</Text>
              <Text size="small" tone="muted">Small, muted: supporting information.</Text>
              <Text size="caption" tone="faint">Caption, faint: fine print.</Text>
              <Text tone="accent" weight="semibold">Accent, semibold</Text>
            </div>
          </Demo>

          <Demo title="Surfaces" note="variant: glass, solid, soft, outline. interactive lifts on hover.">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(["glass", "solid", "soft", "outline"] as const).map((v) => (
                <Surface key={v} variant={v} padding="lg" interactive>
                  <Heading level={3} size="h4">{v}</Heading>
                  <Text size="small" tone="muted" className="mt-1">
                    A {v} surface for cards and panels.
                  </Text>
                </Surface>
              ))}
            </div>
          </Demo>

          <Demo title="Chips and status">
            <div className="flex flex-wrap items-center gap-2">
              <Chip>Java 21</Chip>
              <Chip>Spring Boot</Chip>
              <Chip variant="glass">Glass</Chip>
              <Chip variant="accent">Accent</Chip>
              <Chip variant="outline">Outline</Chip>
              <Chip size="sm">Small</Chip>
              <StatusPill>Open to software developer roles in Germany</StatusPill>
              <StatusPill dot="brand">Available</StatusPill>
            </div>
          </Demo>

          <Demo title="Segmented control" note="Apple-style switch, e.g. Hello | Hallo">
            <SegmentedDemo />
          </Demo>

          <Demo title="Icons">
            <div className="flex flex-wrap gap-3">
              {icons.map((name) => (
                <Surface key={name} variant="soft" radius="md" padding="sm" className="flex w-24 flex-col items-center gap-2">
                  <Icon name={name} size={22} />
                  <Text as="span" size="caption" tone="muted">
                    {name}
                  </Text>
                </Surface>
              ))}
            </div>
          </Demo>

          <Demo title="Fluid shapes" note="FluidBlob: morphing shapes, alone or holding an image">
            <div className="flex flex-wrap items-end gap-8">
              <FluidBlob className="w-32" />
              <FluidBlob className="w-24" float duration={9} />
              <FluidBlob className="w-28" fill="patch" />
              <FluidBlob className="w-14" float duration={8} delay={2} opacity={0.7} />
            </div>
          </Demo>

          <Demo title="Fluid portrait" note="Cut-out photo inside a living shape, with splashes">
            <FluidPortrait src="/images/godwin-cutout.png" alt="Godwin Ojukwu" className="w-64 sm:w-80" />
          </Demo>

          <Demo title="Image frame" note="Responsive image holder with a placeholder state">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ImageFrame src="/images/godwin.webp" alt="Godwin at his desk" ratio="16/10" />
              <ImageFrame ratio="16/10" placeholder="Screenshot coming soon" />
            </div>
          </Demo>

          <Demo title="Phone mockup" note="Device frame for app screenshots or live UI">
            <div className="flex flex-wrap items-start gap-10">
              <PhoneMockup glow className="w-56 sm:w-64" label="Empty phone screen">
                <div className="flex size-full items-center justify-center text-sm text-device-muted">Screen content</div>
              </PhoneMockup>
              <PhoneMockup className="w-48">
                <div className="flex size-full items-center justify-center p-4 text-center text-xs text-device-muted">
                  Any size: the frame scales with its width
                </div>
              </PhoneMockup>
            </div>
          </Demo>

          <Demo title="Photo mosaic" note="One photo split into tiles; hover a tile">
            <PhotoMosaic src="/images/godwin.webp" alt="Portrait of Godwin Ojukwu" className="w-72 sm:w-96" />
          </Demo>
        </Container>
      </Section>
    </main>
  );
}
