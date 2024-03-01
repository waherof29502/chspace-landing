'use client';
import Image from 'next/image';
import { MEDIAREPORT, NEWS_FILTER_LISTS } from '@/src/constants';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { easeIn, motion } from 'framer-motion';
export default function MediaReport() {
  const [activeCategory, setActiveCategory] = useState('影音專區');
  const [top, setTop] = useState<boolean>(true);
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 300 ? setTop(false) : window.pageYOffset > 600 ? setTop(false) : setTop(true);
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
  const fadeInAnimationVariants = {
    // bottom to up
    initial: {
      opacity: 0,
      x: 0,
      y: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        motion: easeIn,
        delay: 0.15 * index
      }
    })
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="py-2 3md:px-12 xl:p-12 wide:p-20 w-full">
          {/* desktop filter button */}
          <div
            className={`hidden md:flex flex-row justify-center items-center text-primary font-serif mt-10 mb-[40px] lg:mb-[4rem] transition duration-400 ease-in-out ${
              !top
                ? 'fixed bg-white top-[3rem] 3md:top-[6vh] xl:top-[4vh] 3xl:top-[6vh] wide:top-[8vh] wider:top-[7vh] -left-[8px] md:h-18 xl:h-20 w-full z-10 flex flex-row justify-center items-center py-4 px-2 ease-in'
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
                <span
                  className={`tracking-wider font-sansCjk text-[1.125rem] md:text-[0.75rem] lg:text-[1rem] wide:text-[1.375rem] ${
                    activeCategory === item.category ? 'text-primary' : 'text-[#888]'
                  }  text-[#888] font-semibold hover:text-primary`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          {/* mobile filter button */}
          <div
            className={`md:hidden grid grid-cols-2 gap-y-5 font-serif text-primary my-5 items-start ${
              !top ? 'fixed bg-white top-[5rem] -left-[2px] h-[6vh] w-full z-10 py-3' : ''
            }`}
          >
            {NEWS_FILTER_LISTS.map((item) => (
              <button key={item.id} onClick={() => setActiveCategory(item.category)}>
                <span
                  className={`tracking-wider font-sansCjk text-[1.125rem] md:text-[0.75rem]  ${
                    activeCategory === item.category ? 'text-primary' : 'text-[#888]'
                  }  text-[#888] font-medium md:font-semibold hover:text-primary`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 w-auto gap-y-20">
            {filterProjects().map((item, index) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={index}
                className="flex flex-col justify-center items-center md:justify-start md:items-start px-4 sm:px-16 md:px-2 wide:px-5 wider:px-10"
                key={item.id}
              >
                <Link href={`media-reports/new1`}>
                  <Image src={item.src} alt="image" width={495} height={325} className="wide:w-[1440px]" />
                  <div className="3md:pl-0 pr-1 3md:pr-4 3xl:pr-6 wider:pr-6">
                    <div className="flex justify-between w-full ">
                      <span className="font-sansCjk text-[0.875rem] text-[#464646] tracking-[0.42px] pt-5">
                        {item.tag}
                      </span>
                      <span className="font-syne text-[0.875rem] text-[#464646] tracking-[0.42px] pt-5">
                        {item.date}
                      </span>
                    </div>
                    <p className="font-sansCjk text-[1rem] font-medium md:font-semibold text-primary tracking-[1.76px] pt-6">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
