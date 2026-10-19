export function Oval({ filled, small }: { filled: boolean; small?: boolean }) {
  return (
    <span
      aria-hidden
      className={[
        "inline-block shrink-0 rounded-[50%] border-[1.5px] border-ink transition-colors",
        small ? "h-[10px] w-[16px]" : "h-[13px] w-[22px]",
        filled ? "bg-ink" : "bg-white",
      ].join(" ")}
    />
  );
}
