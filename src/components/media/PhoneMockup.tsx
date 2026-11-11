import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * PhoneMockup: a phone frame for app screenshots or live UI.
 * Pass an <Image> (screenshot) or any JSX as children; it fills the screen.
 *
 * <PhoneMockup className="w-64"><Image src="/shots/app.png" alt="…" fill /></PhoneMockup>
 * <PhoneMockup glow>…custom screen UI…</PhoneMockup>
 */
type PhoneMockupProps = {
  children?: ReactNode;
  /** Width class; height follows the 9:19 phone ratio. Default w-[18.75rem] */
  className?: string;
  /** Soft green glow behind the phone */
  glow?: boolean;
  /** Screen background when content doesn't cover it */
  screenClassName?: string;
  /** Accessible description of what the screen shows */
  label?: string;
};

export function PhoneMockup({ children, className, glow = false, screenClassName, label }: PhoneMockupProps) {
  return (
    <div className={cn("relative w-[18.75rem]", className)}>
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-x-[-20%] top-[15%] aspect-square rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] blur-2xl"
        />
      )}
      <div
        role={label ? "img" : undefined}
        aria-label={label}
        className="relative aspect-[9/18.6] rounded-[3.25rem] border-[0.7rem] border-device-frame bg-device-frame shadow-[0_1.875rem_5rem_var(--blob-shadow)]"
      >
        <div className={cn("relative size-full overflow-hidden rounded-[2.6rem] bg-device-screen text-device-ink", screenClassName)}>
          {/* Dynamic island */}
          <div aria-hidden="true" className="absolute left-1/2 top-2.5 z-10 h-6 w-[30%] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}
