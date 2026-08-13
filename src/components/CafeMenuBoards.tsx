"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type MenuBoard = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function CafeMenuBoards({ boards }: { boards: readonly MenuBoard[] }) {
  const [active, setActive] = useState<MenuBoard | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  return (
    <>
      <div className={`mt-10 grid items-start gap-5 ${boards.length === 1 ? "mx-auto max-w-4xl" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {boards.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(image)}
            className="card group cursor-zoom-in p-2 text-left transition hover:ring-2 hover:ring-sky/50"
            aria-label={`View full size: ${image.alt}`}
          >
            <div className="rounded-[12px] bg-peach/10 p-3">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={boards.length === 1 ? "(max-width: 896px) 100vw, 896px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                className="h-auto w-full object-contain transition duration-300 group-hover:opacity-95"
              />
            </div>
            <p className="mt-2 text-center text-xs font-semibold text-muted group-hover:text-charcoal">
              Tap to view full menu
            </p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20"
            aria-label="Close full screen menu"
          >
            Close
          </button>
          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[90vh] w-auto max-w-[min(90vw,900px)] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
