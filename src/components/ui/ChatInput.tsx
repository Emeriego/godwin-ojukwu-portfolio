"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Icon } from "./Icon";

/**
 * ChatInput: a glass pill text field with a send button.
 * Calls onSubmit with the trimmed text; clears itself afterwards.
 *
 * <ChatInput label="Ask a question" placeholder="Ask me anything…" onSubmit={(q) => …} />
 */
type ChatInputProps = {
  /** Accessible label (visually hidden) */
  label: string;
  placeholder?: string;
  onSubmit: (text: string) => void;
  /** Optional extra button before Send (e.g. voice input) */
  extraAction?: React.ReactNode;
  className?: string;
  maxLength?: number;
};

export function ChatInput({ label, placeholder, onSubmit, extraAction, className, maxLength = 300 }: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onSubmit(text);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div className="glass flex items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5 focus-within:ring-2 focus-within:ring-accent/40 sm:pl-6">
        <label className="sr-only" htmlFor="chat-input">
          {label}
        </label>
        <input
          id="chat-input"
          type="text"
          autoComplete="off"
          value={value}
          maxLength={maxLength}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="h-11 min-w-0 flex-1 bg-transparent text-base text-text outline-none placeholder:text-sec sm:h-12 sm:text-lg"
        />
        {extraAction}
        <Button type="submit" size="icon-lg" aria-label="Send question" className="size-11 sm:size-12">
          <Icon name="arrow-right" size={20} strokeWidth={2} />
        </Button>
      </div>
    </form>
  );
}
