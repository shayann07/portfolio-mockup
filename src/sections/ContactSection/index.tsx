import { ContactHeader } from "@/sections/ContactSection/components/ContactHeader";
import { ContactCard } from "@/sections/ContactSection/components/ContactCard";
import { personalLinks } from "@/config/personalLinks";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-gray-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0">
        <div className="absolute bg-[radial-gradient(circle,rgba(139,92,246,0.4)_0%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[100px] h-[400px] opacity-10 outline-[oklab(0.708_0_0_/_0.5)] translate-x-[47.1231px] translate-y-[-28.2739px] w-[400px] rounded-[3.35544e+07px] scale-[1.28274px] left-1/4 top-1/4 md:translate-x-[34.6074px] md:translate-y-[-20.7645px] md:scale-[1.20764px]"></div>
        <div className="absolute bg-[radial-gradient(circle,rgba(34,211,238,0.3)_0%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[100px] h-[350px] opacity-10 outline-[oklab(0.708_0_0_/_0.5)] translate-x-[-8.96433px] translate-y-[8.96433px] w-[350px] rounded-[3.35544e+07px] scale-[1.15518px] right-1/4 bottom-1/4 md:translate-x-[-10.2361px] md:translate-y-[10.2361px] md:scale-[1.14882px]"></div>
      </div>
      <div className="absolute bg-[linear-gradient(rgba(139,92,246,0.3)_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,rgba(0,0,0,0)_1px)] bg-size-[60px_60px,60px_60px] box-border caret-transparent opacity-[0.015] outline-[oklab(0.708_0_0_/_0.5)] bg-[position:0%,0%_0%,0%] inset-0"></div>
      <div className="relative box-border caret-transparent max-w-6xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <ContactHeader />
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <ContactCard icon="📧" title="Email" value={personalLinks.email.label} link={personalLinks.email.link} />
          <ContactCard icon="💼" title="LinkedIn" value={personalLinks.linkedin.label} link={personalLinks.linkedin.link} />
          <ContactCard icon="🐙" title="GitHub" value={personalLinks.github.label} link={personalLinks.github.link} />
        </div>
      </div>
    </section>
  );
};
