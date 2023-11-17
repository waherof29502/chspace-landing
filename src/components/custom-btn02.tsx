interface ButtonProps{
    title:string
    fontType:string
}
export default function CustomBtn02({title,fontType}:ButtonProps) {
  return (
     <button className='flex mx-12 my-[10px] md:my-0 py-[60px] wide:py-0 transition-all'>
        <div className='group flex w-[180px] items-center justify-between -mt-[30px] '>
        <p className={`text-primary -translate-x-[10px] ${fontType} text-[16px] tracking-[0.48px] transition-all group-hover:translate-x-[2px] ease-linear duration-300`}>{title}</p>
        <div className="relative w-20 group-hover:w-10 h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-300" />
        <div className="relative -ml-[80px]  rounded-full border-[1.5px] border-primary border-solid w-[50px] h-[50px] 2xl:w-[150px] 2xl:h-[150px] ease-linear group-hover:bg-black duration-300" />
        <div className="relative -ml-[120px] w-0 group-hover:w-10 h-[1.2px] bg-white transform transition-transform group-hover:ease-linear group-hover:-translate-x-[55px] duration-300 group-hover:animate-in" />
        </div>
</button>
  );
}
