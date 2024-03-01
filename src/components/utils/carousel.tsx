'use client';
import React, { useState, useEffect } from 'react';
import IconArrowLeft from '@/public/svg/left-arrow.svg';
import IconArrowRight from '@/public/svg/right-arrow.svg';
import useScrollProcess from '@/src/hooks/useScrollProcess';
type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  curr: number;
  setCurr: React.Dispatch<React.SetStateAction<number>>;
  setOpenLightBox: React.Dispatch<React.SetStateAction<boolean>>;
  projectName: string;
};

const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
  curr,
  setCurr,
  setOpenLightBox,
  projectName
}: CarouselProps) => {
  // const [curr, setCurr] = useState(0)
  const completions = useScrollProcess();

  // 輪播功能
  const prev = () => setCurr((curr: number) => (curr === 0 ? React.Children.count(children) - 1 : curr - 1));

  const next = () => setCurr((curr: number) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden relative rounded-lg">
      <div
        className="flex lg:items-center transition-transform ease-out duration-500 3md:h-[98.5vh]"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 md:p-10 z-20">
        <button onClick={prev}>
          <IconArrowLeft className="text-[53px] text-white/90 hover:text-primary/90" />
        </button>
        <div
          className="w-full h-full"
          onClick={() => {
            setOpenLightBox(true);
          }}
        />
        <button onClick={next}>
          <IconArrowRight className="text-[53px] text-white/90 hover:text-primary/90" />
        </button>
      </div>
      <div
        className={`absolute inset-0 hidden 3md:flex items-end z-10 ${
          completions > 0 ? '-translate-y-[40px] transform ease-linear duration-500 opacity-0' : ''
        }`}
      >
        <span className="font-sansCjk text-[28px] 3xl:text-[30px] wide:text-[34px] font-semibold px-12 py-10">
          {projectName}
        </span>
      </div>
      {/* 圖示於圖片中展示 */}
      {/* <div className='absolute bottom-8 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {React.Children.toArray(children)?.map((_, i) => (
                        <div key={i} className={`transition-all w-[10px] h-[10px] bg-black rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} onClick={() => {setCurr(i) }}/>
                    ))}
                </div> 
            </div> */}
    </div>
  );
};

export default Carousel;
