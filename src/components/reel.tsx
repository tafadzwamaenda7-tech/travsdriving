import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type ReelSource = {
  src: string;
  poster: string;
  label: string;
};

type ReelProps = {
  reel: ReelSource;
  className?: string;
  /** Load metadata eagerly for above-the-fold media. */
  priority?: boolean;
  /** Decorative media is hidden from assistive tech. */
  decorative?: boolean;
  rounded?: string;
};

/**
 * A muted, looping vertical clip that only plays while it is on screen.
 * The poster is always present so reduced-motion users and slow connections
 * still get a real image instead of an empty box. Non-decorative reels get a
 * quiet pause/play control; full-bleed decorative heroes stay uncluttered.
 */
export function Reel({
  reel,
  className = "",
  priority = false,
  decorative = false,
  rounded = "rounded-none",
}: ReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let visible = false;
    const reduceMotion = () =>
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const syncPlayState = () => setIsPlaying(!video.paused);
    const tryPlay = () => {
      if (!visible || reduceMotion() || userPaused.current || !video.paused) return;
      void video.play().catch(() => undefined);
    };
    const onReady = () => tryPlay();
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("play", syncPlayState);
    video.addEventListener("pause", syncPlayState);

    const motion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      if (reduceMotion()) video.pause();
      else tryPlay();
    };
    motion?.addEventListener?.("change", onMotionChange);

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver === "undefined") {
      visible = true;
      tryPlay();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          visible = entry.isIntersecting;
          if (!visible || reduceMotion()) video.pause();
          else tryPlay();
        },
        { rootMargin: "120px 0px", threshold: 0.15 },
      );
      observer.observe(video);
    }

    return () => {
      observer?.disconnect();
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("play", syncPlayState);
      video.removeEventListener("pause", syncPlayState);
      motion?.removeEventListener?.("change", onMotionChange);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextPaused = !userPaused.current;
    userPaused.current = nextPaused;
    if (nextPaused) video.pause();
    else void video.play().catch(() => undefined);
  };

  return (
    <div className={`relative overflow-hidden bg-surface ${rounded} ${className}`}>
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        muted
        loop
        playsInline
        preload={priority ? "metadata" : "none"}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : reel.label}
        aria-hidden={decorative ? true : undefined}
        tabIndex={-1}
        className="photo-soft h-full w-full object-cover"
      />
      {!decorative && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? `Pause video: ${reel.label}` : `Play video: ${reel.label}`}
          className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-warm-white/40 bg-ink/75 text-warm-white/90 backdrop-blur-sm transition-all hover:border-warm-white hover:bg-ink hover:text-warm-white active:scale-95"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
        </button>
      )}
    </div>
  );
}
