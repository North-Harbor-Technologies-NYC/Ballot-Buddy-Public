"use client";

import { useEffect, useRef, useState } from "react";
import { ELECTION } from "@/data/ballot";

/**
 * Share the guide itself (a link), not the marked ballot. The PDFs stay on
 * the private path (Download / Share files) by design.
 */
const TEXT = ELECTION.shareText;

export function ShareMenu({ onToast }: { onToast: (s: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const url = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
  const enc = encodeURIComponent;
  const targets: { name: string; href: string }[] = [
    { name: "X", href: `https://twitter.com/intent/tweet?text=${enc(TEXT)}&url=${enc(url)}` },
    { name: "Bluesky", href: `https://bsky.app/intent/compose?text=${enc(`${TEXT} ${url}`)}` },
    { name: "Threads", href: `https://www.threads.net/intent/post?text=${enc(`${TEXT} ${url}`)}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { name: "Email", href: `mailto:?subject=${enc("Ballot Buddy for Nov 3")}&body=${enc(`${TEXT}\n\n${url}`)}` },
    { name: "Text message", href: `sms:?&body=${enc(`${TEXT} ${url}`)}` },
  ];

  const native = async () => {
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title: "Ballot Buddy", text: TEXT, url });
        setOpen(false);
        return;
      }
    } catch (e) {
      if ((e as Error)?.name === "AbortError") return;
    }
    copy();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      onToast("Link copied.");
    } catch {
      onToast(url);
    }
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="rounded-full border border-ink/20 px-3 py-2 text-[13px] hover:bg-faint"
      >
        Share this guide
      </button>
      {open && (
        <div role="menu" className="absolute bottom-full right-0 mb-2 w-56 overflow-hidden rounded-lg border border-ink/15 bg-paper shadow-xl">
          <div className="border-b border-ink/10 px-3 py-2 text-[11px] text-muted">Shares the link, never your picks.</div>
          <button role="menuitem" onClick={native} className="block w-full px-3 py-2 text-left text-[13px] hover:bg-faint">
            Share&hellip;
          </button>
          <button role="menuitem" onClick={copy} className="block w-full px-3 py-2 text-left text-[13px] hover:bg-faint">
            Copy link
          </button>
          {targets.map((t) => (
            <a
              key={t.name}
              role="menuitem"
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-[13px] hover:bg-faint"
            >
              {t.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
