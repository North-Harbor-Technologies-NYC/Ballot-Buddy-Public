"use client";

import { useEffect, useRef } from "react";

export function Drawer({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="presentation">
      <button
        aria-label="Dismiss panel"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[1px]"
      />
      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative flex h-full w-full max-w-[560px] flex-col bg-paper shadow-2xl outline-none sm:border-l sm:border-ink/15"
      >
        <header className="flex items-start justify-between gap-4 border-b border-ink/15 px-5 pb-3 pt-[max(1rem,env(safe-area-inset-top))]">
          <div className="min-w-0">
            {eyebrow && (
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{eyebrow}</div>
            )}
            <h2 className="text-lg font-semibold leading-tight">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full border border-ink/20 px-3 py-1 text-sm hover:bg-faint"
          >
            Close
          </button>
        </header>
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
