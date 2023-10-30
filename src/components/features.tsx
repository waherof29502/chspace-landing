'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import FeaturesBg from '@/public/images/features-bg.png';
import LogoBlack from '@/public/images/logo-black.png';

import FeaturesElement from '@/public/images/features-element.png';

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
      <div className='relative pt-1 pb-1'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='shrink-0 ml-[120px] mt-4'>
            <Image
              className='rounded-lg'
              src={LogoBlack}
              width={183}
              height='183'
              alt='logo'
            />
          </div>
          <div className='flex flex-1 justify-center mt-10 items-center'>
            <div className='text-sm text-gray-600 [writing-mode:vertical-lr] leading-loose'>
              <span className='block'>提升生活美學及品味</span>
              <span className='block'>藉由場域精神傳達文化藝術</span>
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
          <div className='shrink-0 ml-[30px] -mt-[50px]'>
            <Image
              className='rounded-lg'
              src={LogoBlack}
              width={183}
              height='183'
              alt='logo'
            />
          </div>
        </div>
      </div>
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-12 md:pt-20'>
          {/* Section header */}
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
