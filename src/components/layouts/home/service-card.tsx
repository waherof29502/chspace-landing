'use client';
import React, { ReactElement, useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Image from 'next/image';

interface ServiceProps {
  dataIndex: number;
  src: string;
  title: string;
  icon: ReactElement;
}

const ServiceCard = ({ dataIndex, src, title, icon }: ServiceProps) => {
  const TOTAL_CAROUSEL_COUNT = dataIndex;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  const scroll = (node: HTMLElement, left: number) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / dataIndex));

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * dataIndex);

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
        className={`w-60 3xl:w-[245px] wide:w-[300px] wider:w-[350px] px-2 ${
          dataIndex === TOTAL_CAROUSEL_COUNT - 1 ? 'mr-[1px]' : 'mr-[0.5px]'
        }  rounded-lg `}
        onClick={(e) => handleClick(e, dataIndex)}
      >
        <div className="relative overflow-hidden">
          <Image src={src} alt={title} width={100} height={100} className="w-full object-contain" />

          <div className="absolute inset-0 flex flex-col justify-center items-center p-0 md:p-1 transition-all slide-out-from-bottom-10  hover:bg-slate-200/20 hover:rounded-[51px]">
            <div className="text-[30px] hover:text-white p-[85px] -mb-[100px] hover:-mb-[30px] hover:-mt-10 animate-in opacity-0 hover:opacity-100 ease-linear duration-500 z-20">
              {icon}
            </div>
            <p className="text-[22px] font-sansCjk font-medium md:font-bold tracking-[3.3px] text-white -translate-y-10  ease-linear  duration-500 ">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
