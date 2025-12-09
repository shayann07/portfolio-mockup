import { useEffect, useRef, useState } from "react";

export const AnimatedRaindrops = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Base drop duration (seconds).
  const baseDuration = 5;
  const duration = baseDuration / animationSpeed;

  // Slightly decouple sway duration so faster rain also feels more chaotic
  const swayDuration = Math.max(6 - animationSpeed * 0.7, 3.2);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 box-border overflow-hidden caret-transparent pointer-events-none opacity-[0.35]"
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
            top: 64px;
            opacity: 0;
          }
          10% {
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
          top: 64px;
          animation:
            raindrop-fall var(--raindrop-duration, 8s) linear infinite,
            raindrop-sway var(--raindrop-sway-duration, 6s) ease-in-out infinite;
          will-change: top, transform, opacity;

          /* cinematic "shader" feel */
          filter: blur(0.35px);
          box-shadow:
            0 0 6px rgba(56, 189, 248, 0.48),
            0 0 16px rgba(37, 99, 235, 0.35);
          mix-blend-mode: screen;
        }
      `}</style>

      {/* All original drops kept as-is so layout stays identical */}
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[70.3989px] opacity-[0.381002] w-px left-[75.7402%] md:opacity-[0.264347] raindrop"></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[65.9211px] opacity-[0.544318] w-px left-[97.5348%] md:opacity-[0.0700206] raindrop" style={{ animationDelay: "0.2s" }}></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[126.977px] opacity-[0.210014] w-px left-[63.272%] md:opacity-[0.543296] raindrop" style={{ animationDelay: "0.4s" }}></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[72.2779px] opacity-[0.30992] w-px left-[86.1823%] md:opacity-[0.268495] raindrop" style={{ animationDelay: "0.6s" }}></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[106.442px] opacity-[0.463085] w-px left-[77.4306%] md:opacity-[0.0150873] raindrop" style={{ animationDelay: "0.8s" }}></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[123.753px] opacity-[0.351131] w-px left-[20.3425%] md:opacity-[0.37736] raindrop" style={{ animationDelay: "1s" }}></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[147.584px] opacity-[0.388888] w-px left-[22.0169%] md:opacity-[0.392846] raindrop" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] h-[50.4072px] opacity-[0.510634] w-px left-[78.6591%] md:opacity-[0.189187] raindrop" style={{ animationDelay: "1.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[64.2111px] opacity-[0.387677] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[35.3392%] md:opacity-[0.594783] raindrop" style={{ animationDelay: "1.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[123.215px] opacity-[0.424034] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[99.1798%] md:opacity-[0.542715] raindrop" style={{ animationDelay: "1.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[89.2356px] opacity-[0.332222] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[12.4572%] md:opacity-[0.115783] raindrop" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[110.236px] opacity-[0.583836] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[74.6917%] md:opacity-[0.522195] raindrop" style={{ animationDelay: "2.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[94.2761px] opacity-[0.179769] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[38.3092%] md:opacity-[0.134754] raindrop" style={{ animationDelay: "2.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[90.5667px] opacity-[0.492642] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[87.8439%] md:opacity-[0.22661] raindrop" style={{ animationDelay: "2.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[74.9886px] opacity-[0.457657] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[89.8333%] md:opacity-[0.0615218] raindrop" style={{ animationDelay: "2.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[144.018px] opacity-[0.163849] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[36.4454%] md:opacity-[0.336951] raindrop" style={{ animationDelay: "3s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[140.96px] opacity-[0.177154] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[94.0444%] md:opacity-[0.156414] raindrop" style={{ animationDelay: "3.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[68.9304px] opacity-[0.014051] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[38.9583%] md:opacity-[0.181767] raindrop" style={{ animationDelay: "3.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[87.4435px] opacity-[0.478052] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[95.0651%] md:opacity-[0.103317] raindrop" style={{ animationDelay: "3.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[78.1651px] opacity-[0.277847] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[6.0643%] md:opacity-[0.0408812] raindrop" style={{ animationDelay: "3.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[87.8302px] opacity-[0.19799] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[10.8377%] md:opacity-[0.48261] raindrop" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[55.6266px] opacity-[0.246166] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[59.2997%] md:opacity-[0.550039] raindrop" style={{ animationDelay: "4.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[142.646px] opacity-[0.0447663] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[30.3808%] md:opacity-[0.388159] raindrop" style={{ animationDelay: "4.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[99.5592px] opacity-[0.175663] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[51.2282%] md:opacity-[0.354511] raindrop" style={{ animationDelay: "4.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[62.3185px] opacity-[0.451298] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[35.9621%] md:opacity-[0.309425] raindrop" style={{ animationDelay: "4.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[73.8442px] opacity-[0.312735] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[14.1362%] md:opacity-[0.124265] raindrop" style={{ animationDelay: "5s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[60.5634px] opacity-[0.167405] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[78.3458%] md:opacity-[0.273148] raindrop" style={{ animationDelay: "5.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[106.952px] opacity-[0.467396] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[34.0487%] md:opacity-[0.252651] raindrop" style={{ animationDelay: "5.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[144.966px] opacity-[0.482266] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[98.4939%] md:opacity-[0.195907] raindrop" style={{ animationDelay: "5.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[92.2809px] opacity-[0.221133] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[24.639%] md:opacity-[0.160774] raindrop" style={{ animationDelay: "5.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[114.48px] opacity-[0.182143] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[80.1584%] md:opacity-[0.131565] raindrop" style={{ animationDelay: "6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[143.566px] opacity-[0.37139] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[72.7658%] md:opacity-[0.378711] raindrop" style={{ animationDelay: "6.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[144.028px] opacity-[0.43981] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[24.26%] md:opacity-[0.423891] raindrop" style={{ animationDelay: "6.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[125.379px] opacity-[0.247142] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[12.5646%] md:opacity-[0.080212] raindrop" style={{ animationDelay: "6.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[146.205px] opacity-[0.0893741] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[80.5574%] md:opacity-[0.238489] raindrop" style={{ animationDelay: "6.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[102.834px] opacity-[0.314142] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[41.3973%] md:opacity-[0.505881] raindrop" style={{ animationDelay: "7s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[100.619px] opacity-[0.330996] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[31.3932%] md:opacity-[0.411071] raindrop" style={{ animationDelay: "7.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[72.0019px] opacity-[0.278651] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[6.19832%] md:opacity-[0.268316] raindrop" style={{ animationDelay: "7.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[108.435px] opacity-[0.069039] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[42.233%] md:opacity-[0.433569] raindrop" style={{ animationDelay: "7.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[64.1237px] opacity-[0.522119] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[47.0666%] md:opacity-[0.477579] raindrop" style={{ animationDelay: "7.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[128.736px] opacity-[0.244574] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[22.6325%] md:opacity-[0.0441959] raindrop" style={{ animationDelay: "8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[52.7362px] opacity-[0.401985] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[67.1283%] md:opacity-[0.106777] raindrop" style={{ animationDelay: "8.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[87.3645px] opacity-[0.132686] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[90.4621%] md:opacity-[0.114634] raindrop" style={{ animationDelay: "8.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[121.622px] opacity-[0.0291994] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[67.5627%] md:opacity-[0.476686] raindrop" style={{ animationDelay: "8.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[91.634px] opacity-[0.340812] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[27.7079%] md:opacity-[0.271222] raindrop" style={{ animationDelay: "8.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[62.3086px] opacity-[0.226011] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[2.92351%] md:opacity-[0.211547] raindrop" style={{ animationDelay: "9s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[72.7847px] opacity-[0.117225] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[90.0363%] md:opacity-[0.515358] raindrop" style={{ animationDelay: "9.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[133.24px] opacity-[0.366181] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[81.857%] md:opacity-[0.417215] raindrop" style={{ animationDelay: "9.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[74.5601px] opacity-[0.0588602] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[3.52495%] md:opacity-[0.205393] raindrop" style={{ animationDelay: "9.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[59.0999px] opacity-[0.437095] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[84.9116%] md:opacity-[0.414024] raindrop" style={{ animationDelay: "9.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[116.881px] opacity-[0.57728] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[21.2025%] md:opacity-[0.107724] raindrop" style={{ animationDelay: "10s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[68.955px] opacity-[0.580859] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[91.8504%] md:opacity-[0.282257] raindrop" style={{ animationDelay: "10.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[88.8263px] opacity-[0.165536] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[52.4208%] md:opacity-[0.17598] raindrop" style={{ animationDelay: "10.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[146.637px] opacity-[0.244344] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[65.9531%] md:opacity-[0.0931532] raindrop" style={{ animationDelay: "10.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[107.507px] opacity-[0.196647] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[25.4015%] md:opacity-[0.109148] raindrop" style={{ animationDelay: "10.8s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[84.5785px] opacity-[0.169428] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[69.891%] md:opacity-[0.064531] raindrop" style={{ animationDelay: "11s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[73.2573px] opacity-[0.329808] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[27.9969%] md:opacity-[0.0160164] raindrop" style={{ animationDelay: "11.2s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[64.7852px] opacity-[0.47902] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[19.0491%] md:opacity-[0.436206] raindrop" style={{ animationDelay: "11.4s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[81.1892px] opacity-[0.516793] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[1.76037%] md:opacity-[0.527102] raindrop" style={{ animationDelay: "11.6s" }}></div>
      <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.4)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.2)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[105.506px] opacity-[0.140824] outline-[oklab(0.708_0_0_/_0.5)] w-px left-[2.61147%] md:opacity-[0.261944] raindrop" style={{ animationDelay: "11.8s" }}></div>
    </div>
  );
};
