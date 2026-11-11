import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Join class names and resolve Tailwind conflicts, so a className passed
 * to a component overrides its defaults: cn("px-4", "px-6") → "px-6".
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
