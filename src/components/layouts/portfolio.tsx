'use client';
import { useState } from 'react';
import PortfolioCard from '../ui/portfolio-feature-card';
import { PORTFOLIO_PAGE_ITEMS, PORTFOLIO_FILTER_LISTS } from '@/src/constants';
import Link from 'next/link';
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filterProjects = () => {
    if (activeCategory == '住宅設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '住宅設計');
    } else if (activeCategory === '辦公空間') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '辦公空間');
    } else if (activeCategory === '文化場域') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '文化場域');
    } else if (activeCategory === '商空設計') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '商空設計');
    } else if (activeCategory === '展場規劃') {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === '展場規劃');
    } else {
      return PORTFOLIO_PAGE_ITEMS;
    }
  };
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-2 3md:py-10 lg:py-20">
            {/* desktop filter button */}
            <div
              className={`hidden md:flex flex-row justify-center items-center text-primary font-serif mt-10 -mb-[20px] 3md:mt-0 3md:mb-10 `}
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
                  {/* <Link href={item.path}> */}
                  <span
                    className={`tracking-wider text-[18px] md:text-[12px] lg:text-[16px] wide:text-[22px]  ${
                      activeCategory === item.category ? 'text-primary' : 'text-[#888]'
                    }  text-[#888] font-semibold hover:text-primary`}
                  >
                    {item.title}
                  </span>
                  {/* </Link> */}
                </button>
              ))}
            </div>
            {/* mobile filter button */}
            <div
              className={`md:hidden grid grid-cols-2 gap-y-5 font-serif text-primary my-5 items-start ${
                !top ? 'fixed bg-white top-[70px] -left-[2px] h-[20vh] w-full z-10 py-3' : ''
              }`}
            >
              {PORTFOLIO_FILTER_LISTS.map((item) => (
                <button key={item.id}>
                  <Link href={item.path}>
                    <span
                      className={`tracking-wider text-[1.125rem] md:text-[12px]  ${
                        activeCategory === item.category ? 'text-primary' : 'text-[#888]'
                      }  text-[#888] font-semibold hover:text-primary`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </button>
              ))}
            </div>
            <div
              className={`px-0 ${
                !top ? 'mt-[170px] md:mt-20 3md:mt-8 xl:mt-16' : ''
              } sm:px-[5.625rem] md:px-10 3md:px-[1.875rem] xl:px-[15rem] 3xl:px-[9.375rem] wide:px-20 min-h-[20vh]`}
            >
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
