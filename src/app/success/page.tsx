export const metadata = {
  title: '文域設計 ｜首頁',
  description: '深耕"人文藝術文化場域"以設計閱讀世界。',
};
import Image from 'next/image';
import HeroBg from '@/public/images/hero-image.png';
import Header from '@/src/components/ui/header';


import ThanksBg from '@/public/images/thanks-page.png';

export default function Success() {
  return (
    <>
          <Header />
         <div className='w-full min-h-screen flex items-center justify-center relative'>

        <Image
          className='pl-2 pr-2 pt-2 pb-2 md:pb-0 rounded-2xl h-auto object-cover'
          src={ThanksBg}
          fill
          alt='hero-bg'
        />
      </div>
      <div className='absolute bg-white/20 left-1/2 top-1/2 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] px-[80px] border-2 border-white/50 rounded-full'>
        <h1 className='text-[68px] font-syne font-normal tracking-[2.04px] mb-4'>Thanks</h1>
        <span className='text-[22px] tracking-[3.3px] font-sansCjk font-semibold text-center'>感謝您的諮詢，我們將盡快與您聯繫。</span>
      </div>
     
    </>
  );
}

