"use client"
import React, { useState, useEffect } from 'react'
import IconArrowLeft from '@/public/svg/left-arrow.svg'
import IconArrowRight from '@/public/svg/right-arrow.svg'

type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  curr:number;
  setCurr:React.Dispatch<React.SetStateAction<number>>;
}
const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 ,curr,setCurr}:CarouselProps) => {
    // const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr:number) => (curr === 0 ? React.Children.count(children) - 1 : curr - 1))

    const next = () => setCurr((curr:number) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className='overflow-x-hidden overflow-y-visible relative rounded-lg'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 md:p-10">
                   <button onClick={prev} >
                   <IconArrowLeft className="text-[53px] text-white/90 hover:text-primary/90"/>
                </button> 
                {/* <button onClick={prev} className='flex items-center p-1 w-[33px] h-[33px] md:w-[53px] md:h-[53px] rounded-full border-1 shadow border-[1px] border-white border-solid text-white hover:bg-white/80 hover:text-primary'>
                   <IconArrowLeft className="text-[53px] items-center"/>
                </button> */}
                <button onClick={next} >
                    <IconArrowRight  className="text-[53px] text-white/90 hover:text-primary/90"/>
                </button>
            </div>
            {/* 圖示於圖片中展示 */}
            {/* <div className='absolute bottom-8 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {React.Children.toArray(children)?.map((_, i) => (
                        <div key={i} className={`transition-all w-[18px] h-[18px] bg-black rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} onClick={() => setCurr(i)}/>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default Carousel