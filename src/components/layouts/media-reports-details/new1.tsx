import React from 'react';
import Image from 'next/image';
import IconFb from '@/public/svg/fb-solid.svg';
import IconIg from '@/public/svg/ig-solid.svg';
import OtherInfoCard from '@/src/components/ui/other-info-card';
import Link from 'next/link';
import { MEDIAREPORT } from '@/src/constants';

// 文章圖片 [０]為第一個
const MEDIACONTENTIMG = [
  '/images/news/1-1-1.png',
  '/images/news/1-1-2.png',
  '/images/news/1-1-3.png',
  '/images/news/1-1-4.png'
];

export default function New1() {
  return (
    <section className="relative overflow-hidden">
      <div className="mt-[150px] md:mt-[200px] lg:mt-[250px] py-2 flex justify-center w-full mx-auto ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-start px-10 lg:px-[150px] 3xl:px-[350px] pb-10 3xl:pb-[60px]">
            <h1 className="text-primary text-[1.125rem] md:text-[1.5rem] font-sansCjk tracking-[2.64px] font-semibold pb-4">
              文域設計總監謝鎮宇專訪：以文化創生為念，打造多面的空間體驗！
            </h1>
            <div className="flex flex-row">
              <span className="text-primary text-[0.875rem] font-sansCjk tracking-[0.48px] pr-3 border-[#C4C4C4] border-r-[1.5px] border-solid">
                影音專區
              </span>
              <span className="text-primary text-[1rem] font-syne tracking-[0.48px] px-3">2021/07</span>
              <span className="text-primary text-[0.875rem] font-sansCjk tracking-[0.48px] px-3">來源：T客邦</span>
            </div>
          </div>
          {/* 內文開始 */}
          <div className="px-10 lg:px-[180px] 3xl:px-[420px] py-5">
            <Image
              className="mx-auto rounded-md wider:w-[1920px]"
              src={MEDIACONTENTIMG[0]}
              alt="MEDIAREPORT-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6">
                專精文化商業領域其來有自，打造「款待」使用者的設計理念
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.82px] md:tracking-[1.54px] leading-[29px] md:leading-[33px]">
                在空間設計專案的執行過程，除了設計師對於場域空間與主題的掌握，更需要深入了解業主的需求，尤其是商務空間會有運營坪效、活動企劃…等需求，更需要設計師主動挖掘相當資訊，了解業主對於經營的意圖與策略，才能透過設計帶出符合需求的內容展現，而這樣溝通的過程，也可能遇到業主並未有具體想法，甚至是沒有考量到原本空間的先天條件與限制，也因此更需要有經驗的設計師協助引導，才能獲得更為明確的需求資訊。謝鎮宇也特別強調，所謂設計師的引導，並非是拘泥於設計美學的教育，而是從空間的使用者角度出發，讓業主了解「為何要這樣設計」。
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={MEDIACONTENTIMG[1]}
              alt="MEDIAREPORT-content"
              width={1090}
              height={647}
            />
            <p className="text-[#1B1B1B] text-[0.875rem] font-sansCjk tracking-[1.54px] leading-[33px] text-center pt-5 pb-1">
              文域設計的辦公空間十分簡約，純白的牆面與淡雅色彩的裝潢風格讓人感到心情十分平靜。
            </p>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={MEDIACONTENTIMG[2]}
              alt="MEDIAREPORT-content"
              width={1090}
              height={647}
            />
            <p className="text-primary text-[0.875rem] font-sansCjk font-normal tracking-[1.54px] text-center leading-[29px] md:leading-[33px] pt-5 pb-1">
              謝鎮宇在工作中少不了使用印表機將資料、設計圖面列印出來，也格外重視列印品質。
            </p>
            <div className="flex flex-col justify-start">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6 whitespace-pre">
                列印設備選擇，「品質」絕對是先決條件
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.82px] md:tracking-[1.54px] leading-[29px] md:leading-[33px]">
                對於現今的設計師來說，各類型數位工具的出現，更能提升從概念建立到圖面繪製過程的效率，透過應用工具的協助，也能讓重複性的工作負擔降低，除了辦公室內使用桌機、筆電來完成設計工作，隨身的智慧型手機、平板電腦也成為謝鎮宇日常工作中不可或缺的利器。
                相較於公共空間，住宅類型的專案更要求設計師對於業主的「陪伴」，透過了解客戶的生活方式來進一步歸納其喜好與需求，同時也要建立業主對於設計師的信任感，才能真正做到設計成品的風格與功能性能都契合業主需求。
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={MEDIACONTENTIMG[3]}
              alt="MEDIAREPORT-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start py-10">
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.54px] leading-[33px]">
                對於列印設備選擇的「先決條件」，謝鎮宇毫不猶豫的回答到「列印品質」絕對是最重要的考量因素，因為在出設計圖時，往往圖面上會有許多較為細膩且複雜的構成，也有不少標準規格尺寸與註解的細小文字，若是印表機的列印品質不到位，印出來的成品可能會完全無法使用。而過去謝鎮宇在為公司挑選印表機時，通常都會很直接地選擇一張設計圖檔案，直接比較不同印表機的列印成品來決定該買哪一台。
              </p>
            </div>
            <div className="flex justify-start items-center">
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.54px] leading-[33px]">
                媒體報導連結：
                <a
                  href="https://www.techbang.com/posts/102712-interview-with-xie-zhenyu-design-feat-canon-gx4070"
                  target="_blank"
                  className="hover:text-primary font-syne cursor-pointer"
                >
                  https://www.techbang.com/posts/102712-interview-with-xie-zhenyu-design-feat-canon-gx4070
                </a>
              </p>
            </div>

            <div className="text-primary flex flex-row justify-center md:justify-end items-center pt-[50px] mt-10 md:mt-10 mr-3 wider:mr-[10px]">
              <Link href={'https://www.facebook.com/CHSPACE'} target="_blank" rel="noopener noreferrer">
                <IconFb className="text-[34px] mr-2 text-[#7A7A7A] hover:text-[#4e4e4e]" />
              </Link>
              <Link href={' https://www.instagram.com/chs_interior/'} target="_blank" rel="noopener noreferrer">
                <IconIg className="text-[34px] text-[#7A7A7A] hover:text-[#4e4e4e]" />
              </Link>
            </div>
            {/* content end */}
          </div>
          <div className="w-[90%] xl:w-[85%] 3xl:w-[80%] mt-[50px] border-t-[1.5px] border-[#D6D6D6] border-solid mx-auto" />
          <div className="px-10  2md:px-[3.5rem] 3md:px-[4.25rem] xl:px-[8.5rem] xxxl:px-[10rem] 3xl:px-[11rem] wide:px-[14rem] wider:px-[15rem] flex flex-row md:flex-row justify-start items-center -mb-10 3md:-mb-8 xl:mb-[1rem]">
            <h2 className="py-10 xl:pt-[5rem] xl:pb-[10px] font-syne text-[1.875rem] md:text-[3rem] text-primary font-normal capitalize">
              Other Reports
            </h2>
            <span className="pl-4 xl:pt-[5rem] xl:pb-[10px] mt-1.5 font-san text-[#545351] text-[1rem] md:text-[1.125rem]">
              其他報導
            </span>
          </div>
        </div>
      </div>
      <div className="px-5 2md:px-12 lg:px-[3.75rem] xl:px-[4rem] xxxl:px-[5rem] 3xl:px-[6rem] wide:px-[4rem] wider:px-[3rem] mb-[2rem]">
        <OtherInfoCard OtherInfo={MEDIAREPORT} />
      </div>
    </section>
  );
}
