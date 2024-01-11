'use client';
import React, { useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface OthersCardProps {
  dataIndex: number;
  imageUrl: string;
  title?: string;
  otherTitle?: string;
  date?: string;
  desc?: string;
  tag?: string;
  link:string;
}

const TextCard = ({ dataIndex, imageUrl, title, otherTitle, desc, date, tag,link }: OthersCardProps) => {
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
        className={`p-2 ${
          dataIndex === TOTAL_CAROUSEL_COUNT - 1 ? 'mr-[1px]' : 'mr-[0.5px]'
        }  rounded-lg cursor-pointer`}
        onClick={(e) => {handleClick(e, dataIndex);  window.location.href=`${link}`}}
      >
        <div className="relative overflow-hidden rounded-lg"> 
          <div className="flex flex-col">
            <Image
              src={imageUrl}
              alt={dataIndex.toString()}
              width={427}
              height={267}
              className="w-full object-contain aspect-1/1"
            />
            <div className="flex pt-3">
              <span className="text-[#464646] font-syne text-[14px] tracking-[0.42px] pr-2">{tag}</span>
              <span className="text-[#464646] font-syne text-[14px] tracking-[0.42px] ">{date}</span>
            </div>
            {/* <p className='text-[12px] md:text-[14px] 3xl:text-[16px] mt-[6px] text-primary font-semibold tracking-[1.8px]'>{otherTitle}</p> */}

            <div className="flex flex-col items-start mt-6 lg:mt-2 xl:flex-col xl:items-start 3xl:flex-col 3xl:items-start ">
              <p className="text-[12px] md:text-[14px] 3xl:text-[16px] mt-2 text-primary font-semibold tracking-[1.8px]">
                {title}
              </p>
              <p className="mt-2 md:mt-0 xl:mt-[12px] xl:ml-0 text-[10px] md:text-[12px] font-sansCjk font-normal  text-[#464646]">
                {desc}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-0 md:p-6 "></div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
