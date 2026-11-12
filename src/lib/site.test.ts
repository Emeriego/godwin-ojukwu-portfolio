import { describe, expect, it } from "vitest";
import { contactHref, site } from "./site";

describe("contactHref", () => {
  const url = new URL(contactHref);

  it("opens an email to Godwin", () => {
    expect(url.protocol).toBe("mailto:");
    expect(url.pathname).toBe(site.email);
  });

  it("pre-fills a subject and a message", () => {
    expect(url.searchParams.get("subject")).toMatch(/software developer/i);
    expect(url.searchParams.get("body")).toMatch(/^Hi Godwin,/);
  });

  it("encodes spaces as %20, not +, so every mail app shows them correctly", () => {
    expect(contactHref).not.toContain("+");
    expect(contactHref).toContain("%20");
  });
});
