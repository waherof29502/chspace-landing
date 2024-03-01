interface ButtonProps {
  title: string;
  fontType: string;
}
export default function CustomBtn02({ title, fontType }: ButtonProps) {
  return (
    // 此為更多資訊的大按鈕
    <button className="flex mx-0 my-[10px] md:my-0 xl:my-5 py-[60px] wide:py-0 transition-all">
      <div className="group flex w-[210px] lg:w-[260px]  items-center justify-between -mt-[30px] ">
        <p
          className={`text-primary -translate-x-[10px] ${fontType} text-[16px] tracking-[0.48px] transition-all group-hover:translate-x-[2px] ease-linear duration-300`}
        >
          {title}
        </p>
        <div className="relative w-20 group-hover:w-[95px] h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-300" />
        <div className="relative -ml-[70px]  rounded-full border-[1.5px] border-primary border-solid w-[50px] h-[50px]  lg:w-[150px] lg:h-[150px] ease-linear group-hover:bg-black duration-300" />
        <div className="absolute w-0 group-hover:w-[80px] h-[1.2px] bg-white transform transition-transform group-hover:ease-linear group-hover:translate-x-[110px]  duration-300 group-hover:animate-in" />
        <div className="absolute w-0 group-hover:w-[40px] h-[1.5px] bg-white transform transition-transform group-hover:ease-linear group-hover:translate-x-[153px] group-hover:-translate-y-[12px] duration-300 group-hover:animate-in rotate-[35deg]" />
      </div>
    </button>
  );
}
