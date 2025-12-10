import { icons } from "@/config/icons";
import { useScrollAnimation } from "@/hooks";
import { TimelineItem } from "@/sections/StorySection/components/TimelineItem";
import { staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";

export const Timeline = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  const lineVariant = {
    hidden: { height: "0%" },
    visible: {
      height: "100%",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInLeft80 = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideInRight80 = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div ref={ref} className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
      {/* Styles omitted for brevity, keeping them if they were inline or handled by CSS file. 
          Assuming styles are needed, I should keep them. 
          The previous tool call had styles in <style> block inside the component. I must preserve them.
       */}
      <style>{`
        @keyframes timeline-dot-glow-breathe-1 {
          0%, 100% {
            box-shadow: 0 0 20.0292px rgba(139, 92, 246, 0.6), 0 0 26.9179px rgba(139, 92, 246, 0.737);
          }
          50% {
            box-shadow: 0 0 28px rgba(139, 92, 246, 0.8), 0 0 38px rgba(139, 92, 246, 0.9);
          }
        }
        @keyframes timeline-dot-glow-breathe-2 {
          0%, 100% {
            box-shadow: 0 0 23.2411px rgba(139, 92, 246, 0.667), 0 0 36.6355px rgba(139, 92, 246, 0.933);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.85), 0 0 45px rgba(139, 92, 246, 0.95);
          }
        }
        @keyframes timeline-dot-glow-breathe-3 {
          0%, 100% {
            box-shadow: 0 0 20.569px rgba(139, 92, 246, 0.61), 0 0 39.5846px rgba(139, 92, 246, 0.992);
          }
          50% {
            box-shadow: 0 0 28px rgba(139, 92, 246, 0.8), 0 0 48px rgba(139, 92, 246, 1);
          }
        }
        @keyframes timeline-dot-blink-1 {
          0%, 30% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0));
          }
          12%, 18% {
            filter: brightness(1.02) drop-shadow(0 0 4px rgba(139, 92, 246, 0.18)) drop-shadow(0 0 8px rgba(168, 85, 247, 0.12));
          }
        }
        @keyframes timeline-dot-blink-2 {
          0%, 30% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0));
          }
          12%, 18% {
            filter: brightness(1.02) drop-shadow(0 0 5px rgba(139, 92, 246, 0.2)) drop-shadow(0 0 9px rgba(168, 85, 247, 0.14));
          }
        }
        @keyframes timeline-dot-blink-3 {
          0%, 30% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0));
          }
          12%, 18% {
            filter: brightness(1.02) drop-shadow(0 0 5px rgba(139, 92, 246, 0.21)) drop-shadow(0 0 10px rgba(168, 85, 247, 0.15));
          }
        }
        @media (min-width: 768px) {
          @keyframes timeline-dot-glow-breathe-1 {
            0%, 100% {
              box-shadow: 0 0 26.9179px rgba(139, 92, 246, 0.737);
            }
            50% {
              box-shadow: 0 0 38px rgba(139, 92, 246, 0.9);
            }
          }
          @keyframes timeline-dot-glow-breathe-2 {
            0%, 100% {
              box-shadow: 0 0 36.6355px rgba(139, 92, 246, 0.933);
            }
            50% {
              box-shadow: 0 0 45px rgba(139, 92, 246, 0.95);
            }
          }
          @keyframes timeline-dot-glow-breathe-3 {
            0%, 100% {
              box-shadow: 0 0 39.5846px rgba(139, 92, 246, 0.992);
            }
            50% {
              box-shadow: 0 0 48px rgba(139, 92, 246, 1);
            }
          }
        }
        .timeline-dot-variant-1 {
          animation: timeline-dot-glow-breathe-1 3s ease-in-out infinite, timeline-dot-blink-1 6s cubic-bezier(0.33, 1, 0.68, 1) 4s infinite;
        }
        .timeline-dot-variant-2 {
          animation: timeline-dot-glow-breathe-2 3s ease-in-out infinite, timeline-dot-blink-2 6s cubic-bezier(0.33, 1, 0.68, 1) 2s infinite;
        }
        .timeline-dot-variant-3 {
          animation: timeline-dot-glow-breathe-3 3s ease-in-out infinite, timeline-dot-blink-3 6s cubic-bezier(0.33, 1, 0.68, 1) 0s infinite;
        }
      `}</style>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={lineVariant}
        className="absolute bg-[linear-gradient(rgba(139,92,246,0.6)_0%,rgba(168,85,247,0.4)_50%,rgba(139,92,246,0.6)_100%)] shadow-[rgba(139,92,246,0.5)_0px_0px_20px_0px] box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-0.5 left-8 inset-y-0 md:left-1/2 md:-translate-x-1/2Origin-top"
        style={{ originY: 0 }}
      ></motion.div>
      <motion.div
        className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <TimelineItem
          variant="mb-16 md:flex-row"
          iconSrc={icons.timeline1}
          iconAlt="Icon"
          title="Freelance Android Developer"
          organization="Independent"
          period="2024 → Now"
          customVariants={slideInLeft80}
          bulletPoints={[
            { text: "3 production apps shipped with 10k+ combined installs" },
            {
              text: "Architected offline-first sync solutions using Room + Firestore",
            },
            { text: "Achieved 99.5% crash-free builds across all releases" },
            {
              text: "Implemented CI/CD pipelines with automated testing",
              isLast: true,
            },
          ]}
        />
        <TimelineItem
          variant="mb-16 md:flex-row-reverse"
          iconSrc={icons.timeline1}
          iconAlt="Icon"
          title="Android Developer Intern"
          organization="Appverse Technologies"
          period="2025"
          customVariants={slideInRight80}
          bulletPoints={[
            { text: "Built modular Compose UI with MVVM architecture" },
            { text: "Integrated REST/GraphQL APIs with Retrofit + Apollo" },
            { text: "Contributed to CI/CD workflow improvements" },
            {
              text: "Optimized app performance achieving 40–60% gains",
              isLast: true,
            },
          ]}
        />
        <TimelineItem
          variant="md:flex-row"
          iconSrc={icons.timeline2}
          iconAlt="Icon"
          title="BS Software Engineering"
          organization="University of Sargodha"
          period="2021 – 2025"
          customVariants={slideInLeft80}
          bulletPoints={[
            {
              text: "Specialized in mobile development & software architecture",
            },
            { text: "Built multiple Android projects with ML integration" },
            {
              text: "Deep focus on algorithms, systems design, and mobile frameworks",
            },
            {
              text: "Graduated with honors in mobile app development",
              isLast: true,
            },
          ]}
        />
      </motion.div>
    </div>
  );
};
