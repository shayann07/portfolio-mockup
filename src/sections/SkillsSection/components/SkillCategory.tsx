import React from "react";

// Icon components
const MobileDevIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArchitectureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 21V7l5-4v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 21V3l-5 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V9l3-2v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BackendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const MLIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9" cy="9" r="2" fill="currentColor"/>
    <circle cx="15" cy="9" r="2" fill="currentColor"/>
    <path d="M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ToolsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const iconMap: Record<string, React.ComponentType> = {
  "Mobile Development": MobileDevIcon,
  "Architecture": ArchitectureIcon,
  "Backend & APIs": BackendIcon,
  "Database": DatabaseIcon,
  "Machine Learning": MLIcon,
  "Tools & DevOps": ToolsIcon,
  "Testing": TestingIcon,
};

export type SkillVariant = "cyan" | "green" | "blue" | "teal" | "purple" | "orange" | "pink";

export type SkillCategoryProps = {
  title: string;
  icon?: string;
  skills: string[];
  colSpan: string;
  variant: SkillVariant;
};

const variantConfig: Record<
  SkillVariant,
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
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(255, 180, 100, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(255, 180, 100, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(255, 180, 100, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(255, 180, 100, 0.5), 0px 0px 40px 0px rgba(255, 180, 100, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(255, 180, 100, 0.4)",
  },
  pink: {
    card: "bg-[linear-gradient(to_right_bottom,oklab(0.72_0.10_-0.05_/_0.1)_0%,oklab(0.65_0.11_-0.06_/_0.05)_100%)]",
    cardBorder: "border-[oklab(0.79_0.11_-0.05_/_0.2)]",
    cardBorderHover: "hover:border-[oklab(0.79_0.11_-0.05_/_0.3)]",
    sideBarGradient: "bg-[linear-gradient(oklab(0.72_0.10_-0.05_/_0.1)_0%,oklab(0.65_0.11_-0.06_/_0.05)_50%,oklab(0.72_0.10_-0.05_/_0.1)_100%)]",
    iconGradient: "bg-[linear-gradient(to_right_bottom,oklab(0.72_0.10_-0.05_/_0.1)_0%,oklab(0.65_0.11_-0.06_/_0.05)_100%)]",
    titleGradient: "bg-[linear-gradient(to_right,oklch(0.92_0.08_330)_0%,oklab(0.72_0.10_-0.05_/_0.1)_100%)]",
    tag: "text-[oklch(0.92_0.08_330)] bg-[oklab(0.72_0.10_-0.05_/_0.1)] border-[oklab(0.79_0.11_-0.05_/_0.2)]",
    tagText: "text-[oklch(0.92_0.08_330)]",
    iconColor: "text-[oklch(0.96_0.08_330_/_0.9)]",
    glowShadow: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(255, 150, 200, 0.12)",
    glowShadowHover: "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 70px 0px rgba(255, 150, 200, 0.15)",
    sidebarGlow: "0px 0px 20px 0px rgba(255, 150, 200, 0.4)",
    iconGlow: "0px 0px 20px 0px rgba(255, 150, 200, 0.5), 0px 0px 40px 0px rgba(255, 150, 200, 0.35)",
    chipGlow: "0px 0px 12px 0px rgba(255, 150, 200, 0.4)",
  },
};

export const SkillCategory = (props: SkillCategoryProps) => {
  const config = variantConfig[props.variant];
  const IconComponent = iconMap[props.title] || (() => null);

  const defaultGlow = config.glowShadow;
  const defaultGlowHover = config.glowShadowHover;
  const defaultSidebarGlow = config.sidebarGlow;
  const defaultIconGlow = config.iconGlow;

  // Chip animation state - track which chips are animated
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
    <div className={`${props.colSpan}`}>
      <div
        data-skill-card
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
          <div className="items-center box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3 mb-6 group/icon">
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
            <h3
              className={`text-transparent text-xl font-bold bg-clip-text box-border caret-transparent tracking-[0.5px] leading-8 outline-[oklab(0.708_0_0_/_0.5)] uppercase ${config.titleGradient}`}
            >
              {props.title}
            </h3>
          </div>
          <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
            {props.skills.map((skill, index) => (
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
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
