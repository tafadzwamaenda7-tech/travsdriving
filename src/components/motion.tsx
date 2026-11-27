/* eslint-disable react-refresh/only-export-components -- motion hooks and primitives ship together */
import {
  createElement,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type RevealKind = "rise" | "scale" | "pop" | "drop";

type MotionProps = {
  /** Render with the most appropriate semantic element for the content. */
  as?: ElementType;
  /** Motion primitive applied when the element enters the viewport. */
  kind?: RevealKind;
  /** Milliseconds added before the reveal begins. */
  delay?: number;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

/**
 * IntersectionObserver-backed reveal. The element starts hidden only when
 * JavaScript and animation are available; reduced-motion users get the final
 * state immediately. Each instance observes itself, so it works inside tabs
 * and conditionally rendered panels without a global registry.
 */
export function Reveal({
  as = "div",
  kind = "rise",
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}: MotionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduced || typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        node.classList.add("is-visible");
        observer.unobserve(node);
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: `reveal reveal--${kind} ${className}`.trim(),
      style: { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties,
      "data-reveal": kind,
    },
    children,
  );
}

type EnterProps = {
  as?: ElementType;
  /** Position in the page-load stagger. */
  index?: number;
} & Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    children?: ReactNode;
  };

/** Staggered first-paint entrance used by hero copy and controls. */
export function Enter({
  as = "div",
  index = 0,
  className = "",
  style,
  children,
  ...rest
}: EnterProps) {
  return createElement(
    as,
    {
      ...rest,
      className: `enter-item ${className}`.trim(),
      style: { ...style, "--enter-index": index } as CSSProperties,
    },
    children,
  );
}

/**
 * Sets --px/--py (-1…1) on a hero root. Pointer listeners are added only for
 * fine pointers and only when motion is welcome; the CSS transforms fall back
 * to 0 on touch and reduced-motion devices.
 */
export function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fine = window.matchMedia?.("(pointer: fine)").matches ?? false;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (!fine || reduced) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const apply = () => {
      frame = 0;
      node.style.setProperty("--px", nextX.toFixed(3));
      node.style.setProperty("--py", nextY.toFixed(3));
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      nextX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      nextY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    const reset = () => {
      nextX = 0;
      nextY = 0;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
      node.style.removeProperty("--px");
      node.style.removeProperty("--py");
    };
  }, []);

  return ref;
}
