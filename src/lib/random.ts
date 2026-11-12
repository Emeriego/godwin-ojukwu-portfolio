/**
 * Pick a random index in [0, length) that differs from `previous`,
 * so the same item never shows twice in a row.
 * `rand` is injectable so tests can make it predictable.
 */
export function nextRandomIndex(length: number, previous: number | null, rand: () => number = Math.random): number {
  if (length <= 0) throw new Error("length must be positive");
  if (length === 1) return 0;
  if (previous === null || previous < 0 || previous >= length) return Math.floor(rand() * length);
  // Choose among the other (length - 1) items, then skip over `previous`.
  const pick = Math.floor(rand() * (length - 1));
  return pick >= previous ? pick + 1 : pick;
}
