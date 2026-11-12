import Image, { type StaticImageData } from "next/image";
import { FluidBlob } from "@/components/media/FluidBlob";
import { cn } from "@/lib/cn";

/**
 * FluidPortrait: a cut-out photo inside a living, morphing shape,
 * with a shadow blob behind and small splashes around it.
 * Fully responsive: everything is positioned in % of the component's width.
 *
 * <FluidPortrait src="/images/me-cutout.png" alt="…" className="w-64" />
 *
 * Tune the photo's framing with imageScale / imageX / imageY (percent of the blob).
 */
type Splash = { x: number; y: number; size: number; opacity: number; duration: number };

const defaultSplashes: Splash[] = [
  { x: 84.4, y: 8.9, size: 8.6, opacity: 0.85, duration: 9 },
  { x: 94.1, y: 38.8, size: 3.9, opacity: 0.65, duration: 11 },
  { x: 85.5, y: 73.8, size: 11.3, opacity: 0.8, duration: 10 },
  { x: 1.2, y: 20.6, size: 6.6, opacity: 0.75, duration: 12 },
  { x: 7.4, y: 72.4, size: 4.3, opacity: 0.6, duration: 9.5 },
];

type FluidPortraitProps = {
  src: string | StaticImageData;
  alt: string;
  /** Width class, e.g. "w-64 sm:w-72" (height follows) */
  className?: string;
  /** Photo width as % of the blob (default 161) */
  imageScale?: number;
  /** Photo offset as % of the blob (defaults frame a chest-up cut-out) */
  imageX?: number;
  imageY?: number;
  splashes?: Splash[] | false;
  priority?: boolean;
};

export function FluidPortrait({
  src,
  alt,
  className,
  imageScale = 161,
  imageX = -30.5,
  imageY = 10.5,
  splashes = defaultSplashes,
  priority = false,
}: FluidPortraitProps) {
  return (
    <div className={cn("relative aspect-[256/214]", className)}>
      {splashes &&
        splashes.map((s, i) => (
          <FluidBlob
            key={i}
            float
            duration={s.duration}
            delay={i * 1.7}
            opacity={s.opacity}
            className="absolute"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.size}%` }}
          />
        ))}

      {/* Soft shadow shape, morphing out of step with the portrait */}
      <FluidBlob
        fill="patch"
        duration={16}
        delay={5}
        className="absolute"
        style={{ left: "18%", top: "11.7%", width: "70.3%" }}
      />

      {/* The portrait itself */}
      <FluidBlob float shadow duration={14} className="absolute" style={{ left: "14.1%", top: "5.6%", width: "74.2%" }}>
        <Image
          src={src}
          alt={alt}
          width={553}
          height={451}
          priority={priority}
          sizes="(min-width: 1920px) 30rem, 20rem"
          className="absolute h-auto max-w-none"
          style={{ width: `${imageScale}%`, left: `${imageX}%`, top: `${imageY}%` }}
        />
      </FluidBlob>
    </div>
  );
}
