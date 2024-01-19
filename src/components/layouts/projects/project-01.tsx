'use client';
import React, { useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/src/components/utils/carousel';
import CarouselText from '@/src/components/utils/carousel-text';
import ProjectCard from './project-feature-card';
import OtherCard from '@/src/components/utils/other-card';
import NewsBg from '@/public/images/bg-2.png';
import { PORTFOLIO_PAGE_ITEMS, SLIDERS01, OTHERSPROJECT01, NEWS01 } from '@/src/constants';
import IconFb from '@/public/svg/fb-solid.svg';
import IconIg from '@/public/svg/ig-solid.svg';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import CustomBtn02 from '@/src/components/ui/custom-btn02';
import TextCard from '@/src/components/ui/text-card';

import {motion} from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default function project01() {
  const [curr, setCurr] = useState(0);
  const [currText, setCurrText] = useState(0);
  const [openLightBox, setOpenLightBox] = React.useState(false);
  const toggleLightBoxOpen = (state: boolean) => () => setOpenLightBox(state);
  const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x:0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: "linear",
      delay: 0.05 * index,
    },
  }),
};
  const updateIndex = ({ index: current }: { index: number }) => setCurr(current);

  return (
    <section className="relative">
      <div className="max-w-8xl min-h-fit p-2 ">
        <Lightbox
          open={openLightBox}
          close={toggleLightBoxOpen(false)}
          index={curr}
          slides={SLIDERS01}
          on={{ view: updateIndex }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />
        {/* 案名 projectName 可以直接打字輸入*/}
        <Carousel autoSlide={true} setCurr={setCurr} curr={curr} setOpenLightBox={setOpenLightBox} projectName={PORTFOLIO_PAGE_ITEMS[0].title} >
          {SLIDERS01.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              width={2560}
              height="1270"
              alt="bg-img"
              className="object-cover md:h-[860px] 3md:h-[1120px] 3xl:h-[1560px] wider:h-[1720px] "
            />
          ))}
        </Carousel>
      </div>
      {/* 輪播客製化按鈕 */}
      {/* 手機版按鈕 */}
      <div className="flex md:hidden justify-center mt-2">
        <div className="flex items-center justify-center gap-2 z-10">
          {SLIDERS01.map((_, i) => (
            <div
              key={i}
              className={`w-[10px] h-[10px] md:w-[14px] md:h-[14px] bg-black rounded-full  ${
                curr === i ? 'p-0.5 bg-[#545351]' : 'bg-opacity-20'
              }`}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
      {/* 電腦版按鈕 */}
      <div className="hidden md:flex justify-end -mt-[440px] xs:-mt-[380px] sm:-mt-[180px] md:mt-[50px] 3md:mt-[40px] 3xl:mt-[60px] wide:mt-[80px] mr-[100px] sm:mr-[200px] md:mr-[100px] wider:mr-[400px]">
        <div className="flex items-center justify-center gap-2 z-10">
          {SLIDERS01.map((_, i) => (
            <div
              key={i}
              className={`w-[10px] h-[10px] md:w-[14px] md:h-[14px] xl:w-[16px] xl:h-[16px] wide:w-[18px] wide:h-[18px] bg-black rounded-full  ${
                curr === i ? 'p-0.5 bg-[#545351]' : 'bg-opacity-20'
              }`}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
      {/* 專案案名 */}
      <div className="relative max-w-8xl md:-mt-[90px] mx-auto md:mx-[20px] lg:mx-[20px] xl:mx-[100px] 3xl:mx-[120px] wide:mx-[210px] px-4 sm:px-6 ">
        {PORTFOLIO_PAGE_ITEMS.slice(0, 1).map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
        {/* 專案圖片區塊 */}
        {SLIDERS01.map((item) => (
          <motion.div key={item.id} className="mt-10"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={item.id}
          >
            <Image src={item.src} width={1920} height="1270" alt="12" className="rounded-xl" />
          </motion.div>
        ))}
        {/* 社群icon */}
        <div className="text-primary flex flex-row justify-end items-center mt-10 md:mt-10 md:mb-[100px] wider:mr-[200px]">
          <Link href={'https://www.facebook.com/CHSPACE'} target="_blank" rel="noopener noreferrer">
            <IconFb className="text-[34px] mr-2 text-[#7A7A7A] hover:text-[#4e4e4e]" />
          </Link>
          <Link href={' https://www.instagram.com/chs_interior/'} target="_blank" rel="noopener noreferrer">
            <IconIg className="text-[34px] text-[#7A7A7A] hover:text-[#4e4e4e]" />
          </Link>
        </div>
        {/* 其他資訊區塊 */}
        <div className="flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:mb-[45px] border-t-[1.5px] border-[#D6D6D6] border-solid">
          <h2 className="py-10 xl:pt-[80px] xl:pb-[10px] font-syne text-[30px] md:text-[48px] text-primary font-normal capitalize">
            recommend
          </h2>
          <span className="pl-4 xl:pt-[80px] xl:pb-[10px] mt-1.5 font-san text-[#545351] text-[18px]">其他作品</span>
        </div>
        <div className="lg:hidden flex overflow-x-auto mt-4 items-start no-scrollbar wide:max-w-full">
          {OTHERSPROJECT01.map((item) => (
            <OtherCard key={item.id} dataIndex={item.id} link={item.link} imageUrl={item.src} title={item.title} desc={item.desc} />
          ))}
        </div>
        <div className="hidden lg:flex overflow-x-auto mt-4 items-start no-scrollbar wide:max-w-full">
        <Swiper
        slidesPerView={2.5}
        onSlideChange={(swiper) => setCurrText(swiper.activeIndex)}
        loop={true}
        navigation={{
        nextEl:'.button-next-slide',
        }}
        modules={[Navigation]}
        > 
          {OTHERSPROJECT01.map((item,index) => (
              <SwiperSlide key={index} >
              <TextCard key={item.id} dataIndex={item.id} link={item.link} imageUrl={item.src} title={item.title} desc={item.desc} />
            </SwiperSlide>
            ))}        
        </Swiper>
         <div
          className="flex flex-row items-center wide:mt-[6.25rem] lg:ml-[6.25rem] lg:mr-[2.5rem] wider:ml-[18.75rem] mr-auto"
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

        <div className="flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:mb-[45px]">
          <h1 className="font-syne text-[30px] md:text-[48px] text-primary font-normal capitalize">News</h1>
          <span className="pl-4 mt-1.5 font-sans text-[#545351] text-[18px]">相關報導</span>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center w-full h-[400px] pb-10"
        style={{ backgroundImage: `url(${NewsBg.src})` }}
      >
        <div className="flex flex-col justify-start item-center">
          {NEWS01.map((item) => (
            <div key={item.id}>
              <p
                className={`mx-[10px] md:mx-[50px] lg:mx-[100px] xl:mx-[125px] wide:mx-[220px] ${
                  item.id == 1 ? 'mt-[60px]' : ' mt-[10px]'
                } mb-[40px] text-primary text-[14px] md:text-[16px] font-semibold  ${
                  item.id == NEWS01.length ? ' border-b-[0px] -mb-[25px]' : ' border-b-[3px]'
                } border-[#fff] border-solid pb-[50px]`}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
