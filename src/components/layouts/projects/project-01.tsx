"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Carousel from '@/src/components/carousel'
import Lightbox from '../../lightbox';
import ProjectCard from './project-feature-card';
import ProjectOtherCard from './project-others-card'
import {PORTFOLIO_PAGE_ITEMS} from '@/src/constants'
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

export default function project01() {
  const [curr, setCurr] = useState(0)



  return (
    <section className='relative'>

       <div className="max-w-9xl min-h-screen p-2 ">
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
                    
             <div className='relative max-w-7xl md:-mt-[90px] mx-auto  px-4 sm:px-6'>
  
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
          <div className="flex overflow-x-auto mt-4 items-start no-scrollbar w-auto md:max-w-2xl lg:max-w-none">
           {SLIDERS.map((item) => (
            <ProjectOtherCard 
                  key={item.id}
                  dataIndex= {item.id}
                  src={item.src}  
                />
                   ))}
                 </div>
            
            <div className='text-primary flex flex-row justify-center items-center mt-10 md:mt-10 mb-[100px] '>
            
                1
                  <span className="tracking-wider text-[22px] text-[#888] font-semibold hover:text-primary">
                 1
                  </span>
               
            
            </div>
           </div>
    </section>
  );
}
