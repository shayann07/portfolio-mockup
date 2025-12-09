export const StatusBar = () => {
  return (
    <div className="flex items-center justify-between box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-5 mt-5 border-t border-[rgba(139,92,246,0.15)]">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#4ADE80] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
        <span className="text-[rgba(255,255,255,0.7)] text-xs box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] font-medium">
          All systems operational
        </span>
      </div>
      <span className="text-[rgba(255,255,255,0.4)] text-xs box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        Last updated: Real-time
      </span>
    </div>
  );
};
