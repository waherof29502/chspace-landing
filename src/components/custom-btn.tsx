interface ButtonProps{
    title:string
    fontType:string
}
export default function CustomBtn({title,fontType}:ButtonProps) {
  return (
     <button className='flex mx-12 ml-[120px] md:ml-0 my-[10px] md:my-0 py-[50px] transition-all'>
        <div className='group flex w-[180px] items-center justify-between '>
        <p className={`text-primary translate-x-14 ${fontType} text-[16px] tracking-[0.48px] transition-all  group-hover:translate-x-16 ease-linear duration-300`}>{title}</p>
        <div className="relative w-20 group-hover:w-10 h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-300" />
        <div className="relative -ml-[80px]  rounded-full border-[1.5px] border-primary border-solid w-8 h-8 ease-linear group-hover:bg-black duration-300" />
        <div className="relative -ml-[110px] w-0 group-hover:w-4 h-[1.2px] bg-blue-200 transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-300 group-hover:animate-in" />
        </div>
</button>
  );
}
