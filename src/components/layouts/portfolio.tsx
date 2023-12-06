'use client';
import { useState, useEffect,useRef  } from 'react';
import PortfolioCard from '../ui/portfolio-feature-card';
import { PORTFOLIO_PAGE_ITEMS, PORTFOLIO_FILTER_LISTS } from '@/src/constants';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [top, setTop] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


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
    if (activeCategory == '住宅設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '住宅設計');
    } else if (activeCategory === '辦公室設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '辦公室設計');
    } else if (activeCategory === '文化場域設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '文化場域設計');
    } else if (activeCategory === '商空設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '商空設計');
    } else if (activeCategory === '展場設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '展場設計');
    } else {
      return PORTFOLIO_PAGE_ITEMS;
    }
  };
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-2 lg:py-20">
            <div
              className={`text-primary grid grid-cols-2  md:flex md:flex-row justify-center items-center font-serif mt-10 md:mt-10 md:-mb-[40px] lg:mb-[100px] ${
                !top
                  ? 'fixed bg-white top-[60px] md:top-[110px] -left-[2px] md:-left-[8px] h-[250px] md:h-20 w-full z-10 flex flex-row justify-center items-center py-4 px-2'
                  : ''
              }`}
            >
              {PORTFOLIO_FILTER_LISTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.category)}
                  className={`px-8 ${
                    item.id !== PORTFOLIO_FILTER_LISTS[PORTFOLIO_FILTER_LISTS.length - 1].id
                      ? 'md:border-r-[1px] border-[#9c9c9c] border-solid mb-10 md:mb-0'
                      : 'mb-10 md:mb-0'
                  }`}
                >
                  <span className="tracking-wider font-sansCjk text-[18px] md:text-[12px] lg:text-[22px] text-[#888] font-semibold hover:text-primary">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {filterProjects().map((item) => (
              <PortfolioCard
                key={item.id}
                imageSrc={item.src}
                title={item.title}
                location={item.location}
                link={item.link}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
