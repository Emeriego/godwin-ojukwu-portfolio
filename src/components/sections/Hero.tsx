"use client";

// Client component: the chat needs state, and the text follows the language chosen in the nav.
import { useState } from "react";
import {
  AnswerCard,
  Button,
  ChatInput,
  Container,
  FadeText,
  GlowBackdrop,
  Heading,
  Icon,
  QuickTile,
  StatusPill,
  Text,
  TypedLine,
  Wordmark,
} from "@/components/ui";
import { FluidPortrait } from "@/components/media";
import { useLanguage } from "@/components/LanguageProvider";
import { heroCopy, quickTopics, type QuickTopic } from "@/content/hero";
import { site } from "@/lib/site";

type Answer = { question: string; answer: string };

export default function Hero() {
  const { lang } = useLanguage();
  const [topic, setTopic] = useState<QuickTopic | null>(null);
  const [typedQuestion, setTypedQuestion] = useState<string | null>(null);
  const copy = heroCopy[lang];

  // A typed question belongs to the language it was asked in: clear it when the language changes
  const [prevLang, setPrevLang] = useState(lang);
  if (prevLang !== lang) {
    setPrevLang(lang);
    setTypedQuestion(null);
  }

  // Topic answers are canned for now; typed questions get the real AI chat in build step 5.
  let answer: Answer | null = null;
  if (topic) answer = { question: copy.topics[topic].question, answer: copy.topics[topic].answer };
  else if (typedQuestion) answer = { question: typedQuestion, answer: copy.pendingAnswer };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-[4.5rem] pt-10 sm:pt-12">
      <GlowBackdrop />
      {/* Offset in em so the letters always meet the section edge, at every screen size */}
      <Wordmark text={site.firstName} className="-bottom-[0.42em]" />

      <Container size="md" className="relative z-10 flex flex-col items-center gap-[1.125rem] text-center">
        <StatusPill>
          <FadeText text={copy.status} />
        </StatusPill>

        <FluidPortrait src="/images/godwin-cutout.png" alt="Portrait of Godwin Ojukwu" priority className="w-56 sm:w-64" />

        <Heading level={1} id="hero-title" lang={lang}>
          <FadeText text={copy.hello} wordClassName="text-gradient" />
          <FadeText text={copy.intro} />
        </Heading>

        <div className="-mt-2 flex flex-col items-center gap-2">
          <Text size="lead" weight="semibold" className="text-[clamp(1.25rem,2.4vw,1.5rem)]" lang={lang}>
            <FadeText text={copy.title} />
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
                label={<FadeText text={copy.topics[t.id].label} />}
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
          <Button variant="secondary" href="/cv" icon={<Icon name="file" size={17} />}>
            <FadeText text={copy.cv} />
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
