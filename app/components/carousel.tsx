"use client";

import { useRef } from "react";
import Image from "next/image";

export interface Slide {
  src: string;
  alt: string;
}

export default function Carousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 16), behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={track}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2"
      >
        {slides.map((s, i) => (
          <a
            key={s.src}
            data-slide
            href={s.src}
            target="_blank"
            rel="noopener noreferrer"
            className="shot relative block w-[72%] flex-none snap-start sm:w-[46%]"
          >
            <div className="relative aspect-[4/5]">
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 640px) 72vw, 320px" unoptimized className="object-cover" />
            </div>
            <span className="absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5 font-mono text-[10px] text-white">
              {i + 1} / {slides.length}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous slide" className="social-btn">
          ←
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next slide" className="social-btn">
          →
        </button>
      </div>
    </div>
  );
}
