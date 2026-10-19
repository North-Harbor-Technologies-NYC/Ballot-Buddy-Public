/**
 * "I planned to vote" sticker: a square image a voter can post instead of a
 * marked ballot. Built on a canvas from the sticker artwork; no server.
 */
export const STICKER_FILENAME = "i-planned-to-vote.png";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("sticker artwork failed to load"));
    img.src = src;
  });
}

export async function buildPlannedSticker(opts: { url: string; dateLine: string; publisher: string }): Promise<Blob> {
  const size = 1080;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas unavailable");

  if (typeof document !== "undefined" && "fonts" in document) {
    try {
      await document.fonts.ready;
    } catch {
      /* fall through to system font */
    }
  }
  const family = getComputedStyle(document.body).fontFamily || "system-ui, sans-serif";

  // background
  ctx.fillStyle = "#e6e3dc";
  ctx.fillRect(0, 0, size, size);
  // soft blue field behind the sticker, echoing the sticker's own color
  ctx.fillStyle = "#c7e0f3";
  ctx.beginPath();
  ctx.arc(size / 2, 400, 380, 0, Math.PI * 2);
  ctx.fill();

  const img = await loadImage("/buddy-sticker.png");
  const s = 600;
  ctx.drawImage(img, (size - s) / 2, 100, s, s);

  ctx.textAlign = "center";
  ctx.fillStyle = "#141414";
  ctx.font = `800 86px ${family}`;
  ctx.fillText("I planned to vote.", size / 2, 830);
  ctx.font = `500 40px ${family}`;
  ctx.fillStyle = "#1b2a6b";
  ctx.fillText(opts.dateLine, size / 2, 895);
  ctx.font = `400 30px ${family}`;
  ctx.fillStyle = "#5c5c5c";
  ctx.fillText(`Plan yours at ${opts.url}`, size / 2, 980);
  ctx.font = `400 24px ${family}`;
  ctx.fillStyle = "#8a8a8a";
  ctx.fillText(`Ballot Buddy by ${opts.publisher}`, size / 2, 1030);

  const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
  if (!blob) throw new Error("could not encode sticker");
  return blob;
}
