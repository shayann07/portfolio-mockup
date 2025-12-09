import { StoryHeader } from "@/sections/StorySection/components/StoryHeader";
import { Timeline } from "@/sections/StorySection/components/Timeline";

export const StorySection = () => {
  return (
    <section id="story" className="relative bg-gray-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute bg-[linear-gradient(rgba(0,0,0,0)_0%,oklab(0.381_0.100917_-0.144194_/_0.05)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <div className="absolute bg-[linear-gradient(rgba(139,92,246,0.2)_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(139,92,246,0.2)_1px,rgba(0,0,0,0)_1px)] bg-size-[80px_80px,80px_80px] box-border caret-transparent opacity-[0.02] outline-[oklab(0.708_0_0_/_0.5)] bg-[position:0%,0%_0%,0%] inset-0"></div>
      <div className="relative box-border caret-transparent max-w-6xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <StoryHeader />
        <Timeline />
      </div>
    </section>
  );
};
