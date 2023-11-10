"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/src/components/carousel'
import Lightbox from '../../lightbox';
import ProjectCard from './project-feature-card';
import NewsBg from '@/public/images/bg-2.png';
import ProjectOtherCard from './project-others-card'
import {PORTFOLIO_PAGE_ITEMS,SLIDERS01,OTHERSPROJECT01,NEWS01} from '@/src/constants'
import IconFb from '@/public/svg/fb-solid.svg'
import IconIg from '@/public/svg/ig-solid.svg'

export default function project01() {
  const [curr, setCurr] = useState(0)
  return (
    <section className='relative'>

       <div className="max-w-8xl min-h-screen p-2 ">
        <Carousel autoSlide={false} setCurr={setCurr} curr={curr} >
           {SLIDERS01.map((item)=>(
                <Image key={item.id} src={item.src} width={1920} height="1270" alt="12" className='2xl:h-[1280px]' />
           ))}
        </Carousel>
         {/* {showLightbox && (
        <Lightbox
          images={SLIDER}
          selectedImage={selectedImage}
          closeLightbox={() => setShowLightbox(false)}
        />
      )} */}

      </div>
        <div className='flex justify-end -mt-[410px] md:-mt-[40px] lg:mt-[80px] mr-[140px] md:mr-[100px]'>
                <div className='flex items-center justify-center gap-2 z-10'>
                    {SLIDERS01.map((_, i) => (
                        <div key={i} className={` w-[10px] h-[10px] md:w-[18px] md:h-[18px] bg-black rounded-full  ${curr === i ? "p-0.5 bg-[#545351]" : "bg-opacity-20"}`} 
                        onClick={()=> setCurr(i)}
                        />
                    ))}
                </div>
            </div>
                    
             <div className='relative max-w-8xl md:-mt-[90px] mx-auto md:mx-[20px] lg:mx-[20px] xl:mx-[100px] 3xl:mx-[120px] wide:mx-[210px] px-4 sm:px-6 '>
  
            {PORTFOLIO_PAGE_ITEMS.slice(0, 1).map((item)=>(
              <ProjectCard
              key={item.id} 
              imageSrc={item.src}
              title={item.title}
              location={item.location}
              link={item.link}
              category ={item.category}
              desc={item.desc}
              awards={item.awards}
              />
            ))}
             {SLIDERS01.map((item)=>(
              <div key={item.id} className='mt-10'>
                <Image  src={item.src} width={1920} height="1270" alt="12" className="rounded-xl"/>
                </div>
           ))}
             <div className='text-primary flex flex-row justify-end items-center mt-10 md:mt-10 md:mb-[100px] '>
                <Link href={"https://www.facebook.com/CHSPACE"} target="_blank" rel="noopener noreferrer">
                <IconFb className='text-[34px] mr-2' />
                </Link>
                <Link href={" https://www.instagram.com/chs_interior/"} target="_blank" rel="noopener noreferrer">
                <IconIg className='text-[34px]'/>
               </Link>
            </div>
            <div className='flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:mb-[45px]  border-t-[1.5px] border-[#D6D6D6] border-solid'>
              <h1 className='py-10 xl:py-[100px] font-syne text-[30px] md:text-[48px] text-primary font-normal capitalize'>
               recommend
              </h1>
              <span className='pl-4 mt-1.5 font-san text-[#545351] text-[18px]'>
                其他作品
              </span>
            </div>
          <div className="flex overflow-x-auto mt-4 items-start no-scrollbar w-auto md:max-w-2xl lg:max-w-none ">
           {OTHERSPROJECT01.map((item) => (
            <ProjectOtherCard 
                  key={item.id}
                  dataIndex= {item.id}
                  src={item.src}  
                  title={item.title}
                  desc={item.desc}
                />
                   ))}
            </div>
          
             <div className='flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:mb-[45px]'>
              <h1 className='font-syne text-[30px] md:text-[48px] text-primary font-normal capitalize'>
               News
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                相關報導
              </span>
            </div>
           
        {/* <div className='flex flex-col justify-start items-start h-auto'>
          {NEWS01.map((item) => (<div key={item.id}>
            <p className='mb-[20px] text-primary text-[14px] md:text-[16px] font-semibold text-center hover:text-[#4b4b4b]'>{item.content}</p></div>))}
          </div> */}
        </div>
        <div className='relative bg-cover bg-center w-full h-auto pb-10' style={{ backgroundImage: `url(${NewsBg.src})` }}>
        <div className='flex flex-col justify-start item-center'>
          {NEWS01.map((item) => (<div key={item.id}>
            <p className='m-auto md:mx-[50px] lg:mx-[100px] 2xl:mx-[220px] my-[60px] mb-0 text-primary text-[14px] md:text-[16px] font-semibold'>{item.content}</p></div>))}
        </div>
        </div>
    
           
     
           
    </section>
  );
}
