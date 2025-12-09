export const CommandCenterHeader = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-12">
      <div className="box-border caret-transparent inline-block outline-[oklab(0.708_0_0_/_0.5)] mb-4">
        <h2 className="text-transparent text-5xl font-black bg-clip-text bg-[linear-gradient(to_right,#E9D5FF_0%,#C4B5FD_50%,#A78BFA_100%)] box-border tracking-[-1px] leading-[1.1] outline-[oklab(0.708_0_0_/_0.5)] uppercase md:text-6xl md:tracking-[-1.5px]">
          COMMAND CENTER
        </h2>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,#8B5CF6_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[2px] outline-[oklab(0.708_0_0_/_0.5)] mt-3"></div>
      </div>
      <p className="text-[rgba(255,255,255,0.5)] text-base box-border caret-transparent leading-6 max-w-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        Real-time performance & reliability metrics
      </p>
    </div>
  );
};
