'use client';
import { useState } from 'react';
import { SERVICESFILTER, PROCESSINFO } from '@/src/constants';
import NewsBg from '@/public/images/services/bg-1.png';
import Link from 'next/link';
import CustomBtn from '@/src/components/ui/custom-btn';
import Image from 'next/image';
import {easeIn, motion} from 'framer-motion';

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('住宅設計');
  const filterProjects = () => {
    if (activeCategory == '住宅設計') {
      return SERVICESFILTER.filter((item) => item.category === '住宅設計');
    } else if (activeCategory == '辦公空間') {
      return SERVICESFILTER.filter((item) => item.category === '辦公空間');
    } else if (activeCategory == '文化場域') {
      return SERVICESFILTER.filter((item) => item.category === '文化場域');
    } else if (activeCategory == '商空設計') {
      return SERVICESFILTER.filter((item) => item.category === '商空設計');
    } else if (activeCategory == '展場規劃') {
      return SERVICESFILTER.filter((item) => item.category === '展場規劃');
    } else {
      return SERVICESFILTER;
    }
  };
  return (
    <section className="relative overflow-hidden">
      <div className="min-h-screen flex flex-col w-full justify-start mx-auto">
        <div className="min-h-fit w-full flex justify-center">
          <div className={`flex flex-row justify-center items-center font-serif mt-5 md:mt-10 `}>
            {/* service desktop content */}
            <div className="hidden lg:flex lg:pl-10 xl:pl-12 3xl:pl-0 xl:justify-center pt-[80px]">
              <div className="w-1/2 xl:w-1/3 h-auto object-cover">
                {filterProjects().map((item) => (
                <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 3 }}
                    >
                      <Image
                        src={item.src}
                        width={500}
                        height={550}
                        alt={item.title}
                        className={"rounded-xl"}
                      />
                    </motion.div>))}
              </div>
              <div className="w-full xl:w-1/2 flex flex-col justify-start pl-10 wide:pl-0 3xl:pr-10 flex-wrap">
                <div className="flex flex-row md:justify-start items-center px-0 xl:px-5 xl:pt-4">
                  <h2 className="font-syne text-[1.875rem] md:text-[3rem] text-primary font-normal capitalize">Service</h2>
                  <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[1rem] xl:text-[1.125rem]">服務項目</span>
                </div>
                <div className="flex flex-row items-center xl:pl-3 pt-5 py-[1.25rem] xl:py-[3.125rem] 3xl:py-[4rem]">
                  {SERVICESFILTER.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveCategory(item.category)}
                      className={`pr-8 2lg:pr-16 xl:px-3 3xl:pl-2 3xl:pr-10 wide:pr-14 wider:pr-[100px]`}
                    >
                      <div className="flex flex-col justify-center items-center group">
                        <div className={`text-[1.875rem] xl:text-[2.5rem] ${activeCategory=== item.category ?'text-[#1B1B1B]' :'text-[#D9D9D9]'} group-hover:text-[#1B1B1B]  pb-4`}>
                          {item.icon}
                        </div>
                        <span className="tracking-[3px] font-sansCjk text-[1rem] xxxl:text-[1.25rem] text-primary font-medium whitespace-pre">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                <span className="font-sansCjk leading-[42px] text-[#1B1B1B] tracking-[1.76px] font-medium text-[14px] xxxl:text-[1rem] xl:pl-[20px] lg:pr-10 xl:pr-1 wide:pr-[120px]">
                  我們專注於高端商業的綜合服務，包括商業空間升級以打造城市文化地標、文化空間企劃與設計、文化內容策劃等，透過淬鏈、創意、多元的設計概念及操作手法，以最純粹的方式，表現品牌價值及故事。
                </span>
                <Link href={'/portfolio'} className="transition-all ml-auto lg:pr-4 3xl:pr-16 -mt-10 lg:-mt-8 xl:-mt-4">
                  <CustomBtn title={'觀看作品'} fontType={'font-syne'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* service mobile content */}
        <div className="lg:hidden flex flex-col w-full justify-center">
          <div className="flex flex-row md:justify-start items-center px-7 md:px-10 pt-4 pb-10">
            <h2 className="font-syne text-[1.875rem] md:text-[3rem] text-primary font-normal capitalize">Service</h2>
            <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[1rem] md:text-[1.125rem]">服務項目</span>
          </div>
          <div className="flex flex-row w-full">
            <div className="w-2/3 h-[500px] pl-5 sm:pl-10 sm:pr-0">
              {filterProjects().map((item) => (
                <motion.div
                 key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 3 }}
                  className="bg-cover bg-center w-full h-[500px] pb-10 rounded-xl"
                  style={{ backgroundImage: `url(${item.src})` }}
                ></motion.div>
              ))}
            </div>
            <div className="w-1/3 mx-auto py-2">
              <div className="flex flex-col justify-between h-full">
                {SERVICESFILTER.map((item) => (
                  <button key={item.id} onClick={() => setActiveCategory(item.category)} className="px-1">
                    <div className="flex flex-col justify-center items-center group">
                      <div className={`text-[2.5rem] group-hover:text-[#1B1B1B] pb-4 ${activeCategory=== item.category ?'text-[#1B1B1B]' :'text-[#D9D9D9]'}`}>{item.icon}</div>
                      <span className="tracking-[2.4px] font-sansCjk text-[1rem] text-primary font-medium whitespace-pre">
                        {item.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <span className="font-sansCjk leading-[42px] text-[#1B1B1B] tracking-[1.76px] font-medium text-[1rem] pt-[80px] px-6 md:px-[2.5rem]">
            我們專注於高端商業的綜合服務，包括商業空間升級以打造城市文化地標、文化空間企劃與設計、文化內容策劃等，透過淬鏈、創意、多元的設計概念及操作手法，以最純粹的方式，表現品牌價值及故事。
          </span>
          <Link href={'/portfolio'} className="transition-all ml-auto -mt-4 ">
            <CustomBtn title={'觀看作品'} fontType={'font-syne'} />
          </Link>
        </div>
          {/* process section */}
        <div className="px-7 md:px-10 xl:px-[160px] wider:pl-[340px] py-20 sm:py-10 xl:py-[200px]">
          <div className="flex flex-row md:justify-start items-center ">
            <h2 className="font-syne text-[1.875rem] md:text-[3rem] text-primary font-normal capitalize">Process</h2>
            <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[1rem] md:text-[1.125rem]">服務流程</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[200px] items-center">
            {/* 手機版整段內容 */}
            <ul className="md:hidden">
              {PROCESSINFO.map((item, index) => (
                <li className="relative flex gap-4 mt-[40px] items-center" key={item.id}>
                  <div className="flex justify-center items-center bg-[#F3F3F3] rounded-full w-[5rem] h-[5rem] z-10">
                    <p className="text-primary font-syne tracking-[0.54px] text-[1rem] lg:text-[1.125rem]">Step{item.id}</p>
                  </div>
                  {index !== PROCESSINFO.slice(0, 8).length - 1 ? (
                    <div className="before:absolute before:z-0 before:left-[40px] before:h-full before:w-[2px] before:bg-[#F3F3F3]" />
                  ) : (
                    <div className="before:absolute before:z-0 before:left-[40px] before:h-full before:w-[2px]" />
                  )}
                  <div className="flex-col justify-start text-[#464646] font-sansCjk w-2/3 pt-5">
                    <p className="font-semibold text-[14px] lg:text-[1.25rem] tracking-[3px] py-2">{item.title}</p>
                    <p className="text-[12px] lg:text-[1rem] tracking-[1.76px] py-1">{item.desc}</p>
                    {/* <span className='flex py-2 text-[12px]'>{item.contact}</span> */}
                    <div className="md:flex lg:hidden flex flex-row py-2">
                      <span className="text-[8px] xs:text-[10px]">
                        <a href="tel:+886-2-27386876">{item.contact?.slice(0, 20)}</a>
                      </span>
                      <span className="text-[8px] xs:text-[10px] pl-1">{item.contact?.slice(20, 40)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* desktop 左邊內容 */}
            <ul className="hidden md:grid xl:pr-[10rem]">
              {PROCESSINFO.slice(0, 4).map((item, index) => (
                <li
                  className="relative flex gap-4 xxxl:gap-8 md:pt-[95px] lg:pt-[85px] 3xl:pt-[70px] items-center"
                  key={item.id}
                >
                  <div className="flex justify-center items-center bg-[#F3F3F3] rounded-full w-[100px] h-[100px] z-10">
                    <p className="text-primary font-syne tracking-[0.54px] text-[15px] lg:text-[18px]">Step{item.id}</p>
                  </div>
                  {index !== PROCESSINFO.slice(0, 4).length - 1 ? (
                    <div className="before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px] before:bg-[#F3F3F3]" />
                  ) : (
                    <div className="before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px]"/>
                  )}
                  <div className="flex-col justify-start text-[#464646] font-sansCjk w-2/3 lg:whitespace-pre">
                    <p className="font-semibold text-[0.875rem] lg:text-[1.25rem] tracking-[3px] py-2">{item.title}</p>
                    <p className="text-[0.75rem] lg:text-[1rem] tracking-[1.76px] py-1">{item.desc}</p>
                    {/* <span className='flex py-2 text-[12px]'>{item.contact}</span> */}
                    <div className="md:flex flex-row py-2">
                      <span className="text-[0.625rem] lg:text-[0.75rem] xl:text-[1rem] ">
                        <a href="tel:+886-2-27386876">{item.contact?.slice(0, 20)}</a>
                      </span>
                      <span className="text-[0.625rem] lg:text-[0.75rem] xl:text-[1rem] pl-1">{item.contact?.slice(20, 40)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="hidden md:grid">
              {PROCESSINFO.slice(4, 8).map((item, index) => (
                <li
                  className="relative flex gap-4 xxxl:gap-8 md:pt-[95px] lg:pt-[85px] 3xl:pt-[70px] items-center"
                  key={item.id}
                >
                  <div className="flex justify-center items-center bg-[#F3F3F3] rounded-full w-[100px] h-[100px] z-10">
                    <p className="text-primary font-syne tracking-[0.54px] text-[15px] lg:text-[18px]">Step{item.id}</p>
                  </div>
                  {index !== PROCESSINFO.slice(4, 8).length - 1 ? (
                    <div className="before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px] before:bg-[#F3F3F3]" />
                  ) : (
                    <div className="before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px]" />
                  )}
                  <div className="flex-col justify-start text-[#464646] font-sansCjk w-2/3">
                    <p className="font-semibold text-[0.875rem] lg:text-[1.25rem] tracking-[3px] py-2">{item.title}</p>
                    <p className="text-[0.75rem] lg:text-[1rem] tracking-[1.76px] py-1">{item.desc}</p>
                    <span className="hidden xl:flex py-2 text-[12px]">{item.contact}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center w-full h-[531px] pb-10"
        style={{ backgroundImage: `url(${NewsBg.src})` }}
      >
        <div className="flex flex-col md:justify-center lg:pl-[70px] h-full md:w-[60%] 2md:w-1/2 px-7 md:px-0 md:ml-auto ">
          <div className="flex flex-row md:justify-start items-center pb-8 pt-[50px] md:pt-0">
            <h2 className="font-syne text-[1.875rem] md:text-[3rem] tracking-[1.44px] text-primary font-normal capitalize">
              Charging plan
            </h2>
            <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[1rem] md:text-[1.125rem]">收費方案</span>
          </div>
          <div className="hidden md:flex flex-col w-2/3">
            <span className="text-primary text-[16px] tracking-[1.76px] py-2">
              我們將為您提供適合您需求的「最佳成本建議」。
            </span>
            <span className="text-primary text-[16px] tracking-[1.76px] py-2">
              我們相信僅靠價格並不能反映我們服務的價值和滿意度。
            </span>
            <span className="text-primary text-[16px] tracking-[1.76px] py-2">
              在聽取您的詢問後，我們將為您提供設計及施工建議等成本的估算。
            </span>
          </div>
          <span className="md:hidden w-full text-primary text-[16px] leading-[35px] tracking-[2.08px] mx-auto">
            我們將為您提供適合您需求的「最佳成本建議」。 我們相信僅靠價格並不能反映我們服務的價值和滿意度。
            在聽取您的詢問後，我們將為您提供設計及施工建議等成本的估算。
          </span>
        </div>
      </div>
    </section>
  );
}
