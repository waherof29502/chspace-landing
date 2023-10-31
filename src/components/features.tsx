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
    {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className='relative -mt-4 pr-10 pl-10'>  
        <div className='flex flex-wrap items-center justify-between'>
          <div className='shrink-0 w-[852px] h-[568] ml-[69px] mt-[169px]'>
            <Image
              className='rounded-lg'
              src={Image01}
              layout='responsive'
              objectFit='flex'
              objectPosition='center'
              alt='img01'
            />
          </div>
            {/* Text Area 1 */}
          <div className='flex flex-1 inset-0 justify-center mt-10 items-center p-2'>
            <div className='text-[16px] text-gray-600 font-medium [writing-mode:vertical-lr] leading-loose'>
              <span className='block' style={{ letterSpacing: '0.5em' }}>提升生活美學及品味</span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>藉由場域精神傳達文化藝術</span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>
                建構於室內外的空間場域
              </span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>
                從設計概念發展到落實
              </span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>
                以自然為師，搭配天然素材的使用
              </span>
              <div className="text-[18px] text-[#1b1b1b] font-normal ml-[51px]">
              <span className='block' style={{ letterSpacing: '0.5em' }}>秉持著以 文化創生 為設計理念</span>
              </div>
            </div>
          </div>
          <div className='shrink-0 ml-[10px] -mt-[350px]'>
            <Image
              className='rounded-lg'
              src={Image02}
              width={269}
              height='422'
              alt='img02'
            />
          </div>
            <div className='shrink-0 ml-[1220px] -mt-[130px]'>
            <Image
              className='rounded-lg'
              src={Image03}
              width={518}
              height='179'
              alt='img01'
            />
          </div>
        </div>
      </div>
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className='relative -mt-4 pr-10 pl-10'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='shrink-0 w-[852px] h-[568] ml-[69px] mt-[169px]'>
            <Image
              className='rounded-lg'
              src={Image01}
              layout='responsive'
              objectFit='flex'
              objectPosition='center'
              alt='img01'
            />
          </div>
            {/* Text Area 1 */}
          <div className='flex flex-1 inset-0 justify-center mt-10 items-center p-2'>
            <div className='text-[16px] text-gray-600 font-medium [writing-mode:vertical-lr] leading-loose'>
              <span className='block' style={{ letterSpacing: '0.5em' }}>提升生活美學及品味</span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>藉由場域精神傳達文化藝術</span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>
                建構於室內外的空間場域
              </span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>
                從設計概念發展到落實
              </span>
              <span className='block' style={{ letterSpacing: '0.5em' }}>
                以自然為師，搭配天然素材的使用
              </span>
              <div className="text-[18px] text-[#1b1b1b] font-normal ml-[51px]">
              <span className='block' style={{ letterSpacing: '0.5em' }}>秉持著以 文化創生 為設計理念</span>
              </div>
            </div>
          </div>
          <div className='shrink-0 ml-[10px] -mt-[350px]'>
            <Image
              className='rounded-lg'
              src={Image02}
              width={269}
              height='422'
              alt='img02'
            />
          </div>
            <div className='shrink-0 ml-[1220px] -mt-[130px]'>
            <Image
              className='rounded-lg'
              src={Image03}
              width={518}
              height='179'
              alt='img01'
            />
          </div>
        </div>
      </div>
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-12 md:pt-20'>
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <p className='mb-4 text-black [writing-mode:vertical-lr]'>
              秉持著以 文化創生 為設計理念 <br />
            </p>
            <div className='text-sm text-gray-600 [writing-mode:vertical-lr] leading-loose'>
              <span className='block' style={{ letterSpacing: '0.1em' }}>
                提升生活美學及品味
              </span>
              <span className='block' style={{ letterSpacing: '0.1em' }}>
                藉由場域精神傳達文化藝術
              </span>
              <span className='block' style={{ letterSpacing: '0.1em' }}>
                建構於室內外的空間場域
              </span>
              <span className='block' style={{ letterSpacing: '0.1em' }}>
                從設計概念發展到落實
              </span>
              <span className='block' style={{ letterSpacing: '0.1em' }}>
                以自然為師，搭配天然素材的使用
              </span>
            </div>
          </div>

          {/* Section content */}
          <div className='md:grid md:grid-cols-12 md:gap-6'>
            {/* Content */}
            <div
              className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
              data-aos='fade-right'
            >
              <div className='md:pr-4 lg:pr-12 xl:pr-16 mb-8'>
                <h3 className='h3 mb-3'>This is apple</h3>
                <p className='text-xl text-gray-600'>123123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
