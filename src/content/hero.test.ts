import { describe, expect, it } from "vitest";
import { heroCopy, quickTopics } from "./hero";

const [en, de] = [heroCopy.en, heroCopy.de];

describe("hero content", () => {
  it("has the same number of typed lines in English and German", () => {
    expect(de.lines).toHaveLength(en.lines.length);
    expect(en.lines.length).toBeGreaterThanOrEqual(2);
  });

  it("has a label, question and answer for every quick topic in both languages", () => {
    for (const { id } of quickTopics) {
      for (const copy of [en, de]) {
        const t = copy.topics[id];
        expect(t.label.trim()).not.toBe("");
        expect(t.question.trim()).not.toBe("");
        expect(t.answer.trim()).not.toBe("");
      }
    }
  });

  it("has no empty strings anywhere", () => {
    for (const copy of [en, de]) {
      for (const [key, value] of Object.entries(copy)) {
        if (typeof value === "string") expect(value.trim(), key).not.toBe("");
      }
      for (const line of copy.lines) expect(line.trim()).not.toBe("");
    }
  });

  it("uses the agreed title", () => {
    expect(en.title).toBe("Software Developer");
    expect(de.title).toBe("Softwareentwickler");
  });
});
