import { ArrowUp } from "lucide-react";
import React from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const FooterContent = () => {
  const techTags = ["React", "TypeScript", "Tailwind CSS", "Motion"];

  // Chip animation state
  const [animatedChips, setAnimatedChips] = React.useState<Set<number>>(new Set());
  const chipTimeoutRefs = React.useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      chipTimeoutRefs.current.forEach((timeout) => {
        clearTimeout(timeout);
      });
      chipTimeoutRefs.current.clear();
    };
  }, []);

  const chipGlow = "0px 0px 12px 0px rgba(139, 92, 246, 0.4)"; // Purple glow matching footer theme

  return (
    <div className="relative box-border caret-transparent max-w-screen-xl mx-auto outline-[oklab(0.708_0_0_/_0.5)]">
      {/* Row 1: Copyright left, Back to Top button right */}
      <div className="flex items-center justify-between gap-4">
        {/* Copyright - Left */}
        <p className="text-sm text-[oklab(0.708_0_0_/_0.6)] box-border caret-transparent">
          © 2025 ·{" "}
          <span className="text-[oklch(0.902_0.063_306.703)]">
            Muhammad Shayan
          </span>{" "}
          · shayxo.dev
        </p>

        {/* Back to Top Button - Using Download CV outline style */}
        <button
          onClick={scrollToTop}
          className="text-white font-bold items-center backdrop-blur-xl bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] caret-transparent gap-x-2 inline-flex justify-center outline-[oklab(0.714_0.117894_-0.165257_/_0.3)] outline outline-[0px] text-center border-[oklab(0.714_0.117894_-0.165257_/_0.3)] px-6 py-3 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border border-solid hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)] hover:border-[oklab(0.714_0.117894_-0.165257_/_0.5)]"
        >
          BACK TO TOP
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[oklab(0.714_0.117894_-0.165257_/_0.2)] to-transparent my-6" />

      {/* Row 2: Tech tags centered */}
      <div className="flex items-center justify-center gap-3 flex-wrap pb-2">
        {techTags.map((tech, index) => (
          <span
            key={tech}
            style={{
              boxShadow: animatedChips.has(index) ? chipGlow : 'none',
              transform: animatedChips.has(index) ? 'scale(1.06) translateY(-2px)' : 'scale(1) translateY(0)',
              filter: animatedChips.has(index) ? 'brightness(1.12)' : 'brightness(1)',
              opacity: animatedChips.has(index) ? 1 : 0.95,
              transition: 'box-shadow 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="px-3 py-1 rounded-full border border-[oklab(0.714_0.117894_-0.165257_/_0.25)] bg-transparent text-[oklab(0.708_0_0_/_0.6)] text-[10px] tracking-wide cursor-default"
            onMouseEnter={() => {
              // Clear any existing timeout (including leave timeout)
              const existingTimeout = chipTimeoutRefs.current.get(index);
              if (existingTimeout) {
                clearTimeout(existingTimeout);
                chipTimeoutRefs.current.delete(index);
              }

              // Set timeout for 400ms delay before animation starts
              const timeout = setTimeout(() => {
                setAnimatedChips((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(index);
                  return newSet;
                });
                chipTimeoutRefs.current.delete(index);
              }, 400);

              chipTimeoutRefs.current.set(index, timeout);
            }}
            onMouseLeave={() => {
              // Clear any existing timeout (including enter timeout)
              const existingTimeout = chipTimeoutRefs.current.get(index);
              if (existingTimeout) {
                clearTimeout(existingTimeout);
                chipTimeoutRefs.current.delete(index);
              }

              // Set timeout for 400ms delay before animation ends
              const timeout = setTimeout(() => {
                setAnimatedChips((prev) => {
                  const newSet = new Set(prev);
                  newSet.delete(index);
                  return newSet;
                });
                chipTimeoutRefs.current.delete(index);
              }, 400);

              chipTimeoutRefs.current.set(index, timeout);
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
