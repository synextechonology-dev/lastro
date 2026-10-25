"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ rotulo }: { rotulo: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calmo) {
      video.removeAttribute("autoplay");
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      src="/midia/hero-video.mp4"
      poster="/midia/hero-poster.jpg"
      width={720}
      height={1280}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={rotulo}
    />
  );
}
