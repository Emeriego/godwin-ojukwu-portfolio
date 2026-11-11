"use client";

// Client component: the language switch and the chat need state.
import { useState } from "react";
import {
  AnswerCard,
  Button,
  ChatInput,
  Container,
  GlowBackdrop,
  GradientText,
  Heading,
  Icon,
  QuickTile,
  SegmentedControl,
  StatusPill,
  Text,
  TypedLine,
  Wordmark,
} from "@/components/ui";
import { FluidPortrait } from "@/components/media";
import { heroCopy, quickTopics, type Lang, type QuickTopic } from "@/content/hero";
import { site } from "@/lib/site";

type Answer = { question: string; answer: string };

export default function Hero() {
  const [lang, setLang] = useState<Lang>("en");
  const [topic, setTopic] = useState<QuickTopic | null>(null);
  const [typedQuestion, setTypedQuestion] = useState<string | null>(null);
  const copy = heroCopy[lang];

  // Topic answers are canned for now; typed questions get the real AI chat in build step 5.
  let answer: Answer | null = null;
  if (topic) answer = { question: copy.topics[topic].question, answer: copy.topics[topic].answer };
  else if (typedQuestion) answer = { question: typedQuestion, answer: copy.pendingAnswer };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-[4.5rem] pt-10 sm:pt-12">
      <GlowBackdrop />
      <Wordmark text={site.firstName} className="-bottom-24" />

      <Container size="md" className="relative z-10 flex flex-col items-center gap-[1.125rem] text-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <SegmentedControl
            label="Language"
            options={[
              { value: "en", label: "Hello" },
              { value: "de", label: "Hallo" },
            ]}
            value={lang}
            onChange={(l) => {
              setLang(l);
              setTypedQuestion(null);
            }}
          />
          <StatusPill>{copy.status}</StatusPill>
        </div>

        <FluidPortrait src="/images/godwin-cutout.png" alt="Portrait of Godwin Ojukwu" priority className="w-56 sm:w-64" />

        <Heading level={1} id="hero-title" lang={lang}>
          <GradientText>{copy.hello}</GradientText>
          {copy.intro}
        </Heading>

        <div className="-mt-2 flex flex-col items-center gap-2">
          <Text size="lead" weight="semibold" className="text-[clamp(1.25rem,2.4vw,1.5rem)]" lang={lang}>
            {copy.title}
          </Text>
          <TypedLine
            lines={copy.lines}
            className="min-h-12 max-w-[32.5rem] text-[0.96875rem] leading-relaxed text-faint"
          />
          <Text size="small" tone="muted" className="mt-2">
            {site.techLine.join(" · ")}
          </Text>
        </div>

        <div className="mt-5 flex w-full max-w-[40rem] flex-col items-center gap-3">
          <ChatInput label={copy.askLabel} placeholder={copy.askPlaceholder} onSubmit={(q) => { setTopic(null); setTypedQuestion(q); }} />

          <div className="grid w-full max-w-[37.5rem] grid-cols-3 gap-2 sm:grid-cols-5">
            {quickTopics.map((t) => (
              <QuickTile
                key={t.id}
                icon={t.icon}
                iconClassName={t.tone}
                label={copy.topics[t.id].label}
                active={topic === t.id}
                onClick={() => {
                  setTypedQuestion(null);
                  setTopic((current) => (current === t.id ? null : t.id));
                }}
              />
            ))}
          </div>

          {answer && <AnswerCard question={answer.question} answer={answer.answer} className="mt-1" />}
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
          <Button variant="secondary" href={site.cv} icon={<Icon name="download" size={17} />}>
            {copy.cv}
          </Button>
          <Button variant="ghost" href={site.links.github} icon={<Icon name="github" size={17} />}>
            GitHub
          </Button>
          <Button variant="ghost" href={site.links.linkedin} icon={<Icon name="linkedin" size={17} />}>
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
