import { describe, expect, it } from "vitest";
import { cv } from "./cv";

describe("CV content", () => {
  it("has a profile", () => {
    expect(cv.profile.length).toBeGreaterThan(100);
  });

  it("dates every job, degree and contribution", () => {
    for (const entry of [...cv.experience, ...cv.education, ...cv.openSource]) {
      expect(entry.period, entry.title).toBeTruthy();
    }
  });

  it("lists experience by most recent end date first", () => {
    // Overlapping roles are ordered by when they ended, like the PDF CV
    const endYears = cv.experience.map((e) => Number(e.period?.match(/\d{4}(?!.*\d{4})/)?.[0]));
    expect(endYears).toEqual([...endYears].sort((a, b) => b - a));
  });

  it("has no empty skills, points or titles", () => {
    for (const group of cv.skills) {
      expect(group.items.length, group.name).toBeGreaterThan(0);
      for (const item of group.items) expect(item.trim()).not.toBe("");
    }
    for (const entry of [...cv.projects, ...cv.experience, ...cv.education, ...cv.openSource]) {
      expect(entry.title.trim()).not.toBe("");
      for (const p of entry.points ?? []) expect(p.trim()).not.toBe("");
    }
  });

  it("leads with ComBridge as the flagship project", () => {
    expect(cv.projects[0].title).toMatch(/ComBridge/);
  });
});
