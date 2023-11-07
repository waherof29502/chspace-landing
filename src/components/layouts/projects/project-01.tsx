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
        <div className='flex justify-end -mt-[400px] md:-mt-[40px] lg:mt-[80px] mr-[100px]'>
                <div className='flex items-center justify-center gap-2'>
                    {SLIDERS01.map((_, i) => (
                        <div key={i} className={`transition-all w-[18px] h-[18px] bg-black rounded-full  ${curr === i ? "p-0.5 bg-gray-700" : "bg-opacity-20"}`} />
                    ))}
                </div>
            </div>
                    
             <div className='relative max-w-7xl md:-mt-[90px] mx-auto px-4 sm:px-6'>
  
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
             <div className='text-primary flex flex-row justify-end items-center mt-10 md:mt-10 mb-[100px] '>
                <Link href={"https://www.facebook.com/CHSPACE"} target="_blank" rel="noopener noreferrer">
                <IconFb className='text-[34px] mr-2' />
                </Link>
                <Link href={" https://www.instagram.com/chs_interior/"} target="_blank" rel="noopener noreferrer">
                <IconIg className='text-[34px]'/>
               </Link>
            </div>
            <div className='flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:mb-[45px]'>
              <h1 className='font-syne text-[48px] text-primary font-normal capitalize'>
               recommend
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                獲獎事蹟
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
              <h1 className='font-syne text-[48px] text-primary font-normal capitalize'>
               News
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                相關報導
              </span>
            </div>
        <div className='flex flex-col justify-start items-start h-auto'>
          {NEWS01.map((item) => (<div key={item.id}>
            <p className='mb-[20px] text-primary text-[24px] md:text-[16px] font-semibold text-center hover:text-[#4b4b4b]'>{item.content}</p></div>))}
        </div>
            
           </div>
{/*            
      <div className='relative'>
      <div className='w-full h-[408px] object-cover'>
        <Image
          className='rounded-lg'
          src={NewsBg}
          fill
          alt='News bg'
        />
        <div className='absolute inset-0 flex flex-col justify-evenly items-start '>
          {NEWS.map((item) => (<div key={item.id}>
            <p className='mx-[270px] my-[60px] mb-2 text-primary text-[24px] md:text-[16px] font-semibold text-center'>{item.content}</p></div>))}
        </div>
      </div> 
    </div>*/}
           
    </section>
  );
}
