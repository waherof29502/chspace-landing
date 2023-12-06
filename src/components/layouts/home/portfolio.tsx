'use client';
import PortfolioCard from './portfolio-card';
import { PORTFOLIO_ITEMS } from '@/src/constants';
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
      <section id="portfolio" className="scroll-mt-28 relative overflow-hidden">
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-[50px] xl:px-[100px] 2xl:px-[235px] ">
          <div className="py-2 md:py-20">
            <div className="text-primary flex flex-row md:flex-row justify-start items-center mt-10 md:mt-0 mb-[60px] md:mb-0 2xl:-ml-[75px] wide:ml-[15px] wider:ml-[30px]">
              <h2 className="text-[38px] font-syne md:text-[48px] font-normal capitalize">Portfolio</h2>
              <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[18px]">最新作品</span>
            </div>

            {PORTFOLIO_ITEMS.map((item) => (
              <div className="transition-all" key={item.id}>
                <div className="relative flex flex-col text-center lg:text-right">
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
                    <PortfolioCard
                      key={item.id}
                      imageSrc={item.src}
                      title={item.title}
                      location={item.location}
                      link={item.link}
                      isImageLeft={item.isImageLeft}
                    />
                  {/* </Transition> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
