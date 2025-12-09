import { LabHeader } from "@/sections/LabSection/components/LabHeader";
import { LabCard } from "@/sections/LabSection/components/LabCard";

export const LabSection = () => {
  return (
    <section id="lab" className="relative bg-zinc-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute bg-[linear-gradient(oklab(0.381_0.100917_-0.144194_/_0.1)_0%,rgba(0,0,0,0)_50%,oklab(0.381_0.100917_-0.144194_/_0.1)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <div className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <LabHeader />
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <LabCard
            title="ML Gesture Recognition"
            description="Real-time hand gesture detection using TensorFlow Lite for intuitive app controls"
            status="In Progress"
            tech={["TensorFlow Lite", "Kotlin", "ML Kit", "CameraX"]}
            variant="cyan"
          />
          <LabCard
            title="ML Model Optimizer"
            description="Tool to compress and optimize TensorFlow Lite models for mobile deployment"
            status="Research"
            tech={["TensorFlow Lite", "Python", "Quantization", "Model Compression"]}
            variant="purple"
          />
          <LabCard
            title="Voice Command Integration"
            description="Privacy-first voice recognition with on-device processing and ML inference"
            status="In Progress"
            tech={["TensorFlow Lite", "Audio Processing", "ML Inference", "Privacy"]}
            variant="orange"
          />
        </div>
        <div className="absolute bg-[radial-gradient(circle_at_29.7568%_50%,rgba(139,92,246,0.05),rgba(0,0,0,0)_40%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none inset-0 md:bg-[radial-gradient(circle_at_69.6002%_50%,rgba(139,92,246,0.05),rgba(0,0,0,0)_40%)]"></div>
      </div>
    </section>
  );
};
