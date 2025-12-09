import React from "react";

// Icon components
const GestureRecognitionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8l2-2 2 2M8 16l2 2 2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ModelOptimizerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 5l-2 2M6 19l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 6l-2-2M5 18l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VoiceCommandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 12v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const iconMap: Record<string, React.ComponentType> = {
  "ML Gesture Recognition": GestureRecognitionIcon,
  "ML Model Optimizer": ModelOptimizerIcon,
  "Voice Command Integration": VoiceCommandIcon,
};

export type LabVariant = "cyan" | "green" | "blue" | "teal" | "purple" | "orange";

export type LabCardProps = {
  title: string;
  description: string;
  status: string;
  tech: string[];
  variant: LabVariant;
};

const variantConfig: Record<
  LabVariant,
  {
    card: string;
    cardBorder: string;
    cardBorderHover: string;
    sideBarGradient: string;
    iconGradient: string;
    titleGradient: string;
    tag: string;
    tagText: string;
    iconColor: string;
    statusBg: string;
    statusBorder: string;
    statusText: string;
    glowShadow: string;
    glowShadowHover: string;
    sidebarGlow: string;
    iconGlow: string;
    chipGlow: string;
  }
> = {
  cyan: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.714_0.117894_-0.165257_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.714_0.117894_-0.165257_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_50%,oklab(0.627_0.147802_-0.219953_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklab(0.627_0.147802_-0.219953_/_0.1)_100%)]",
    tag: "text-[oklch(0.902_0.063_306.703)] bg-[oklab(0.627_0.147802_-0.219953_/_0.1)] border-[oklab(0.714_0.117894_-0.165257_/_0.2)]",
    tagText: "text-[oklch(0.902_0.063_306.703)]",
    iconColor: "text-[oklch(0.951_0.063_306.703_/_0.9)]",
    statusBg: "bg-[oklab(0.627_0.147802_-0.219953_/_0.2)]",
    statusBorder: "border-[oklab(0.714_0.117894_-0.165257_/_0.3)]",
    statusText: "text-[oklch(0.902_0.063_306.703)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(150, 180, 250, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(150, 180, 250, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(150, 180, 250, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(150, 180, 250, 0.5), 0px 0px 40px 0px rgba(150, 180, 250, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(150, 180, 250, 0.4)",
  },
  green: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.765_-0.169466_0.0510906_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.765_-0.169466_0.0510906_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_50%,oklab(0.696_-0.162114_0.0511765_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.696_-0.162114_0.0511765_/_0.1)_0%,oklab(0.596_-0.13883_0.041849_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.905_0.093_164.15)_0%,oklab(0.696_-0.162114_0.0511765_/_0.1)_100%)]",
    tag: "text-[oklch(0.905_0.093_164.15)] bg-[oklab(0.696_-0.162114_0.0511765_/_0.1)] border-[oklab(0.765_-0.169466_0.0510906_/_0.2)]",
    tagText: "text-[oklch(0.905_0.093_164.15)]",
    iconColor: "text-[oklch(0.953_0.093_164.15_/_0.9)]",
    statusBg: "bg-[oklab(0.696_-0.162114_0.0511765_/_0.2)]",
    statusBorder: "border-[oklab(0.765_-0.169466_0.0510906_/_0.3)]",
    statusText: "text-[oklch(0.905_0.093_164.15)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(100, 220, 150, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(100, 220, 150, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(100, 220, 150, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(100, 220, 150, 0.45), 0px 0px 40px 0px rgba(100, 220, 150, 0.3)",
    chipGlow: "0px 0px 12px 0px rgba(100, 220, 150, 0.4)",
  },
  blue: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.789_-0.131264_-0.0805336_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.789_-0.131264_-0.0805336_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_50%,oklab(0.715_-0.116822_-0.0824726_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.715_-0.116822_-0.0824726_/_0.1)_0%,oklab(0.609_-0.0940427_-0.0838568_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.917_0.08_205.041)_0%,oklab(0.715_-0.116822_-0.0824726_/_0.1)_100%)]",
    tag: "text-[oklch(0.917_0.08_205.041)] bg-[oklab(0.715_-0.116822_-0.0824726_/_0.1)] border-[oklab(0.789_-0.131264_-0.0805336_/_0.2)]",
    tagText: "text-[oklch(0.917_0.08_205.041)]",
    iconColor: "text-[oklch(0.959_0.08_205.041_/_0.9)]",
    statusBg: "bg-[oklab(0.715_-0.116822_-0.0824726_/_0.2)]",
    statusBorder: "border-[oklab(0.789_-0.131264_-0.0805336_/_0.3)]",
    statusText: "text-[oklch(0.917_0.08_205.041)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(100, 150, 250, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(100, 150, 250, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(100, 150, 250, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(100, 150, 250, 0.5), 0px 0px 40px 0px rgba(100, 150, 250, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(100, 150, 250, 0.4)",
  },
  teal: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.714_0.117894_0.0852257_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.714_0.117894_0.0852257_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_50%,oklab(0.627_0.147802_0.0919953_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_0.0919953_/_0.1)_0%,oklab(0.558_0.153983_0.0819379_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.902_0.063_15.703)_0%,oklab(0.627_0.147802_0.0919953_/_0.1)_100%)]",
    tag: "text-[oklch(0.902_0.063_15.703)] bg-[oklab(0.627_0.147802_0.0919953_/_0.1)] border-[oklab(0.714_0.117894_0.0852257_/_0.2)]",
    tagText: "text-[oklch(0.902_0.063_15.703)]",
    iconColor: "text-[oklch(0.951_0.063_15.703_/_0.9)]",
    statusBg: "bg-[oklab(0.627_0.147802_0.0919953_/_0.2)]",
    statusBorder: "border-[oklab(0.714_0.117894_0.0852257_/_0.3)]",
    statusText: "text-[oklch(0.902_0.063_15.703)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(255, 230, 220, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(255, 230, 220, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(255, 230, 220, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(255, 230, 220, 0.35), 0px 0px 40px 0px rgba(255, 230, 220, 0.25)",
    chipGlow: "0px 0px 12px 0px rgba(255, 230, 220, 0.4)",
  },
  purple: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.65_0.12_-0.15_/_0.1)_0%,oklab(0.58_0.13_-0.18_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.72_0.13_-0.16_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.72_0.13_-0.16_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.65_0.12_-0.15_/_0.1)_0%,oklab(0.58_0.13_-0.18_/_0.05)_50%,oklab(0.65_0.12_-0.15_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.65_0.12_-0.15_/_0.1)_0%,oklab(0.58_0.13_-0.18_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.92_0.08_280)_0%,oklab(0.65_0.12_-0.15_/_0.1)_100%)]",
    tag: "text-[oklch(0.92_0.08_280)] bg-[oklab(0.65_0.12_-0.15_/_0.1)] border-[oklab(0.72_0.13_-0.16_/_0.2)]",
    tagText: "text-[oklch(0.92_0.08_280)]",
    iconColor: "text-[oklch(0.96_0.08_280_/_0.9)]",
    statusBg: "bg-[oklab(0.65_0.12_-0.15_/_0.2)]",
    statusBorder: "border-[oklab(0.72_0.13_-0.16_/_0.3)]",
    statusText: "text-[oklch(0.92_0.08_280)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(180, 140, 255, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(180, 140, 255, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(180, 140, 255, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(180, 140, 255, 0.5), 0px 0px 40px 0px rgba(180, 140, 255, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(180, 140, 255, 0.4)",
  },
  orange: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.75_0.08_0.05_/_0.1)_0%,oklab(0.68_0.09_0.06_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.82_0.08_0.05_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.82_0.08_0.05_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.75_0.08_0.05_/_0.1)_0%,oklab(0.68_0.09_0.06_/_0.05)_50%,oklab(0.75_0.08_0.05_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.75_0.08_0.05_/_0.1)_0%,oklab(0.68_0.09_0.06_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.92_0.08_45)_0%,oklab(0.75_0.08_0.05_/_0.1)_100%)]",
    tag: "text-[oklch(0.92_0.08_45)] bg-[oklab(0.75_0.08_0.05_/_0.1)] border-[oklab(0.82_0.08_0.05_/_0.2)]",
    tagText: "text-[oklch(0.92_0.08_45)]",
    iconColor: "text-[oklch(0.96_0.08_45_/_0.9)]",
    statusBg: "bg-[oklab(0.75_0.08_0.05_/_0.2)]",
    statusBorder: "border-[oklab(0.82_0.08_0.05_/_0.3)]",
    statusText: "text-[oklch(0.92_0.08_45)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(255, 180, 100, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(255, 180, 100, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(255, 180, 100, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(255, 180, 100, 0.5), 0px 0px 40px 0px rgba(255, 180, 100, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(255, 180, 100, 0.4)",
  },
};

