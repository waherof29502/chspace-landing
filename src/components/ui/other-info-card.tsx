'use client';
import React, { useState } from 'react';
import OtherCard from '@/src/components/utils/other-card';
import TextCard from '@/src/components/ui/text-card';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

type OtherInfoProps = {
  id: number;
  src: string;
  title?: string;
  otherTitle?: string;
  desc?: string;
  date?: string;
  tag?: string;
  link: string;
};
interface OtherInfoCardProps {
  OtherInfo: OtherInfoProps[];
 
}

export default function OtherInfoCard({ OtherInfo }: OtherInfoCardProps) {
  const [currText, setCurrText] = useState(0);

  return (
    <div className="flex justify-center lg:pl-[0px] xl:pl-[5rem] 3xl:px-[5.25rem] wide:px-[10rem] wider:pl-[12rem]">
      <div className="lg:hidden flex overflow-x-auto mt-4 items-start no-scrollbar wide:max-w-full">
        {OtherInfo.map((item) => (
          <OtherCard
            link={item.link}
            key={item.id}
            dataIndex={item.id}
            imageUrl={item.src}
            title={item.title}
            otherTitle={item.otherTitle}
            desc={item.desc}
            date={item.date}
            tag={item.tag}
          />
        ))}
      </div>
      <div className="hidden lg:flex overflow-x-auto mt-4 items-start no-scrollbar wide:max-w-full wider:w-full">
        <Swiper
        slidesPerView={2.5}
        onSlideChange={(swiper) => setCurrText(swiper.activeIndex)}
        loop={true}
        navigation={{
        nextEl:'.button-next-slide',
        }}
        modules={[Navigation]}
        >
          
        {/* <CarouselText autoSlide={false} setCurr={setCurrText} curr={currText}> */}
          
          {OtherInfo.map((item,index) => (
            <SwiperSlide key={index} >
            <Link href={item.link}>
            <TextCard
              link={item.link}
              key={item.id}
              dataIndex={item.id}
              imageUrl={item.src}
              title={item.title}
              otherTitle={item.otherTitle}
              desc={item.desc}
              date={item.date}
              tag={item.tag}
            />
            </Link>
          </SwiperSlide>

          ))}
        {/* </CarouselText> */}
        </Swiper>
        <div
          className="flex flex-row items-center wide:mt-[6.25rem] lg:ml-[6.25rem] lg:mr-[2.5rem] wider:ml-[18.75rem] mr-auto"
          onClick={() => setCurrText(currText == OtherInfo.length - 2 ? 0 : currText + 1)}
        >
        <button className='flex mx-0 my-[10px] md:my-0 xl:my-5 py-[60px] wide:py-0 transition-all button-next-slide  wider:scale-110' >
      <div className="group flex w-[210px] lg:w-[260px]  items-center justify-between -mt-2">
        <p
          className={`text-primary -translate-x-[10px] font-syne text-[16px] tracking-[0.48px] transition-all group-hover:translate-x-[2px] ease-linear duration-300`}
        >
          view more
        </p>
        <div className="relative w-20 group-hover:w-[95px] h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-300" />
        <div className="relative -ml-[70px]  rounded-full border-[1.5px] border-primary border-solid w-[50px] h-[50px]  lg:w-[150px] lg:h-[150px] ease-linear group-hover:bg-black duration-300" />
        <div className="absolute w-0 group-hover:w-[80px] h-[1.2px] bg-white transform transition-transform group-hover:ease-linear group-hover:translate-x-[110px]  duration-300 group-hover:animate-in" />
        <div className="absolute w-0 group-hover:w-[40px] h-[1.5px] bg-white transform transition-transform group-hover:ease-linear group-hover:translate-x-[153px] group-hover:-translate-y-[12px] duration-300 group-hover:animate-in rotate-[35deg]" />
      </div>
          </button>
        </div>
      </div>
    </div>
  );
}
