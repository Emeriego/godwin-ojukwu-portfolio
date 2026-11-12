import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/**
 * ImageFrame: a rounded, responsive image holder with a fixed aspect ratio.
 * Without `src` it renders a tidy placeholder — useful while screenshots are missing.
 *
 * <ImageFrame src="/shots/laundbot.png" alt="Laundbot dashboard" ratio="16/10" />
 * <ImageFrame ratio="4/3" placeholder="Screenshot coming soon" />
 */
type ImageFrameProps = {
  src?: string | StaticImageData;
  alt?: string;
  /** CSS aspect ratio, e.g. "16/10", "4/3", "1/1" */
  ratio?: string;
  /** Visual treatment of the frame */
  variant?: "glass" | "plain";
  placeholder?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function ImageFrame({
  src,
  alt = "",
  ratio = "16/10",
  variant = "glass",
  placeholder = "Image coming soon",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl",
        variant === "glass" ? "glass p-1.5" : "",
        className,
      )}
    >
      <div className="relative w-full overflow-hidden rounded-[1.25rem] bg-chip" style={{ aspectRatio: ratio }}>
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-2 text-faint">
            <Icon name="layers" size={22} />
            <span className="text-sm">{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  );
}
