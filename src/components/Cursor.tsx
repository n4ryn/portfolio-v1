import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useCursor } from "../context/cursor.context";

export default function Cursor() {
  const { isActive, cursorSize } = useCursor();

  const mouse = useRef({ x: 10, y: 10 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const circle = useRef<HTMLDivElement>(null);

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current !== null) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="relative z-[9999] pointer-events-none">
      <div
        ref={circle}
        style={{
          width: cursorSize,
          height: cursorSize,
          backgroundColor: "rgb(20, 235, 163, 0.3)",
          border: "1px solid #14eba3",
          filter: `blur(${isActive ? 20 : 0}px)`,
          transition: `width 0.2s ease, height 0.2s ease, filter 0.2s ease`,
        }}
        className="fixed top-0 left-0 rounded-full mix-blend-difference"
      />
    </div>
  );
}
