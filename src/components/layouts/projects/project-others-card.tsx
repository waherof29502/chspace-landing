'use client'
import React, { useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Image from 'next/image';
import img1 from '@/public/images/hero-image.png'
import img2 from '@/public/images/hero-image.png'
interface ProjectOthersCardProps {
  dataIndex:number;
  src: string;
  title:string;
  desc:string
}

const ProjectOtherCard = ({ dataIndex,src,title,desc}: ProjectOthersCardProps ) => {
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
            className={`w-60 wide:w-[435px] p-2 ${
              dataIndex === TOTAL_CAROUSEL_COUNT - 1 ? 'mr-[1px]' : 'mr-[0.5px]'
            }  rounded-lg cursor-pointer`}
            onClick={(e) => handleClick(e, dataIndex)}
          >
           <div className='relative overflow-hidden rounded-lg'>
          <div className='flex flex-col'>
          <Image
            src={src}
            alt={dataIndex.toString()}
            width={427}
            height={267}
            className='w-full object-contain'
          />      
          <div className='flex flex-col items-start mt-6 md:flex-row md:items-center'>
          <p className='text-[12px] md:text-[16px] text-primary font-medium tracking-[1.8px]'>{title}</p>
           <p className='mt-2 md:mt-0 md:ml-2 text-[10px] md:text-[12px] font-sansCjk font-normal  text-[#464646]'>{desc}</p>
           </div>


          </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center p-0 md:p-6 '>
      
      </div>
    </div>
          </div>
      
      </div>
  );
};

export default ProjectOtherCard;
