'use client';
import Image from 'next/image';
import { MEDIAREPORT, NEWS_FILTER_LISTS } from '@/src/constants';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('影音專區');
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 280 ? setTop(false) : window.pageYOffset > 600 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const filterProjects = () => {
    if (activeCategory == '媒體專訪') {
      return MEDIAREPORT.filter((item) => item.tag === '媒體專訪');
    } else {
      return MEDIAREPORT;
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="py-4 xl:p-20 w-full">
            {/* desktop filter button */}
            <div
              className={`hidden md:flex flex-row justify-center items-center text-primary font-serif mt-10 -mb-[40px] lg:mb-[100px] ${
                !top
                  ? 'fixed bg-white top-[60px] lg:top-[35px] 3xl:top-[90px] -left-[8px] h-20 w-full z-10 flex flex-row justify-center items-center py-4 px-2'
                  : ''
              }`}
            >
              {NEWS_FILTER_LISTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.category)}
                  className={`px-8 ${
                    item.id !== NEWS_FILTER_LISTS[NEWS_FILTER_LISTS.length - 1].id
                      ? 'md:border-r-[1px] border-[#9c9c9c] border-solid mb-5 md:mb-0'
                      : 'mb-5 md:mb-0'
                  }`}
                >
                  <span className={`tracking-wider font-sansCjk text-[18px] md:text-[12px] lg:text-[16px] wide:text-[22px]  ${activeCategory ===item.category ?"text-primary" :'text-[#888]'}  text-[#888] font-semibold hover:text-primary`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
            {/* mobile filter button */}
            <div
              className={`md:hidden grid grid-cols-2 gap-y-5 font-serif text-primary my-5 items-start ${
                !top
                  ? 'fixed bg-white top-[70px] -left-[2px] h-fit w-full z-10 py-3'
                  : ''
              }`}
            >
              {NEWS_FILTER_LISTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.category)}
                 >
                  <span className={`tracking-wider font-sansCjk text-[18px] md:text-[12px] lg:text-[16px] wide:text-[22px]  ${activeCategory ===item.category ?"text-primary" :'text-[#888]'}  text-[#888] font-semibold hover:text-primary`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 w-auto gap-10  ">
            {filterProjects().map((item) => (
              <div
                className="flex flex-col justify-start items-start px-12 md:px-5 xl:px-10 wider:px-[140px]"
                key={item.id}
              >
                <Link href={`/news/1`}>
                  <Image src={item.src} alt="image" width={495} height={325} className="wider:w-[1440px]" />
                  <div className="flex justify-between w-full px-1 ">
                    <span className="font-sansCjk text-[14px] text-primary tracking-[0.42px] pt-5">{item.tag}</span>
                    <span className="font-syne text-[14px] text-primary tracking-[0.42px] pt-5">{item.date}</span>
                  </div>
                  <p className="font-sansCjk text-[16px] font-semibold text-primary tracking-[1.76px] pt-6">
                    {item.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
