import { useEffect, useRef, useState } from "react";

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [stretch, setStretch] = useState(0);
  const [gradient, setGradient] = useState(""); // dynamic glow texture

  const rafRef = useRef<number | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef<number>(0);
  const isHoveringCard = useRef<boolean>(false);

  useEffect(() => {
    // --- refined alpha-male motion parameters ---
    const stiffness = 0.06;   // was 0.16 → now slower + smoother
    const damping = 0.88;     // was 0.80 → now heavier, more glide
    const followDelay = 0.65; // lower = slower catch-up, higher = faster

    const animate = () => {
      const now = Date.now();
      const timeSinceLastMove = now - lastMoveTime.current;

      // Fade out when idle, but not when hovering over cards
      if (timeSinceLastMove > 500 && !isHoveringCard.current) {
        setOpacity((prev) => Math.max(0, prev - 0.03));
      } else if (isHoveringCard.current) {
        // Keep opacity high when hovering over cards
        setOpacity(0.6);
      }

      // Spring‑based motion
      const dx = targetPosition.current.x - currentPosition.current.x;
      const dy = targetPosition.current.y - currentPosition.current.y;
      
      // spring physics with extra delay smoothing
      velocity.current.x = velocity.current.x * damping + dx * stiffness * followDelay;
      velocity.current.y = velocity.current.y * damping + dy * stiffness * followDelay;

      // Distance behind cursor (existing logic)
      const dist = Math.hypot(dx, dy);

      // NEW: calculate movement speed = harshness
      const speed = Math.hypot(velocity.current.x, velocity.current.y);

      // Increase lag by reducing spring stiffness when speed is high
      // This makes the glow stay further behind the cursor
      const dynamicLag = Math.min(speed / 25, 1.2); // adjust 25 → higher = stronger lag needed
      currentPosition.current.x += velocity.current.x;
      currentPosition.current.y += velocity.current.y;

      if (Math.abs(velocity.current.x) > 0.01 || Math.abs(velocity.current.y) > 0.01) {
        setPosition({
          x: currentPosition.current.x,
          y: currentPosition.current.y,
        });
      }

      // Stretch more when movement is harsh
      const stretchAmount = Math.min(dist / 250 + speed / 120, 0.55);
      setStretch(stretchAmount);

      // Drift the glow’s centre using sine/cosine for that roaming nebula look
      const t = now * 0.00015;
      const gx = 50 + Math.sin(t) * 25; // oscillate ±25% horizontally
      const gy = 50 + Math.cos(t * 1.2) * 25; // oscillate ±25% vertically
      setGradient(
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(139,92,246,0.35) 0%, ` +
        `rgba(139,92,246,0.18) 30%, rgba(139,92,246,0.1) 60%, rgba(0,0,0,0) 80%)`
      );

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
      
      // Check if hovering over a timeline card or project card
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      const timelineCard = elementUnderCursor?.closest('[data-timeline-card]');
      const projectCard = elementUnderCursor?.closest('[data-project-card]');
      isHoveringCard.current = !!(timelineCard || projectCard);
      
      setOpacity(0.6);
    };

    const handleMouseLeave = () => {
      isHoveringCard.current = false;
      setOpacity(0);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[60] will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <div
        className="h-[800px] w-[800px] rounded-full blur-[160px] animate-pulse"
        style={{
          backgroundImage: gradient,
          transform: `scale(${1 + stretch * 0.5})`,
          transformOrigin: "center",
        }}
      />
    </div>
  );
};
