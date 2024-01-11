'use client';
import PortfolioCard from './portfolio-card';
import { PORTFOLIO_ITEMS } from '@/src/constants';
export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="scroll-mt-28 relative overflow-hidden">
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-[50px] xl:px-[100px] 2xl:px-[235px] ">
          <div className="py-2 md:py-20">
            <div className="text-primary flex flex-row md:flex-row justify-start items-center mt-10 md:mt-0 mb-[60px] md:mb-0 2xl:-ml-[75px] wide:ml-[15px] wider:ml-[30px]">
              <h2 className="text-[2.375rem] font-syne md:text-[3rem] font-normal capitalize">Portfolio</h2>
              <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[18px]">最新作品</span>
            </div>

            {PORTFOLIO_ITEMS.map((item) => (
              <div className="transition-all" key={item.id}>
                <div className="relative flex flex-col text-center lg:text-right">
                    <PortfolioCard
                      key={item.id}
                      imageSrc={item.src}
                      title={item.title}
                      location={item.location}
                      link={item.link}
                      isImageLeft={item.isImageLeft}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
