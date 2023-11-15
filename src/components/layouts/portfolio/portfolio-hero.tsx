
import Image from 'next/image';
import PortfolioBg from '@/public/images/portfolio-bg.png';

export default function PortfolioHero() {
  return (
    <section className='relative'>
       <div className='relative w-full p-2 h-[365px] 2xl:h-[730px] '>
    {/* Hero image */}
    <Image
      className='w-full h-full object-cover rounded-xl'
      src={PortfolioBg}
      alt='hero-bg'
    />
  </div>

  <div className='absolute inset-0 flex flex-col justify-center items-center'>
     <span className='mt-2 font-sansCjk text-white text-[18px] 2xl:text-[24px]'>
      作品欣賞
    </span>
    <h1 className='text-white font-syne text-[48px] 2xl:text-[68px] font-normal capitalize'>
      Portfolio
    </h1>
   
  </div>
    
    </section>
  );
}
