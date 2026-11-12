import { describe, expect, it } from "vitest";
import { nextRandomIndex } from "./random";

describe("nextRandomIndex", () => {
  it("never returns the previous index", () => {
    for (let previous = 0; previous < 5; previous++) {
      for (let i = 0; i < 200; i++) {
        expect(nextRandomIndex(5, previous)).not.toBe(previous);
      }
    }
  });

  it("always stays in range", () => {
    for (let i = 0; i < 500; i++) {
      const n = nextRandomIndex(5, i % 5);
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(5);
    }
  });

  it("can reach every other index", () => {
    const seen = new Set<number>();
    // Deterministic sweep of the random source
    for (let r = 0; r < 1; r += 0.01) seen.add(nextRandomIndex(5, 2, () => r));
    expect([...seen].sort()).toEqual([0, 1, 3, 4]);
  });

  it("handles edge cases", () => {
    expect(nextRandomIndex(1, 0)).toBe(0);
    expect(nextRandomIndex(3, null, () => 0.99)).toBe(2);
    expect(nextRandomIndex(3, 7, () => 0)).toBe(0); // out-of-range previous is ignored
    expect(() => nextRandomIndex(0, null)).toThrow();
  });
});
