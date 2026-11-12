import { cn } from "@/lib/cn";
import { FadeText } from "./FadeText";

/**
 * AnswerCard: shows a question and its answer in a glass card.
 * role="status" makes screen readers announce new answers politely.
 * When the question or answer changes, the words dissolve in (FadeText).
 *
 * <AnswerCard question="Who is Godwin?" answer="Godwin is…" />
 */
export function AnswerCard({ question, answer, className }: { question: string; answer: string; className?: string }) {
  return (
    <div role="status" className={cn("glass w-full rounded-3xl px-5 py-4 text-left sm:px-6 sm:py-5", className)}>
      <p className="text-[0.8125rem] font-semibold text-sec">
        <FadeText text={question} />
      </p>
      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-text sm:text-base">
        <FadeText text={answer} stagger={25} />
      </p>
    </div>
  );
}
