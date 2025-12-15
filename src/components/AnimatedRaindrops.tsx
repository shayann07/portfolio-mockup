import { useMobile } from "@/hooks";
import { useEffect, useMemo, useRef } from "react";

export const AnimatedRaindrops = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  // Animation constants
  const IDLE_SPEED = 1;
  const MIN_SPEED = IDLE_SPEED;
  const MAX_SPEED = 5;
  const STORM_FACTOR = 70;
  const WIND_SENSITIVITY = 0.20;
  const BASE_DURATION = 7.76;

  // Mutable state (no re-renders)
  const state = useRef({
    animationSpeed: IDLE_SPEED,
    windStrength: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    lastMoveTime: Date.now(),
    targetSpeed: IDLE_SPEED,
    targetWind: 0,
    isMoving: false,
    decayTimeout: null as number | null,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateStyles = () => {
      const { animationSpeed, windStrength } = state.current;

      const duration = BASE_DURATION / animationSpeed;
      const swayDuration = Math.max(6 - animationSpeed * 0.7, 3.2);

      container.style.setProperty("--raindrop-duration", `${duration}s`);
      container.style.setProperty("--raindrop-sway-duration", `${swayDuration}s`);
      container.style.setProperty("--wind-strength", windStrength.toFixed(3));
    };

    // Initial style set
    updateStyles();

    let animationFrameId: number;

    const gameLoop = () => {
      const s = state.current;

      // Interpolate current values towards targets
      // Speed interpolation
      if (Math.abs(s.targetSpeed - s.animationSpeed) > 0.01) {
        s.animationSpeed += (s.targetSpeed - s.animationSpeed) * 0.1;
      }

      // Wind interpolation
      if (Math.abs(s.targetWind - s.windStrength) > 0.001) {
        s.windStrength += (s.targetWind - s.windStrength) * 0.1;
      }

      updateStyles();
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Start loop
    gameLoop();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const s = state.current;
      const dt = now - s.lastMoveTime;

      if (dt > 0) {
        const dx = e.clientX - s.lastMouseX;
        const dy = e.clientY - s.lastMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const normalizedDt = Math.max(dt, 1);
        const speed = dist / normalizedDt;

        // Calculate targets
        let targetSpeed = IDLE_SPEED + speed * STORM_FACTOR;
        targetSpeed = Math.min(Math.max(targetSpeed, MIN_SPEED), MAX_SPEED);
        s.targetSpeed = targetSpeed;

        const rawWind = dx / normalizedDt;
        let targetWind = rawWind * WIND_SENSITIVITY;
        targetWind = Math.max(Math.min(targetWind, 1.5), -1.5);
        s.targetWind = targetWind;

        s.isMoving = true;
      }

      s.lastMouseX = e.clientX;
      s.lastMouseY = e.clientY;
      s.lastMoveTime = now;

      // Handle decay when stopped
      if (s.decayTimeout) {
        window.clearTimeout(s.decayTimeout);
      }

      s.decayTimeout = window.setTimeout(() => {
        s.targetSpeed = IDLE_SPEED;
        s.targetWind = 0;
        s.isMoving = false;
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (state.current.decayTimeout) {
        window.clearTimeout(state.current.decayTimeout);
      }
    };
  }, []); // Run once on mount

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

