'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Image01 from '@/public/images/1-1.jpg';
import Image02 from '@/public/images/1-2.png';
import Image03 from '@/public/images/1-3.png';
import Image04 from '@/public/images/1-4.png';
import Image05 from '@/public/images/1-5.png';
import Image06 from '@/public/images/1-6.png';
import Image07 from '@/public/images/1-7.jpg';
import Image08 from '@/public/images/1-8.jpg';
import Image09 from '@/public/images/1-9.jpg';
import Image10 from '@/public/images/1-10.jpg';
import Image11 from '@/public/images/1-11.jpg';
import Image12 from '@/public/images/1-12.jpg';
import Text from './text'


export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className='relative overflow-hidden'>
      {/* Section 1 */}
       {/* <div  className='transition-all'  data-aos="zoom-y-out" ref={tabs}>
      <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  > */}
      <div className='relative pr-10 pl-10'>
        <div className='flex items-center justify-center min-h-screen wider:min-h-max wider:mt-[220px] '>
          <div className='shrink-0 md:w-[700px] 2xl:w-[852px] -ml-[80px] mr-[10px] md:ml-[420px] 2xl:ml-[210px] md:mt-[19px] md:mr-[2px] 2xl:mr-[10px]  relative z-10'>
            <Image
              className='rounded-lg'
              src={Image01}
              width={852}
              height="568"
              alt='img01'
            />
          </div>
           <div className='flex shrink-0 ml-[280px] md:left-[50px] 2xl:left-[210px] -top-[250px] 2xl:-top-[330px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image02}
              width={269}
              height='422'
              alt='img02'
            />
          </div>
            <div className='flex shrink-0 -left-[260px] 2xl:-left-[150px] top-[160px] md:top-[230px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image03}
              width={518}
              height='179'
              alt='img01'
            />
          </div>
          <div className='flex inset-0 justify-center md:ml-[350px] 2xl:ml-[370px] items-center absolute z-20'>
           <Text/>
          </div>
         
        </div>
      </div>
      {/* </Transition> */}
    
      {/* Section 2 */}
      
       
      <div className='relative pr-10 pl-10 -mt-[20px] md:mt-[20px]'>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='shrink-0 w-[208px] ml-[2px] md:ml-[550px] -mt-[300px] md:-mt-[320px] md:mr-[20px] mr-[120px] 2xl:ml-[50px] 2xl:-mt-[490px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image04}
              width={208}
              height="260"
              alt='img01'
            />
          </div>
           <div className='flex w-[202px] md:w-[404px] shrink-0 ml-[1px] md:ml-[300px] -top-[100px] md:-top-[50px] 2xl:-top-[320px] 2xl:left-[200px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image05}
              width={404}
              height='605'
              alt='img02'
            />
          </div>
            <div className='flex shrink-0 -left-[200px] md:-left-[550px] top-[450px] md:top-[380px] 2xl:-left-[400px] 2xl:top-[120px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image09}
              width={356}
              height='536'
              alt='img01'
            />
          </div>
           <div className='flex shrink-0 -left-[170px] md:-left-[210px] -top-[170px] md:-top-[70px] 2xl:-left-[25px] 2xl:-top-[190px] relative z-8'>
            <Image
              className='rounded-lg'
              src={Image06}
              width={468}
              height='314'
              alt='img01'
            />
          </div>
          <div className='flex inset-0 justify-start ml-[80px] md:ml-[100px] lg:ml-[190px] xl:ml-[390px] 2xl:ml-[400px] md:-mt-[90px] wider:ml-[700px] wider:-mt-[180px] items-center absolute z-20'>
          <div className='text-[16px] wider:text-[22px] text-gray-600 font-medium [writing-mode:vertical-lr] leading-loose'>
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>為一個家的圓</span>
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>
               週而復始得以滿足
              </span>
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>
                深層的放鬆和自在的工作與休憩
              </span>
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>
               生活是圓潤
              </span>
            </div>
          </div>
        </div>
      </div>
     
       {/* Section 3*/}
        {/* <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  > */}
      <div className='relative pr-10 pl-10 -mt-[20px] md:mt-[120px] 2xl:-mt-[140px] mb-[50px]'>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='shrink-0 w-[262px] ml-[2px] mr-[120px] -mt-[300px] md:ml-[550px] md:-mt-[320px] md:mr-[20px] 2xl:ml-[280px] 2xl:-mt-[1200px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image07}
              width={262}
              height="427"
              alt='img01'
            />
          </div>
           <div className='flex w-[202px] md:w-[259px] h-[265px] shrink-0 ml-[1px] md:ml-[120px] -top-[100px] md:-top-[50px] 2xl:-top-[350px] 2xl:ml-[40px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image08}
              width={259}
              height="265"
              alt='img02'
            />
          </div>
            <div className='flex shrink-0 -left-[200px] md:-left-[400px] top-[450px] md:top-[280px] 2xl:top-[20px] relative z-10'>
            <Image
              className='rounded-lg'
              src={Image11}
              width={579}
              height='407'
              alt='img01'
            />
          </div>
           <div className='flex shrink-0 w-[289px] md:w-[579px] md:w-[579px]-left-[170px] md:-left-[2px] -top-[170px] md:-top-[70px] 2xl:left-[300px] 2xl:-top-[260px]  relative z-8'>
            <Image
              className='rounded-lg'
              src={Image10}
              width={579}
              height='467'
              alt='img01'
            />
          </div>
             <div className='flex shrink-0 -left-[270px] md:-left-[110px] top-[170px] md:top-[470px] 2xl:top-[300px] 2xl:-left-[620px] relative z-8'>
            <Image
              className='rounded-lg'
              src={Image12}
              width={513}
              height='127'
              alt='img01'
            />
          </div>
          <div className='flex inset-0 justify-end mr-[65px] -mt-[50px] md:mr-[100px] lg:mr-[240px] xl:mr-[450px] md:-mt-[90px] 2xl:mr-[700px] 2xl:-mt-[500px] wider:mr-[900px] wider:-mt-[800px]  items-center absolute z-20'>
          <div className='text-[16px] wider:text-[22px] text-gray-600 font-medium [writing-mode:vertical-lr] leading-loose'>
              <div className="relative left-4 right-1 bottom-10 w-px p-[0.5px] h-20 bg-gray-500 transform translate-y-1/2"></div>
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;莎士比亞
              </span>
              
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>
                智慧裡沒有書籍 ，就好像鳥兒沒有翅膀
              </span>
              <span className='block font-sansCjk' style={{ letterSpacing: '0.5em' }}>
               生活裡沒有書籍 ，就好像鳥兒沒有翅膀
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </Transition> */}
    {/* </div> */}
    </section>
  );
}
