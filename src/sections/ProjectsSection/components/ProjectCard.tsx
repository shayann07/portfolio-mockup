import { CardParticles } from "@/components/CardParticles";
import { motion, Variants } from "framer-motion";
import React from "react";

export type ProjectVariant = "cyan" | "green" | "blue" | "red";

type ProjectCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  metrics: Array<{ label: string; value: string }>;
  variant: ProjectVariant;
};

const variantConfig: Record<
  ProjectVariant,
  {
    card: string;
    cardBorder: string;
    cardBorderHover: string;
    cardGradient: string;
    sideBarGradient: string;
    emojiGradient: string;
    titleGradient: string;
    tag: string;
    tagBg: string;
    tagBorder: string;
    tagText: string;
    metricText: string;
    iconColor: string;
    glowShadow?: string;
    glowShadowHover?: string;
    sidebarGlow?: string;
    iconGlow?: string;
    chipGlow?: string;
  }
> = {
  cyan: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.714_0.117894_-0.165257_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.714_0.117894_-0.165257_/_0.3)]",
    cardGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_50%,oklab(0.627_0.147802_-0.219953_/_0.1)_100%)]",
    emojiGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklab(0.627_0.147802_-0.219953_/_0.1)_100%)]",
    tag: "text-[oklch(0.902_0.063_306.703)] bg-[oklab(0.627_0.147802_-0.219953_/_0.1)] border-[oklab(0.714_0.117894_-0.165257_/_0.2)]",
    tagBg: "bg-[oklab(0.627_0.147802_-0.219953_/_0.1)]",
    tagBorder: "border-[oklab(0.714_0.117894_-0.165257_/_0.2)]",
    tagText: "text-[oklch(0.902_0.063_306.703)]",
    metricText: "text-[oklch(0.902_0.063_306.703)]",
    iconColor: "text-[oklch(0.951_0.063_306.703_/_0.9)]",
    glowShadow: "0px 0px 60px 0px rgba(150, 180, 250, 0.26)",
    glowShadowHover: "0px 0px 80px 0px rgba(150, 180, 250, 0.36)",
    iconGlow: "0px 0px 20px 0px rgba(150, 180, 250, 0.5), 0px 0px 40px 0px rgba(150, 180, 250, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(150, 180, 250, 0.4)",
  },
  green: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.765_-0.169466_0.0510906_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.765_-0.169466_0.0510906_/_0.3)]",
    cardGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_100%)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_50%,oklab(0.696_-0.162114_0.0511765_/_0.1)_100%)]",
    emojiGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.905_0.093_164.15)_0%,oklab(0.696_-0.162114_0.0511765_/_0.1)_100%)]",
    tag: "text-[oklch(0.905_0.093_164.15)] bg-[oklab(0.696_-0.162114_0.0511765_/_0.1)] border-[oklab(0.765_-0.169466_0.0510906_/_0.2)]",
    tagBg: "bg-[oklab(0.696_-0.162114_0.0511765_/_0.1)]",
    tagBorder: "border-[oklab(0.765_-0.169466_0.0510906_/_0.2)]",
    tagText: "text-[oklch(0.905_0.093_164.15)]",
    metricText: "text-[oklch(0.905_0.093_164.15)]",
    iconColor: "text-[oklch(0.953_0.093_164.15_/_0.9)]",
    glowShadow: "0px 0px 60px 0px rgba(100, 220, 150, 0.26)",
    glowShadowHover: "0px 0px 80px 0px rgba(100, 220, 150, 0.36)",
    iconGlow: "0px 0px 20px 0px rgba(100, 220, 150, 0.45), 0px 0px 40px 0px rgba(100, 220, 150, 0.3)",
    chipGlow: "0px 0px 12px 0px rgba(100, 220, 150, 0.4)",
  },
  blue: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.789_-0.131264_-0.0805336_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.789_-0.131264_-0.0805336_/_0.3)]",
    cardGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_100%)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_50%,oklab(0.715_-0.116822_-0.0824726_/_0.1)_100%)]",
    emojiGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.917_0.08_205.041)_0%,oklab(0.715_-0.116822_-0.0824726_/_0.1)_100%)]",
    tag: "text-[oklch(0.917_0.08_205.041)] bg-[oklab(0.715_-0.116822_-0.0824726_/_0.1)] border-[oklab(0.789_-0.131264_-0.0805336_/_0.2)]",
    tagBg: "bg-[oklab(0.715_-0.116822_-0.0824726_/_0.1)]",
    tagBorder: "border-[oklab(0.789_-0.131264_-0.0805336_/_0.2)]",
    tagText: "text-[oklch(0.917_0.08_205.041)]",
    metricText: "text-[oklch(0.917_0.08_205.041)]",
    iconColor: "text-[oklch(0.959_0.08_205.041_/_0.9)]",
    glowShadow: "0px 0px 60px 0px rgba(100, 150, 250, 0.26)",
    glowShadowHover: "0px 0px 80px 0px rgba(100, 150, 250, 0.36)",
    iconGlow: "0px 0px 20px 0px rgba(100, 150, 250, 0.5), 0px 0px 40px 0px rgba(100, 150, 250, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(100, 150, 250, 0.4)",
  },
  red: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.714_0.117894_0.0852257_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.714_0.117894_0.0852257_/_0.3)]",
    cardGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_100%)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_50%,oklab(0.627_0.147802_0.0919953_/_0.1)_100%)]",
    emojiGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.902_0.063_15.703)_0%,oklab(0.627_0.147802_0.0919953_/_0.1)_100%)]",
    tag: "text-[oklch(0.902_0.063_15.703)] bg-[oklab(0.627_0.147802_0.0919953_/_0.1)] border-[oklab(0.714_0.117894_0.0852257_/_0.2)]",
    tagBg: "bg-[oklab(0.627_0.147802_0.0919953_/_0.1)]",
    tagBorder: "border-[oklab(0.714_0.117894_0.0852257_/_0.2)]",
    tagText: "text-[oklch(0.902_0.063_15.703)]",
    metricText: "text-[oklch(0.902_0.063_15.703)]",
    iconColor: "text-[oklch(0.951_0.063_15.703_/_0.9)]",
    glowShadow: "0px 0px 60px 0px rgba(248, 79, 107, 0.26)",
    glowShadowHover: "0px 0px 80px 0px rgba(248, 79, 107, 0.36)",
    sidebarGlow: "0px 0px 20px 0px rgba(248, 79, 107, 0.45)",
    iconGlow: "0px 0px 20px 0px rgba(255, 230, 220, 0.35), 0px 0px 40px 0px rgba(255, 230, 220, 0.25)",
    chipGlow: "0px 0px 12px 0px rgba(248, 79, 107, 0.4)",
  },
};

const cardInternalVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const contentVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const ProjectCard = (props: ProjectCardProps) => {
  const config = variantConfig[props.variant];

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

  const defaultGlow = config.glowShadow
    ? config.glowShadow.replace("0.2)", "0.26)").replace("60px", "60px") // Ensure config glows match intensity if set
    : "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(139,92,246,0.26)";

  const defaultGlowHover = config.glowShadowHover
    ? config.glowShadowHover.replace("0.25)", "0.36)").replace("70px", "80px") // Ensure config glows match intensity if set
    : "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 80px 0px rgba(139,92,246,0.36)";

  const defaultSidebarGlow = config.sidebarGlow
    ? config.sidebarGlow.replace(/_/g, ' ')
    : "0px 0px 20px 0px rgba(139,92,246,0.8)";

  const defaultIconGlow = config.iconGlow
    ? config.iconGlow.replace(/_/g, ' ').replace(/,/g, ', ')
    : "0px 0px 20px 0px rgba(139,92,246,0.4), 0px 0px 40px 0px rgba(139,92,246,0.3)";

  const defaultChipGlow = config.chipGlow || "0px 0px 12px 0px rgba(139, 92, 246, 0.4)";

  return (
    <motion.div
      variants={cardInternalVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: defaultGlowHover,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      data-project-card
      style={{
        boxShadow: defaultGlow,
      }}
      className={`relative transform-gpu backdrop-blur-2xl box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border overflow-hidden p-8 rounded-3xl border-solid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center will-change-[transform,box-shadow] hover:z-50 hover:brightness-[1.1] cursor-pointer ${config.card} ${config.cardBorder} ${config.cardBorderHover}`}
    >
      <CardParticles />
      <div
        style={{
          boxShadow: defaultSidebarGlow,
        }}
        className={`absolute box-border caret-transparent opacity-50 outline-[oklab(0.708_0_0_/_0.5)] w-[3px] inset-y-0 right-0 ${config.sideBarGradient}`}
      ></div>
      <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <motion.div variants={contentVariant} className="items-start box-border caret-transparent gap-x-4 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 mb-6 group/icon">
          <div
            style={{
              boxShadow: '0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
            }}
            className={`items-center box-border caret-transparent flex shrink-0 h-14 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-14 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center group-hover/icon:scale-110 ${config.emojiGradient}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = defaultIconGlow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)';
            }}
          >
            <div
              className={`${config.iconColor} box-border caret-transparent h-7 outline-[oklab(0.708_0_0_/_0.5)] w-7 group-hover/icon:rotate-[360deg] group-hover/icon:scale-110`}
              style={{
                transition: 'rotate 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), scale 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {props.icon}
            </div>
          </div>
          <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)]">
            <h3
              className={`text-transparent text-2xl font-black bg-clip-text box-border tracking-[-0.6px] leading-8 outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-2 ${config.titleGradient}`}
            >
              {props.title}
            </h3>
            <p className="text-[oklab(0.946_0.0199398_-0.0262945_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
              {props.description}
            </p>
          </div>
        </motion.div>
        <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-6">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                boxShadow: animatedChips.has(index) ? defaultChipGlow : 'none',
                transform: animatedChips.has(index) ? 'scale(1.06) translateY(-2px)' : 'scale(1) translateY(0)',
                filter: animatedChips.has(index) ? 'brightness(1.12)' : 'brightness(1)',
                opacity: animatedChips.has(index) ? 1 : 0.95,
                transition: 'box-shadow 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className={`text-xs box-border caret-transparent block leading-[15px] outline-[oklab(0.708_0_0_/_0.5)] border px-3 py-1 rounded-[10px] border-solid ${config.tag}`}
              onMouseEnter={() => {
                const existingTimeout = chipTimeoutRefs.current.get(index);
                if (existingTimeout) {
                  clearTimeout(existingTimeout);
                  chipTimeoutRefs.current.delete(index);
                }
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
                const existingTimeout = chipTimeoutRefs.current.get(index);
                if (existingTimeout) {
                  clearTimeout(existingTimeout);
                  chipTimeoutRefs.current.delete(index);
                }
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
              {tag}
            </span>
          ))}
        </div>
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-3 outline-[oklab(0.708_0_0_/_0.5)] gap-y-6">
          {props.metrics.map((metric, index) => (
            <motion.div variants={contentVariant} key={index} className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="text-[oklab(0.902_0.037653_-0.0505099_/_0.5)] text-xs box-border caret-transparent leading-4 outline-[oklab(0.708_0_0_/_0.5)] mb-1">
                {metric.label}
              </div>
              <div
                className={`text-2xl font-bold box-border caret-transparent tracking-[-0.6px] leading-8 outline-[oklab(0.708_0_0_/_0.5)] ${config.metricText}`}
              >
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
