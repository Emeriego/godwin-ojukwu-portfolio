import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

/**
 * PhotoMosaic: one photo split into rounded tiles, with an accent tile.
 * Tiles are defined on a 400×520 grid and positioned in %, so it scales to any width.
 * Rule that keeps it tidy: each column's inner edges line up; only outer edges are ragged.
 * Hovering a tile lifts it slightly.
 *
 * <PhotoMosaic src="/images/me.webp" alt="Portrait of …" className="w-80" />
 */
type Tile = [x: number, y: number, w: number, h: number];

const GRID_W = 400;
const GRID_H = 520;

// Measured from the original mosaic design.
const defaultTiles: Tile[] = [
  [54, 10, 94, 96], [0, 113, 148, 134], [54, 254, 94, 108], [54, 367, 94, 108],
  [154, 0, 107, 221], [154, 228, 107, 99], [154, 333, 107, 187],
  [267, 31, 75, 115], [267, 152, 121, 136], [267, 293, 133, 110],
];

type PhotoMosaicProps = {
  src: string | StaticImageData;
  alt: string;
  /** Width class; height follows (400:520) */
  className?: string;
  tiles?: Tile[];
  /** The decorative accent tile, or false for none */
  accent?: Tile | false;
  /** Photo width on the grid, and its offset (tune the framing) */
  imageWidth?: number;
  imageX?: number;
  imageY?: number;
  /** Natural size of the photo file (for its aspect ratio) */
  photoSize?: [number, number];
};

export function PhotoMosaic({
  src,
  alt,
  className,
  tiles = defaultTiles,
  accent = [267, 409, 57, 55],
  imageWidth = 638,
  imageX = -108,
  imageY = 0,
  photoSize = [1134, 924],
}: PhotoMosaicProps) {
  const pct = (v: number, of: number) => `${(v / of) * 100}%`;

  return (
    <div role="img" aria-label={alt} className={cn("relative aspect-[400/520]", className)}>
      {tiles.map(([x, y, w, h], i) => (
        <div
          key={i}
          className="absolute overflow-hidden rounded-[0.875rem] transition-transform duration-300 hover:scale-[1.03]"
          style={{ left: pct(x, GRID_W), top: pct(y, GRID_H), width: pct(w, GRID_W), height: pct(h, GRID_H) }}
        >
          <Image
            src={src}
            alt=""
            width={photoSize[0]}
            height={photoSize[1]}
            sizes="(min-width: 1920px) 40rem, 28rem"
            className="absolute h-auto max-w-none"
            style={{
              width: pct(imageWidth, w),
              left: pct(imageX - x, w),
              top: pct(imageY - y, h),
            }}
          />
        </div>
      ))}
      {accent && (
        <div
          aria-hidden="true"
          className="absolute rounded-[0.875rem] bg-highlight"
          style={{ left: pct(accent[0], GRID_W), top: pct(accent[1], GRID_H), width: pct(accent[2], GRID_W), height: pct(accent[3], GRID_H) }}
        />
      )}
    </div>
  );
}
