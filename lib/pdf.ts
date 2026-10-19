import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { RACES, PROPOSALS, ELECTION, PDF_PAGE_HEIGHT, PDF_CROP_X, OVAL_W, OVAL_H } from "@/data/ballot";
import { isWriteInId, type Picks } from "./picks";

/**
 * Builds the voter's marked ballot by drawing filled ovals onto the Board of
 * Elections' own sample ballot PDF (both sheets, front and back), at the exact
 * coordinates of the printed ovals. Nothing else on the ballot is altered.
 */
export async function buildMarkedBallot(picks: Picks): Promise<Uint8Array> {
  const res = await fetch(ELECTION.officialPdf);
  if (!res.ok) throw new Error("Could not load the official ballot file.");
  const bytes = await res.arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const pages = doc.getPages();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const black = rgb(0, 0, 0);

  const fill = (page: number, x: number, y: number) => {
    pages[page].drawEllipse({
      x: PDF_CROP_X + x + OVAL_W / 2,
      y: PDF_PAGE_HEIGHT - (y + OVAL_H / 2),
      xScale: OVAL_W / 2 + 0.4,
      yScale: OVAL_H / 2 + 0.4,
      color: black,
    });
  };

  for (const race of RACES) {
    const selected = picks.races[race.id] ?? [];
    for (const id of selected) {
      if (isWriteInId(id)) {
        const slot = Number(id.split(":")[2]);
        const wi = race.writeIns[slot];
        if (!wi) continue;
        fill(wi.page, wi.x, wi.y);
        const name = (picks.writeIns[race.id] ?? [])[slot]?.trim();
        if (name) {
          pages[wi.page].drawText(name, {
            x: PDF_CROP_X + wi.x,
            y: PDF_PAGE_HEIGHT - (wi.y + 22),
            size: 7,
            font,
            color: black,
            maxWidth: 100,
          });
        }
      } else {
        const oval = race.ovals.find((o) => o.id === id);
        if (oval) fill(oval.page, oval.x, oval.y);
      }
    }
  }

  for (const prop of PROPOSALS) {
    const v = picks.props[prop.id];
    if (v === "yes") fill(prop.yes.page, prop.yes.x, prop.yes.y);
    if (v === "no") fill(prop.no.page, prop.no.x, prop.no.y);
  }

  doc.setTitle("Ballot Buddy: SAMPLE ballot for planning only, Nov 3, 2026");
  doc.setProducer("Ballot Buddy");
  return doc.save();
}

export const PDF_FILENAME = "ballot-buddy-SAMPLE-ballot-nov-3-2026.pdf";

export function toFile(bytes: Uint8Array, filename: string = PDF_FILENAME) {
  const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
  return { blob, file: new File([blob], filename, { type: "application/pdf" }) };
}

/** Download on desktop; on iOS Safari this opens the PDF with a share option. */
export function downloadBlob(blob: Blob, filename: string = PDF_FILENAME) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

export function canShareFiles(): boolean {
  if (typeof navigator === "undefined" || typeof navigator.canShare !== "function") return false;
  try {
    const probe = new File([new Uint8Array([37, 80, 68, 70])], "probe.pdf", { type: "application/pdf" });
    return navigator.canShare({ files: [probe] });
  } catch {
    return false;
  }
}
