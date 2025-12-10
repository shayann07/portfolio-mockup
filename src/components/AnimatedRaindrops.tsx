import { useMobile } from "@/hooks";
import { useEffect, useMemo, useRef, useState } from "react";

export const AnimatedRaindrops = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  // animationSpeed is a multiplier: 1x, 2x, etc.
  const IDLE_SPEED = 1; // ~3% faster than previous base
  const MIN_SPEED = IDLE_SPEED;
  const MAX_SPEED = 5;

  const [animationSpeed, setAnimationSpeed] = useState(IDLE_SPEED);
  const [windStrength, setWindStrength] = useState(0); // -1.5 .. 1.5

  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());
  const speedDecayTimeout = useRef<number | null>(null);
  const windDecayTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastMoveTime.current;

      if (dt > 0) {
        const dx = e.clientX - lastMousePosition.current.x;
        const dy = e.clientY - lastMousePosition.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const normalizedDt = Math.max(dt, 1);
        const speed = dist / normalizedDt; // px per ms

        // ----- Vertical storm intensity (rain speed) -----
        const STORM_FACTOR = 70; // sensitivity
        let targetSpeed = IDLE_SPEED + speed * STORM_FACTOR;
        targetSpeed = Math.min(Math.max(targetSpeed, MIN_SPEED), MAX_SPEED);

        setAnimationSpeed((prev) => prev + (targetSpeed - prev) * 0.25);

        // ----- Horizontal wind / sway (directional) -----
        // Positive dx = mouse moving right -> wind to the right
        const rawWind = dx / normalizedDt; // px per ms (signed)
        const WIND_SENSITIVITY = 0.20;
        let targetWind = rawWind * WIND_SENSITIVITY;
        // Clamp to a reasonable range so it doesn't go insane
        targetWind = Math.max(Math.min(targetWind, 1.5), -1.5);

        setWindStrength((prev) => prev + (targetWind - prev) * 0.25);
      }

      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = now;

      // When mouse stops, glide back to idle rain speed
      if (speedDecayTimeout.current) {
        clearTimeout(speedDecayTimeout.current);
      }
      speedDecayTimeout.current = window.setTimeout(() => {
        setAnimationSpeed((prev) => prev + (IDLE_SPEED - prev) * 0.3);
      }, 220);

      // When mouse stops, let wind slowly settle back to 0
      if (windDecayTimeout.current) {
        clearTimeout(windDecayTimeout.current);
      }
      windDecayTimeout.current = window.setTimeout(() => {
        setWindStrength((prev) => prev * 0.7);
      }, 260);
    };

    // IMPORTANT: listen on window, not the container (because container has pointer-events-none)
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (speedDecayTimeout.current) clearTimeout(speedDecayTimeout.current);
      if (windDecayTimeout.current) clearTimeout(windDecayTimeout.current);
    };
  }, []);

  // Base drop duration (seconds) - slower rain
  const baseDuration = 7.76;
  const duration = baseDuration / animationSpeed;

  // Slightly decouple sway duration so faster rain also feels more chaotic
  const swayDuration = Math.max(6 - animationSpeed * 0.7, 3.2);

  // Generate drops deterministically
  const drops = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      height: 60 + Math.random() * 90, // 60px - 150px
      left: Math.random() * 100, // 0% - 100%
      opacity: 0.1 + Math.random() * 0.45, // 0.1 - 0.55
      delay: -Math.random() * 10, // 0s - 10s negative delay
      isThin: Math.random() > 0.7, // 30% are 1px thin
    }));
  }, []);

  // Filter drops for mobile
  const visibleDrops = isMobile ? drops.slice(0, 15) : drops;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 box-border overflow-hidden caret-transparent pointer-events-none opacity-[0.55]"
      style={{
        // cinematic shader-ish vars
        ["--raindrop-duration" as any]: `${duration}s`,
        ["--raindrop-sway-duration" as any]: `${swayDuration}s`,
        ["--wind-strength" as any]: windStrength.toFixed(3),
      }}
    >
      <style>{`
        @keyframes raindrop-fall {
          0% {
            top: 80px;
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          97% {
            opacity: 1;
          }
          100% {
            top: calc(100vh + 120px);
            opacity: 0;
          }
        }

        @keyframes raindrop-sway {
          0% {
            transform: translateX(calc(var(--wind-strength, 0) * -10px));
          }
          50% {
            transform: translateX(calc(var(--wind-strength, 0) * 22px));
          }
          100% {
            transform: translateX(calc(var(--wind-strength, 0) * -10px));
          }
        }

        .raindrop {
          top: 80px;
          animation:
            raindrop-fall var(--raindrop-duration, 8s) linear infinite,
            raindrop-sway var(--raindrop-sway-duration, 6s) ease-in-out infinite;
          will-change: top, transform, opacity;

          /* subtle rain drops - minimal glow like reference */
          filter: none;
          box-shadow: none;
          mix-blend-mode: screen;
        }
      `}</style>

      {visibleDrops.map((drop) => (
        <div
          key={drop.id}
          className={`absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] raindrop ${drop.isThin ? "w-px" : "width-[0.5px]"
            }`}
          style={{
            height: `${drop.height}px`,
            left: `${drop.left}%`,
            opacity: drop.opacity,
            animationDelay: `${drop.delay}s`,
            width: drop.isThin ? "1px" : "0.5px", // inline style fallback
          }}
        />
      ))}
    </div>
  );
};
