"use client"
import React, { useState, useEffect } from 'react'


type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  curr:number;
  setCurr:React.Dispatch<React.SetStateAction<number>>;
}
const CarouselText = ({ children, autoSlide = false, autoSlideInterval = 3000 ,curr,setCurr}:CarouselProps) => {
    // const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr:number) => (curr === 0 ? React.Children.count(children) - 1 : curr - 1))

    const next = () => setCurr((curr:number) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className='overflow-x-hidden overflow-y-visible relative rounded-lg' >
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 45}%)` }}  >
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 md:p-10">
            </div> 
        </div>
    )
}

export default CarouselText