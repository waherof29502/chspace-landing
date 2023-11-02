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
            className={`w-60 p-2 ${
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

      <div className='absolute inset-0 flex flex-col justify-center items-center p-0 md:p-6 '>
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className='opacity-0 hover:opacity-100 ease-in-out'
        />
        <p className='text-[12px] md:text-[22px] text-white'>{title}</p>
      </div>
    </div>
          </div>
      
      </div>
  );
};

export default ServiceCard;
