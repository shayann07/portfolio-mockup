import { CTAContent } from "@/sections/CTASection/components/CTAContent";

export const CTASection = () => {
  return (
    <section id="cta" className="relative bg-gray-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden inset-0">
        <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.3)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.15)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[91.6696px] opacity-[0.212482] outline-[oklab(0.708_0_0_/_0.5)] translate-y-[791.403px] w-px left-[7.5481%] md:opacity-[0.018382] md:translate-y-[985.337px]"></div>
        <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.3)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.15)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[74.4349px] opacity-[0.210092] outline-[oklab(0.708_0_0_/_0.5)] translate-y-[214.821px] w-px left-[76.5682%] md:opacity-[0.037747] md:translate-y-[43.5094px]"></div>
        <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.3)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.15)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[71.9331px] opacity-[0.227763] outline-[oklab(0.708_0_0_/_0.5)] translate-y-[231.133px] w-px left-[78.6394%] md:opacity-[0.268518] md:translate-y-[271.371px]"></div>
        <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.3)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.15)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[44.414px] opacity-[0.22185] outline-[oklab(0.708_0_0_/_0.5)] translate-y-[225.369px] w-px left-[34.6618%] md:opacity-[0.142197] md:translate-y-[145.077px]"></div>
        <div className="absolute bg-[linear-gradient(oklab(0.714_0.117894_-0.165257_/_0.3)_0%,oklab(0.827_0.0705884_-0.0958033_/_0.15)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[50.0397px] opacity-[0.217706] outline-[oklab(0.708_0_0_/_0.5)] translate-y-[218.98px] w-px left-[16.562%] md:opacity-[0.0281113] md:translate-y-[31.4466px]"></div>
      </div>
      <div className="absolute bg-[radial-gradient(circle,rgba(139,92,246,0.4)_0%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[100px] h-[600px] opacity-[0.23619] outline-[oklab(0.708_0_0_/_0.5)] w-[600px] rounded-[3.35544e+07px] scale-[1.18738px] left-2/4 top-2/4 md:opacity-[0.154688] md:scale-[1.01065px]"></div>
      <CTAContent />
    </section>
  );
};
