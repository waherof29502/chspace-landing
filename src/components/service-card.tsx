'use client'
import React, { useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Image from 'next/image';

interface ServiceProps {
 dataIndex:number;
  src: string;
  title: string;
  icon: string;
}

const ServiceCard = ({ dataIndex,src, title, icon }: ServiceProps) => {
    const TOTAL_CAROUSEL_COUNT = dataIndex;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  const scroll = (node: HTMLElement, left: number) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        (carouselRef.current.scrollWidth * 0.7) * (i /  dataIndex)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
           dataIndex
      );

      setActiveItem(index);
    }
  };

  // Snap back to the beginning of the scroll when the window is resized
  // Avoids a bug where content is covered up if coming from a smaller screen
  useEffect(() => {
    const handleResize = () => {
     if (carouselRef.current) {
    scroll(carouselRef.current, 0);
  }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
      <div ref={carouselRef} onScroll={handleScroll}>
          <div
            className={`w-60 2xl:w-[270px]  p-2 ${
              dataIndex === TOTAL_CAROUSEL_COUNT - 1 ? 'mr-[1px]' : 'mr-[0.5px]'
            }  rounded-lg cursor-pointer`}
            onClick={(e) => handleClick(e, dataIndex)}
          >
           <div className='relative overflow-hidden'>
      <Image
        src={src}
        alt={title}
        width={100}
        height={100}
        className='w-full object-contain'
      />

     <div className="absolute inset-0 flex flex-col justify-center items-center p-0 md:p-1 hover:animate-in hover:slide-in-from-bottom-10 slide-out-from-bottom-10 hover:bg-slate-200/20 hover:rounded-[51px]">
    <Image
    src={icon}
    alt={title}
    width={150}
    height={200}
    className="w-[200px] p-[65px] -mt-[100px] hover:-mt-[10px]  animate-in slide-in-from-top-2 opacity-0 hover:slide-out-to-bottom-2 hover:opacity-100 hover:slide-in-from-top-100"
  />
  <p className="text-[22px] font-serif font-bold tracking-[3.3px] text-white -translate-y-10 ">
    {title}
  </p>
</div>
    </div>
          </div>
      
      </div>
  );
};

export default ServiceCard;
