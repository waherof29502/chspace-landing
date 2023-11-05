'use client'
import PortfolioCard from './portfolio-card';
import { PORTFOLIO_ITEMS } from '../constants';
import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
export default function Portfolio() {
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
    <>
      <section className='relative overflow-hidden'>
        <div className='relative max-w-8xl mx-auto px-4 sm:px-6 2xl:px-[156px]'>
          <div className='py-2 md:py-20'>
            <div className='text-primary flex flex-col md:flex-row md:justify-start items-center mt-10 md:mt-0 mb-[60px] md:mb-0'>
              <h1 className='font-syne text-[48px] font-normal capitalize'>
                Portfolio
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                最新作品
              </span>
            </div>
            
            {PORTFOLIO_ITEMS.map((item)=>(
              <PortfolioCard
              key={item.id} 
              imageSrc={item.src}
              title={item.title}
              location={item.location}
              link={item.link}
              isImageLeft={item.isImageLeft}
              />
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}
