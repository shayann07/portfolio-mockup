import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { ProjectsHeader } from "@/sections/ProjectsSection/components/ProjectsHeader";
import { staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Icon components - custom SVG icons
const AITrustLedgerIcon = () => (
  <svg width="28" height="28" viewBox="152 50 230 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M358.559235,301.437073 C352.854553,291.998230 347.201172,282.954681 341.890564,273.714172 C339.981659,270.392700 337.713104,268.826111 333.891693,269.218781 C331.583679,269.455902 329.219849,269.400879 326.900726,269.222229 C323.258392,268.941681 320.548492,269.640686 319.172882,273.646362 C318.282043,276.240295 315.855194,277.772308 313.067932,278.304596 C311.114410,278.677673 309.132019,279.097046 307.156647,279.128510 C280.010040,279.561249 252.859131,279.777496 225.716202,280.366364 C206.401108,280.785370 187.094727,281.558044 167.768829,281.318085 C160.141846,281.223358 156.232880,277.699432 155.773148,270.375031 C155.307175,262.951263 158.978119,257.976532 166.507706,257.485016 C176.300949,256.845734 186.160889,256.741394 195.972183,257.047028 C201.922699,257.232391 205.609177,255.288376 208.056656,249.806961 C210.016449,245.417740 213.718262,242.033920 209.458527,236.486633 C206.930054,233.193893 208.864288,228.559570 210.998062,224.719208 C227.500046,195.018784 243.918167,165.271744 260.357208,135.536362 C266.480865,124.459732 272.576416,113.367531 278.715149,102.299278 C280.973328,98.227730 284.308563,95.102020 289.113739,96.069847 C294.197174,97.093719 298.909668,99.391464 300.803009,105.061707 C302.183380,109.195641 300.332672,112.552803 298.498871,115.912628 C293.870819,124.391998 289.299713,132.907761 284.424316,141.244308 C282.408539,144.691162 282.170807,147.648056 284.586517,150.859512 C285.581665,152.182495 286.470154,153.638092 287.123718,155.155441 C288.820923,159.095673 290.876770,161.606277 296.008087,160.878342 C300.379395,160.258209 303.195831,163.575623 305.385010,167.193527 C320.561615,192.274704 335.779816,217.330719 350.989929,242.391617 C359.978363,257.201324 369.047821,271.962463 377.941010,286.829071 C382.629883,294.667419 380.320465,301.458466 372.028595,305.149841 C366.932709,307.418488 362.987701,306.410065 358.559235,301.437073 M273.262726,161.687759 C272.285431,163.429504 271.295532,165.164291 270.332794,166.914047 C257.493713,190.249039 244.644073,213.578262 231.838379,236.931580 C230.022034,240.244003 227.948196,243.908676 224.000000,243.912689 C216.101196,243.920731 215.258224,249.979980 212.665298,254.841034 C214.813202,256.581085 216.885498,256.059937 218.809570,256.035553 C248.108536,255.664337 277.407013,255.252518 306.705261,254.827209 C310.933044,254.765839 315.768799,254.416840 318.070007,258.404907 C322.218964,265.595062 328.195465,262.320099 333.667664,262.835358 C334.107635,260.115845 332.667114,258.765778 331.756592,257.252960 C316.306976,231.583923 300.844116,205.922791 285.340515,180.286316 C283.191223,176.732269 281.812012,173.147552 283.235443,168.957611 C285.191864,163.198868 283.316162,157.737701 278.083801,153.971741 C275.840210,155.843582 275.165070,158.729568 273.262726,161.687759 z" />
    <path fill="currentColor" d="M248.709290,233.764160 C257.320557,218.954758 265.742615,204.461014 274.943420,188.627075 C285.762970,207.317337 295.967896,224.945908 306.742767,243.559052 C284.990112,243.559052 264.762756,243.559052 244.226013,243.559052 C244.682510,239.460327 247.185379,237.032303 248.709290,233.764160 z" />
  </svg>
);

const LeafBloomIcon = () => (
  <svg width="28" height="28" viewBox="0 0 1436.83 1282.42" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <style>{`.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:url(#linear-gradient);}.cls-4{clip-path:url(#clip-path-2);}.cls-5{fill:url(#linear-gradient-2);}`}</style>
      <clipPath id="clip-path" transform="translate(-2105.77 -1205.71)">
        <path className="cls-1" d="M2904.59,2336.78c-30.21,40.65-71.25,82.33-125.45,125.13.39-2.86.73-5.7,1.07-8.52l.15-1.26c.3-2.51.57-5,.8-7.44l.24-2.34c.24-2.44.44-4.88.64-7.3l.16-2c.19-2.45.35-4.87.5-7.3l.13-2.08c.13-2.33.24-4.67.34-7l.09-2.28c.09-2.25.15-4.51.2-6.73l.05-2.47q0-3.21,0-6.39v-2.67c0-2.17,0-4.32-.07-6.47l0-2c-.05-2.28-.11-4.54-.21-6.79l-.08-1.88c-.1-2.29-.21-4.57-.35-6.84l-.1-1.47c-.14-2.37-.31-4.71-.5-7l-.1-1.17-.92-9.63a764.78,764.78,0,0,0,123.41-16.1m-708.68-283.12c-90.14-241.91-36-502.28,119.17-686.63,10,104.85,186.34,223.52,353.86,359.53-72,68.91-121.57,146.39-129.09,236.07-44.32-53.12-80.39-108.49-90.26-174.26q-1.55,4.17-2.72,8.4c-.81,2.81-1.47,5.62-2,8.47-13.4,68,37.12,144.93,98,229.66,13.23,81.43,60.22,172.33,153.09,275,0,0,24.08,101.46,10.87,152.83-2.36,8.15-5.11,16.34-8.35,24.57l.74.17-.26.71C2476,2440.29,2281.42,2283.18,2195.91,2053.66Z" />
      </clipPath>
      <linearGradient id="linear-gradient" x1="551.45" y1="1318.68" x2="225.82" y2="40.47" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="currentColor" stopOpacity="0.4" />
        <stop offset="1" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>
      <clipPath id="clip-path-2" transform="translate(-2105.77 -1205.71)">
        <path className="cls-1" d="M3404.08,1973.25c138.53-239.94,131.05-538.92-3.74-767.54-74.74,279-1285.46,462-704.4,1104.17.1-3.18.24-6.32.4-9.44l.06-1.41c.15-2.77.33-5.52.49-8.24l.18-2.57c.19-2.7.42-5.38.64-8l.2-2.22c.24-2.69.5-5.36.79-8l.23-2.27q.43-3.85.92-7.65l.31-2.5c.33-2.47.67-4.9,1-7.35l.39-2.68c.36-2.33.73-4.66,1.11-7l.49-2.88c.41-2.36.81-4.69,1.26-7l.41-2.13q.72-3.7,1.47-7.35l.44-2c.52-2.46,1-4.92,1.63-7.36l.38-1.6c.59-2.51,1.2-5,1.83-7.54l.32-1.24a433.63,433.63,0,0,1,18.91-57.13l.4-.95q1.36-3.3,2.76-6.53l.66-1.55c.9-2,1.82-4.06,2.74-6.08l.87-1.91c.91-2,1.83-3.91,2.77-5.84l.89-1.86c.93-1.92,1.88-3.83,2.84-5.71l1-2c.92-1.81,1.86-3.59,2.81-5.37l1.23-2.33c.93-1.72,1.85-3.41,2.78-5.1l1.2-2.12c1-1.83,2.06-3.66,3.12-5.46l.88-1.5c1.09-1.86,2.2-3.72,3.31-5.56l1.15-1.88q1.59-2.59,3.2-5.15l1.18-1.84c1.14-1.77,2.25-3.52,3.4-5.26l.68-1q10.59-16,22.27-30.9l.89-1.15c1.24-1.59,2.51-3.18,3.79-4.76l1.26-1.59,3.47-4.21,1.93-2.34,3.58-4.22,1.46-1.72,3.86-4.43,1.61-1.83,3.87-4.32,1.49-1.66L2823,2002l2-2.16,3.77-4,1.59-1.68,3.85-4,2.22-2.26,3.45-3.49,2.27-2.25,3.49-3.47,2.33-2.27,3.68-3.56,1.47-1.39,4.59-4.37h0c1.76-1.63,3.51-3.28,5.27-4.92l.57-.49,5.69-5.21.16-.16,5.91-5.31.21-.18,5.74-5.07.14-.13,3.78-3.29,2.41-2.1,4.07-3.51,2-1.71,3.53-3,3.07-2.61,3.24-2.7,2.65-2.2,4-3.36,1.33-1.09,2.58-2.13,1.33-1.08,4.17-3.41,1.06-.86,3.18-2.58,3.38-2.72,2.78-2.24,3.81-3,2.39-1.9,4.22-3.35,2-1.58,4.62-3.66,1.59-1.24,5-4,1.2-.95,5.42-4.24.81-.64,5.8-4.54.41-.32,6.21-4.85c87.05-68,171.65-134.16,203.69-232.13.59,3.22,1.07,6.42,1.41,9.62s.53,6.38.63,9.58c5.23,190.2-430.26,367.41-404.85,666.09,1.15,9.91,2.82,19.29,4.75,29.07,250.89-11.15,486.46-139.86,625-379.79" />
      </clipPath>
      <linearGradient id="linear-gradient-2" x1="568" y1="1193.96" x2="938.22" y2="-287.94" xlinkHref="#linear-gradient" />
    </defs>
    <g className="cls-2">
      <rect className="cls-3" y="161.32" width="798.82" height="1121.1" />
    </g>
    <g className="cls-4">
      <rect className="cls-5" x="9.11" width="1427.72" height="1147.33" />
    </g>
  </svg>
);

const GitPulseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 51 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="29.4172" width="17.6301" height="17.3911" transform="rotate(-44.7284 0 29.4172)" fill="currentColor" opacity="0.6" />
    <rect x="12.6255" y="12.5865" width="17.885" height="17.8555" transform="rotate(-44.7284 12.6255 12.5865)" fill="currentColor" opacity="0.8" />
    <rect x="25.3052" y="29.4361" width="17.8651" height="17.8356" transform="rotate(-44.7284 25.3052 29.4361)" fill="currentColor" />
  </svg>
);

const TaskFlowProIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      fill="currentColor"
    />
  </svg>
);

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  return (
    <section id="projects" className="relative bg-zinc-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute bg-[linear-gradient(oklab(0.381_0.100917_-0.144194_/_0.1)_0%,rgba(0,0,0,0)_50%,oklab(0.381_0.100917_-0.144194_/_0.1)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <div className="absolute bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[80px] h-[800px] opacity-[0.161185] outline-[oklab(0.708_0_0_/_0.5)] w-[800px] rounded-[3.35544e+07px] scale-[1.01913px] left-2/4 top-2/4 md:opacity-[0.241451] md:scale-[1.09115px]"></div>
      <div ref={ref} className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <ProjectsHeader />
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]"
        >
          <ProjectCard
            icon={<AITrustLedgerIcon />}
            title="AI Trust Ledger"
            description="Investment platform with automated ROI cycles and real-time portfolio tracking"
            tags={["Kotlin", "Firebase", "MVVM", "Coroutines"]}
            metrics={[
              { label: "Users", value: "5K+" },
              { label: "Crash-Free", value: "99.8%" },
              { label: "Rating", value: "4.7★" },
            ]}
            variant="cyan"
          />
          <ProjectCard
            icon={<LeafBloomIcon />}
            title="LeafBloom"
            description="AI-powered plant disease diagnosis using TensorFlow Lite with 95% accuracy"
            tags={["TFLite", "Compose", "CameraX", "Room"]}
            metrics={[
              { label: "Accuracy", value: "95%" },
              { label: "Response", value: "<2s" },
              { label: "Models", value: "12" },
            ]}
            variant="green"
          />
          <ProjectCard
            icon={<GitPulseIcon />}
            title="GitPulse"
            description="Developer productivity tracker with GitHub sync and contribution analytics"
            tags={["Flutter", "OAuth", "GraphQL", "Riverpod"]}
            metrics={[
              { label: "Syncs", value: "Real-time" },
              { label: "APIs", value: "5+" },
              { label: "Charts", value: "15" },
            ]}
            variant="blue"
          />
          <ProjectCard
            icon={<TaskFlowProIcon />}
            title="Medicare"
            description="Tele-health & pharmacy platform with appointments, chat, payments and pharmacy flows in one app"
            tags={["Flutter", "Firebase", "Stripe", "Provider / Riverpod"]}
            metrics={[
              { label: "Patient Rating", value: "4.8★" },
              { label: "Resolution Rate", value: "97%" },
              { label: "Follow-up Success", value: "93%" },
            ]}
            variant="red"
          />
        </motion.div>
      </div>
    </section>
  );
};
