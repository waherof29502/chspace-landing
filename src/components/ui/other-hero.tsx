import Image from 'next/image';

export default function OtherHero({ imageUrl, title, desc }: any) {
  return (
    <section className="relative">
      <div className="relative w-full p-2 h-[365px] 2xl:h-[730px] ">
        {/* Hero image */}
        <Image className="w-full h-full object-cover rounded-xl" src={imageUrl} alt="hero-bg" priority={true} />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="mt-2 font-sansCjk text-white text-[18px] 2xl:text-[24px]">{title}</h1>
        <span className="text-white font-syne text-[30px] md:text-[48px] 2xl:text-[68px] font-normal capitalize tracking-[0.9px] md:tracing-[2.04px]">
          {desc}
        </span>
      </div>
    </section>
  );
}
