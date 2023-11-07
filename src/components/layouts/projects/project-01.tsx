"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Carousel from '@/src/components/carousel'
import Lightbox from '../../lightbox';
import ProjectCard from './project-feature-card';
import NewsBg from '@/public/images/bg-2.png';
import ProjectOtherCard from './project-others-card'
import {PORTFOLIO_PAGE_ITEMS} from '@/src/constants'
import IconFb from '@/public/svg/fb-solid.svg'
import IconIg from '@/public/svg/ig-solid.svg'
import IconIn from '@/public/svg/in-solid.svg'
export const SLIDERS =[
  {id:1,src:'/images/work01/1-1.jpg'},
  {id:2,src:'/images/work01/1-2.jpg'},
  {id:3,src:'/images/work01/1-3.jpg'},
  {id:4,src:'/images/work01/1-4.jpg'},
  {id:5,src:'/images/work01/1-5.jpg'},
  {id:6,src:'/images/work01/1-6.jpg'},
  {id:7,src:'/images/work01/1-7.jpg'},
  {id:8,src:'/images/work01/1-8.jpg'},
]
const OTHERSPROJECT = [
  {id:1,src:'/images/work01/2-1.png', title:'台灣室內設計週｜漢斯希爾展館',desc:'南港展覽館1館'},
  {id:2,src:'/images/work01/2-2.png', title:'台灣室內設計週｜漢斯希爾展館',desc:'新竹高鐵旁'},
  {id:3,src:'/images/work01/2-3.png', title:'閱讀軌跡｜閱讀迷宮',desc:'浙江/紹興 鏡湖區'}
]
const NEWS = [
  {id:1,content:'【2022 iF獎設計】放緩生活步調享受日光、木質的洗禮'},
  {id:2,content:'「專訪」日日時光一起生活的初心！'},
  {id:3,content:'【SHOW AWARDS】文域設計 獲2022 年―書店 | 別墅 | 住宅 | 辦公空間―4 項IF 設計大獎'}
]
export default function project01() {
  const [curr, setCurr] = useState(0)



  return (
    <section className='relative'>

       <div className="max-w-8xl min-h-screen p-2 ">
        <Carousel autoSlide={false} setCurr={setCurr} curr={curr} >
           {SLIDERS.map((item)=>(
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
                    {SLIDERS.map((_, i) => (
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
             {SLIDERS.map((item)=>(
              <div key={item.id} className='mt-10'>
                <Image  src={item.src} width={1920} height="1270" alt="12" className="rounded-xl"/>
                </div>
           ))}
             <div className='text-primary flex flex-row justify-end items-center mt-10 md:mt-10 mb-[100px] '>
            
                <IconFb className='text-[34px] mr-2'/>
                <IconIn className='text-[34px] mr-2'/>
                <IconIg className='text-[34px]'/>
               
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
           {OTHERSPROJECT.map((item) => (
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
          {NEWS.map((item) => (<div key={item.id}>
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
