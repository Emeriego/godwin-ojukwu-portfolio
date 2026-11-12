"use client";

import { useState } from "react";
import { SegmentedControl, Text } from "@/components/ui";

// SegmentedControl is controlled, so the demo needs a little state.
export default function SegmentedDemo() {
  const [lang, setLang] = useState<"en" | "de">("en");
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SegmentedControl
        label="Language"
        options={[
          { value: "en", label: "Hello" },
          { value: "de", label: "Hallo" },
        ]}
        value={lang}
        onChange={setLang}
      />
      <SegmentedControl
        label="Size example"
        size="md"
        options={[
          { value: "en", label: "English" },
          { value: "de", label: "Deutsch" },
        ]}
        value={lang}
        onChange={setLang}
      />
      <Text as="span" size="small" tone="muted">
        Selected: {lang}
      </Text>
    </div>
  );
}
