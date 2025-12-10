import { SectionHeader } from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks";
import { MetricCard } from "@/sections/CommandCenterSection/components/MetricCard";
import { slideUp, staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";

// Icon components - sized to match design
const BoxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export const CommandCenterSection = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  const metrics = [
    {
      icon: <BoxIcon />,
      value: "3+",
      label: "PRODUCTION APPS SHIPPED",
      subtitle: "Live on stores",
      barColor: "linear-gradient(to top, oklch(0.558 0.288 302.321), oklch(0.714 0.203 305.504))",
      iconBg: "bg-[linear-gradient(to_right_bottom,oklch(0.627_0.265_303.9)_0%,oklch(0.558_0.288_302.321)_100%)]",
      valueColor: "text-[#A78BFA]", // Purple to match card
      barHeights: [15, 25, 40, 55, 70, 85, 95],
      cardBg: "bg-[linear-gradient(135deg,rgba(139,92,246,0.12)_0%,rgba(88,28,135,0.06)_100%)]",
      cardBorder: "border-[rgba(139,92,246,0.25)]",
      shadowColor: "139, 92, 246",
    },
    {
      icon: <ChartIcon />,
      value: "10k+",
      label: "TOTAL INSTALLS",
      subtitle: "Across all apps",
      barColor: "linear-gradient(to top, oklch(0.609 0.25 292.717), oklch(0.715 0.116 205.041))",
      iconBg: "bg-[linear-gradient(to_right_bottom,oklch(0.715_0.116_205.041)_0%,oklch(0.609_0.25_292.717)_100%)]",
      valueColor: "text-[#14B8A6]", // Teal to match card
      barHeights: [10, 20, 35, 50, 65, 85, 100],
      cardBg: "bg-[linear-gradient(135deg,rgba(20,184,166,0.12)_0%,rgba(13,148,136,0.06)_100%)]",
      cardBorder: "border-[rgba(20,184,166,0.25)]",
      shadowColor: "20, 184, 166",
    },
    {
      icon: <LightningIcon />,
      value: "40-60%",
      label: "PERFORMANCE GAINS",
      subtitle: "Optimization results",
      barColor: "linear-gradient(to top, oklch(0.696 0.162 164.15), oklch(0.905 0.093 164.15))",
      iconBg: "bg-[linear-gradient(to_right_bottom,oklch(0.905_0.093_164.15)_0%,oklch(0.696_0.162_164.15)_100%)]",
      valueColor: "text-[#22C55E]", // Green to match card
      barHeights: [8, 12, 20, 35, 55, 80, 100],
      cardBg: "bg-[linear-gradient(135deg,rgba(34,197,94,0.12)_0%,rgba(22,163,74,0.06)_100%)]",
      cardBorder: "border-[rgba(34,197,94,0.25)]",
      shadowColor: "34, 197, 94",
    },
    {
      icon: <ShieldIcon />,
      value: "99%+",
      label: "CRASH-FREE RELEASES",
      subtitle: "Production stability",
      barColor: "linear-gradient(to top, oklch(0.558 0.288 302.321), oklch(0.714 0.203 305.504))",
      iconBg: "bg-[linear-gradient(to_right_bottom,oklch(0.627_0.265_303.9)_0%,oklch(0.558_0.288_302.321)_100%)]",
      valueColor: "text-[#A78BFA]", // Purple to match card
      barHeights: [85, 88, 90, 92, 95, 97, 100],
      cardBg: "bg-[linear-gradient(135deg,rgba(139,92,246,0.12)_0%,rgba(88,28,135,0.06)_100%)]",
      cardBorder: "border-[rgba(139,92,246,0.25)]",
      shadowColor: "139, 92, 246",
    },
  ];

  return (
    <section id="command-center" className="relative bg-zinc-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute bg-[linear-gradient(oklab(0.381_0.100917_-0.144194_/_0.1)_0%,rgba(0,0,0,0)_50%,oklab(0.381_0.100917_-0.144194_/_0.1)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <div className="absolute bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[100px] h-[600px] opacity-20 outline-[oklab(0.708_0_0_/_0.5)] w-[600px] rounded-[3.35544e+07px] left-2/4 top-2/4"></div>
      <div ref={ref} className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
        >
          <SectionHeader
            title="Command Center"
            subtitle="Real-time performance & reliability metrics"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="group/container relative backdrop-blur-2xl bg-[linear-gradient(to_right_bottom,oklab(0.327_0.0863287_-0.123309_/_0.15)_0%,oklab(0.279_0.0738531_-0.105407_/_0.08)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.714_0.117894_-0.165257_/_0.2)] p-8 rounded-[32px] border-solid md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center will-change-transform"
        >
          <style>{`
            @keyframes scan-beam-vertical {
              0% {
                top: -2px;
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              95% {
                opacity: 1;
              }
              100% {
                top: calc(100% + 2px);
                opacity: 0;
              }
            }
          `}</style>
          {/* Scanning beam animation */}
          <div
            className="absolute left-0 right-0 h-[2px] pointer-events-none z-10"
            style={{
              background: `linear-gradient(to right, 
                transparent 0%, 
                rgba(139, 92, 246, 0.3) 10%, 
                rgba(139, 92, 246, 0.6) 50%, 
                rgba(139, 92, 246, 0.3) 90%, 
                transparent 100%)`,
              boxShadow: `0 0 20px rgba(139, 92, 246, 0.4), 
                          0 0 40px rgba(139, 92, 246, 0.2)`,
              filter: 'blur(1px)',
              animation: 'scan-beam-vertical 4s ease-in-out infinite',
            }}
          ></div>
          <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.714_0.117894_-0.165257_/_0.03)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] rounded-[31px] inset-px"></div>
          <motion.div
            variants={staggerContainer}
            className="group/cards relative box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 mb-6 md:grid-cols-[repeat(4,minmax(0px,1fr))] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center will-change-transform overflow-visible"
          >
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </motion.div>
          <style>{`
            .group\\/container:has(.group\\/card:hover) {
              transform: scale(1.01);
            }
            .group\\/container:has(.group\\/card:hover) .group\\/cards {
              transform: scale(0.9901);
            }
          `}</style>
          {/* Footer status bar - inside main card */}
          <div className="relative items-center box-border caret-transparent gap-x-4 flex justify-between outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 pt-6 border-t border-[oklab(0.714_0.117894_-0.165257_/_0.2)]">
            <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
              <div className="bg-[#4ADE80] box-border caret-transparent h-2.5 outline-[oklab(0.708_0_0_/_0.5)] w-2.5 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
              <span className="text-[oklab(0.902_0.037653_-0.0505099_/_0.8)] text-sm box-border caret-transparent leading-[18px] outline-[oklab(0.708_0_0_/_0.5)] font-medium font-mono">
                All systems operational
              </span>
            </div>
            <span className="text-[oklab(0.902_0.037653_-0.0505099_/_0.5)] text-sm box-border caret-transparent leading-[18px] outline-[oklab(0.708_0_0_/_0.5)] font-mono">
              Last updated: Real-time
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
