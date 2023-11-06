"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import HeroBg from '@/public/images/hero-image.png';
import Carousel from '@/src/components/carousel'
import img1 from '@/public/images/hero-image.png'
import img2 from '@/public/images/hero-image.png'
import img3 from '@/public/images/hero-image.png'
import Lightbox from '../../lightbox';
// export const SLIDERS =[
//   {id:1,src:'/images/2-1.png',title:'三重陳宅｜寧靜致遠',location:'新北市 三重',link:'/portfolio/work01',category:'住宅設計'},
//   {id:2,src:'/images/2-2.png',title:'內湖羅宅｜漫光滋養',location:'台北市 內湖',link:'/portfolio/work02',category:'住宅設計'},
//   {id:3,src:'/images/2-3.png',title:'陽明山李宅｜山嵐藝廊',location:'台北市 陽明山',link:'/portfolio/work03',category:'住宅設計'},
//   {id:4,src:'/images/2-4.png',title:'台灣室內設計週｜漢斯希爾展館',location:'南港展覽館1館',link:'/portfolio/work04',category:'書店設計'},
//   {id:5,src:'/images/2-5.png',title:'金灣閱潮書店｜閱潮咖啡區',location:'廣州珠海 金灣市',link:'/portfolio/work05',category:'書店設計'},
//   {id:6,src:'/images/2-6.png',title:'心之所憩｜生活的模樣',location:'台北市 中山區',link:'/portfolio/work06',category:'住宅設計'},

// ]
export const SLIDERS =[
  {id:1,src:'/images/hero-image.png'},
  {id:2,src:'/images/hero-image.png'},
  {id:3,src:'/images/hero-image.png'},
  {id:4,src:'/images/hero-image.png'},
]
export const SLIDER =[
  '/images/hero-image.png',
'/images/hero-image.png',
'/images/hero-image.png',
'/images/hero-image.png',
]
export default function Work01() {
  const [curr, setCurr] = useState(0)



  return (
    <section className='relative'>

       <div className="max-w-9xl min-h-screen p-2 ">
        <Carousel autoSlide={false} setCurr={setCurr} curr={curr} >
           {SLIDERS.map((item)=>(
                <Image key={item.id} src={item.src} width={1920} height={1500} alt="12"  />
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
        <div className='flex justify-end mt-12 mr-[250px]'>
                <div className='flex items-center justify-center gap-2'>
                    {[1,2,3].map((_, i) => (
                        <div key={i} className={`transition-all w-[18px] h-[18px] bg-black rounded-full  ${curr === i ? "p-0.5 bg-gray-700" : "bg-opacity-20"}`} />
                    ))}
                </div>
            </div>
   
  
    </section>
  );
}