export const LabCard = (props: LabCardProps) => {
  const config = variantConfig[props.variant];
  const IconComponent = iconMap[props.title] || (() => null);

  const defaultGlow = config.glowShadow;
  const defaultGlowHover = config.glowShadowHover;
  const defaultSidebarGlow = config.sidebarGlow;
  const defaultIconGlow = config.iconGlow;

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

  return (
    <div
      data-lab-card
      style={{
        boxShadow: defaultGlow,
      }}
      className={`relative backdrop-blur-2xl box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border overflow-hidden p-8 rounded-3xl border-solid transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] origin-center will-change-transform hover:scale-[1.02] hover:-translate-y-1 hover:brightness-[1.05] cursor-pointer ${config.card} ${config.cardBorder} ${config.cardBorderHover}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = defaultGlowHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = defaultGlow;
      }}
    >
      <div
        style={{
          boxShadow: defaultSidebarGlow,
        }}
        className={`absolute box-border caret-transparent opacity-50 outline-[oklab(0.708_0_0_/_0.5)] w-[3px] inset-y-0 right-0 ${config.sideBarGradient}`}
      ></div>
      <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="items-start box-border caret-transparent gap-x-4 flex justify-between outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 mb-6 group/icon">
          <div
            style={{
              boxShadow: '0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
            }}
            className={`items-center backdrop-blur-xl box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 border rounded-xl border-solid transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] origin-center group-hover/icon:scale-110 ${config.iconGradient} ${config.cardBorder}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = defaultIconGlow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)';
            }}
          >
            <div
              className={`${config.iconColor} box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6 group-hover/icon:rotate-[360deg] group-hover/icon:scale-110`}
              style={{
                transition: 'rotate 1400ms cubic-bezier(0.16, 1, 0.3, 1), scale 700ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {IconComponent && <IconComponent />}
            </div>
          </div>
          <span className={`${config.statusText} text-xs ${config.statusBg} box-border caret-transparent block leading-[15px] outline-[oklab(0.708_0_0_/_0.5)] border ${config.statusBorder} px-3 py-1 rounded-[10px] border-solid`}>
            {props.status}
          </span>
        </div>
        <h3 className={`text-transparent text-xl font-bold bg-clip-text box-border caret-transparent tracking-[0.5px] leading-8 outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-2 ${config.titleGradient}`}>
          {props.title}
        </h3>
        <p className="text-[oklab(0.946_0.0199398_-0.0262945_/_0.7)] text-sm box-border caret-transparent leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] mb-6">
          {props.description}
        </p>
        <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
          {props.tech.map((item, index) => (
            <span
              key={index}
              style={{
                boxShadow: animatedChips.has(index) ? config.chipGlow : 'none',
                transform: animatedChips.has(index) ? 'scale(1.06) translateY(-2px)' : 'scale(1) translateY(0)',
                filter: animatedChips.has(index) ? 'brightness(1.12)' : 'brightness(1)',
                opacity: animatedChips.has(index) ? 1 : 0.95,
                transition: 'box-shadow 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className={`${config.tag} text-sm box-border caret-transparent block leading-5 outline-[oklab(0.708_0_0_/_0.5)] px-4 py-2 rounded-xl border-solid`}
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
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
