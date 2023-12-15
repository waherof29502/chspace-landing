'use client';
import { useState, useEffect,useRef  } from 'react';
import PortfolioCard from '../ui/portfolio-feature-card';
import { PORTFOLIO_PAGE_ITEMS, PORTFOLIO_FILTER_LISTS } from '@/src/constants';
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
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
          <div className="py-2 md:py-10 lg:py-20">
            {/* desktop filter button */}
            <div
              className={`hidden md:flex flex-row justify-center items-center text-primary font-serif mt-10 -mb-[40px] lg:mb-[100px] ${
                !top
                  ? 'fixed bg-white top-[60px] lg:top-[35px] 3xl:top-[90px] -left-[8px] h-20 w-full z-10 flex flex-row justify-center items-center py-4 px-2'
                  : ''
              }`}
            >
              {PORTFOLIO_FILTER_LISTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.category)}
                  className={`px-8 ${
                    item.id !== PORTFOLIO_FILTER_LISTS[PORTFOLIO_FILTER_LISTS.length - 1].id
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
              {PORTFOLIO_FILTER_LISTS.map((item) => (
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

            <div className="px-0 sm:px-[70px] md:px-10 lg:px-[200px] xl:px-[240px] 3xl:px-[150px] wide:px-20">
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
        </div>
      </section>
    </>
  );
}
