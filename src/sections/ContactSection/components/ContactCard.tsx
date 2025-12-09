export type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
  link: string;
};

export const ContactCard = (props: ContactCardProps) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative backdrop-blur-2xl bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.15)_0px_0px_40px_0px] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border overflow-hidden p-8 rounded-3xl border-solid border-[oklab(0.714_0.117894_-0.165257_/_0.2)] transition-all duration-300 hover:border-[oklab(0.714_0.117894_-0.165257_/_0.4)] hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.3)_0px_0px_60px_0px] block"
    >
      <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.714_0.117894_-0.165257_/_0.05)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] rounded-[31px] inset-px"></div>
      <div className="relative items-center box-border caret-transparent flex flex-col outline-[oklab(0.708_0_0_/_0.5)] text-center">
        <div className="text-4xl items-center backdrop-blur-xl bg-[oklab(0.627_0.147802_-0.219953_/_0.2)] box-border caret-transparent flex h-20 justify-center leading-[48px] outline-[oklab(0.708_0_0_/_0.5)] w-20 border border-[oklab(0.714_0.117894_-0.165257_/_0.3)] mb-6 rounded-2xl border-solid">
          {props.icon}
        </div>
        <h3 className="text-white text-lg font-bold box-border caret-transparent tracking-[0.45px] leading-7 outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-2">
          {props.title}
        </h3>
        <p className="text-[oklch(0.902_0.063_306.703)] box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)]">
          {props.value}
        </p>
      </div>
    </a>
  );
};
