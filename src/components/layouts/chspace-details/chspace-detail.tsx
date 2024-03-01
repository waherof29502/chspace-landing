import React from 'react';
import Image from 'next/image';
import IconFb from '@/public/svg/fb-solid.svg';
import IconIg from '@/public/svg/ig-solid.svg';
import OtherInfoCard from '@/src/components/ui/other-info-card';
import Link from 'next/link';
import { CHSPACE, OTHERCONTENTS01 } from '@/src/constants';
import { easeIn, motion } from 'framer-motion';
const CONTENTIMG = [
  '/images/chspace/1-1-1.png',
  '/images/chspace/1-1-2.png',
  '/images/chspace/1-1-3.png',
  '/images/chspace/1-1-4.png',
  '/images/chspace/1-1-5.png',
  '/images/chspace/1-1-6.png',
  '/images/chspace/1-1-7.png',
  '/images/chspace/1-1-8.png',
  '/images/chspace/1-1-9.png',
  '/images/chspace/1-1-10.png',
  '/images/chspace/1-1-11.png'
];

// content: {
//       title: ['1. 作品背景與環境介紹', '2. 整建維護面向', '3. 公共性說明', '4. 經營或使用情況', '5. 故事分享'],
//       desc: [
//         '隱身於台北市的南京東路三段一帶，鬧中取靜的街坊巷弄，將都市的繁華與舊式民宅的沉靜分隔開來，形成歷史、當代涇渭分明又和諧統一的別樣區域，這裡除了純樸的住宅，也吸引許多咖啡廳業者、特色餐館及書店進駐。本案為崢嶸半世紀的老宅，歷史脈絡淵遠流長，其經過一代又一代的經營業者，不僅遺留下歲月的痕跡，亦承載著無數動人的創業故事。而每一次的改造整修、承讓接手都極具意義，不同時期的人文符號、精神氣質的積澱，都讓老建築的靈魂更加飽滿。基於前身為攤販結合服飾店的複合型零售空間，我們審慎分析了地域環境的獨特性，以及與鄰里周邊的共生關係，透過低限度的整修，保留老宅獨具韻味的時間刻痕，同時將之改造成設計公司孵化創意的基地。',
//         '本案原先門口雜亂擁擠，導致採光受限、空氣不流通。為提升室內空氣品質達到自然通風的效果，我們重新整理門庭，保留原始斑駁的鑿面紅磚牆，並種植薜荔作為前院的景觀綠衣，在都會生活裡創造屬於工作環境的小綠洲。此外，在老屋翻修過程中，我們盡可能修舊如舊，以低限、不過度加工的手法，採用生鐵、夾板、水泥粉光等材質，呈現老宅原有的面貌和韻味。新增的材料也不使用強力膠或多於的塗裝，降低了許多不必要的資源浪費，也符合物盡其用的觀念。針對原大樓管道間漏水問題，我們以天花橋架解決新增水電管線及排水問題，簡化空間中多於的干擾，同時於幹管底端新增集水盤，將漏水導入老屋排水系統，賦予清爽乾淨的全新環境。考量空間型態由零售商店轉為設計共享工作室，室內透過前後貫通的開闊格局、大面玻璃窗景，使場域的每一隅角皆深受陽光的眷顧，也特別於後陽台新增紗窗，來降低1F蚊蟲對工作環境的干擾。內部彈性自由的隔間、造型獨特的吧台設計，以及洋溢人文氣息的書牆，不僅滿足多元化的商務需求，也強化了品牌獨特的美學基因與價值。',
//         '本案擁有難能可貴的庭院，先前作為攤販的販賣區及工作區，埋沒了天生良好的景觀視野，多餘的贅飾和招牌布條，也遮掩建築原始的結構之美。對此，我們將原先封閉的自用庭院，轉化為半開放式的社區客廳，建立起與鄰里、周圍環境的共生關係。寬敞開闊的空地巧用植栽牆、盆景、花圃等自然綠意，圍塑生機蓬勃的院落，藉由悠閒寫意的氛圍，招引野貓、小鳥、昆蟲等駐足停留，溫柔地開啟親近自然的途徑。循著永續環保的理念，不抹除上一段故事的痕跡，而是選擇保留斑駁的舊木門、台式老窗花，以及施工使用後的木梯、剩餘電纜線作為造景的裝飾，透過「疊加」的方式連通過去與未來，展現「時光」的意義。而畫面頹美的質感，薈萃出時間陳釀的人文溫度，毋須刻意塑造，足以吸引人深入探索。',
//         '我們提出「共享設計工作室」的想法，邀請幾位設計工作者一同加入進駐，藉由共享的概念解決空間機能重複的問題，例如會議室、材料室、事務區及茶水間等，如此一來，既能滿足工作室的機能需求，同時也能大幅降低營運成本、提升空間的使用率。此外，剝離辦公室制式的框架，伴隨著綠意與書香的舒心環境，以工作融於生活的理念，催生出全新的辦公體驗，我們期望讓員工在努力投入工作時，依然保持身心健康、每天充滿幸福感。而悠閒的庭院環境、愜意的書店氛圍，如此細膩有溫度的空間，促使了街坊鄰居前來交流互動，經由分享生活的美和感動，讓這股溫暖在社區間蔓延開來。',
//         '身為創意工作者，我們透過日常的設計工作訴說生活之美，並藉由藝術薈萃、創意加值的概念，傳遞出一則則精彩動人的故事。深知設計者的工作常態與環境，我們以自身使用經驗，去感染更多志同道合的夥伴朋友，針對老屋改建及辦公室裝修，並非只有大興土木的選項，在都會中如何與環境友善共生，更是值得我們不停思考的議題。藉由工作環境的改善，我們能深刻感受到四季的變化，植物的生長與凋零，昆蟲、鳥及貓的親近相處，這是我們過去在辦公大樓裡的工作環境所感受不到的樣貌，而這樣的工作環境轉變，對設計工作者本身來說是一種創意也是突破。'
//       ]
//     }
export default function ChspaceDetail() {
  return (
    <section className="relative overflow-hidden">
      <div className="mt-[150px] md:mt-[200px] lg:mt-[250px] py-2 flex justify-center w-full mx-auto ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-start px-10 lg:px-[150px] 3xl:px-[350px] pb-10 3xl:pb-[60px]">
            <h1 className="text-primary text-[1.125rem] md:text-[1.5rem] font-sansCjk tracking-[2.64px] font-semibold pb-4">
              文域生活2.0
            </h1>
            <div className="flex flex-row">
              <span className="text-primary text-[1rem] font-syne tracking-[0.48px] px-3">2021/11</span>
              <div className="relative left-16 bottom-3 h-px p-[0.5px] w-10 bg-[#C4C4C4] " />
            </div>
          </div>
          {/* 內文開始 */}
          <div className="px-10 lg:px-[180px] 3xl:px-[420px] py-5">
            <Image
              className="mx-auto rounded-md wider:w-[1920px]"
              src={CONTENTIMG[0]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6">
                1. 作品背景與環境介紹
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.82px] md:tracking-[1.54px] leading-[29px] md:leading-[33px]">
                隱身於台北市的南京東路三段一帶，鬧中取靜的街坊巷弄，將都市的繁華與舊式民宅的沉靜分隔開來，形成歷史、當代涇渭分明又和諧統一的別樣區域，這裡除了純樸的住宅，也吸引許多咖啡廳業者、特色餐館及書店進駐。本案為崢嶸半世紀的老宅，歷史脈絡淵遠流長，其經過一代又一代的經營業者，不僅遺留下歲月的痕跡，亦承載著無數動人的創業故事。而每一次的改造整修、承讓接手都極具意義，不同時期的人文符號、精神氣質的積澱，都讓老建築的靈魂更加飽滿。基於前身為攤販結合服飾店的複合型零售空間，我們審慎分析了地域環境的獨特性，以及與鄰里周邊的共生關係，透過低限度的整修，保留老宅獨具韻味的時間刻痕，同時將之改造成設計公司孵化創意的基地。
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[1]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[2]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6 whitespace-pre">
                2. 整建維護面向
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.82px] md:tracking-[1.54px] leading-[29px] md:leading-[33px]">
                本案原先門口雜亂擁擠，導致採光受限、空氣不流通。為提升室內空氣品質達到自然通風的效果，我們重新整理門庭，保留原始斑駁的鑿面紅磚牆，並種植薜荔作為前院的景觀綠衣，在都會生活裡創造屬於工作環境的小綠洲。此外，在老屋翻修過程中，我們盡可能修舊如舊，以低限、不過度加工的手法，採用生鐵、夾板、水泥粉光等材質，呈現老宅原有的面貌和韻味。新增的材料也不使用強力膠或多於的塗裝，降低了許多不必要的資源浪費，也符合物盡其用的觀念。針對原大樓管道間漏水問題，我們以天花橋架解決新增水電管線及排水問題，簡化空間中多於的干擾，同時於幹管底端新增集水盤，將漏水導入老屋排水系統，賦予清爽乾淨的全新環境。考量空間型態由零售商店轉為設計共享工作室，室內透過前後貫通的開闊格局、大面玻璃窗景，使場域的每一隅角皆深受陽光的眷顧，也特別於後陽台新增紗窗，來降低1F蚊蟲對工作環境的干擾。內部彈性自由的隔間、造型獨特的吧台設計，以及洋溢人文氣息的書牆，不僅滿足多元化的商務需求，也強化了品牌獨特的美學基因與價值。
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[3]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[4]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start py-10">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6 whitespace-pre">
                3. 公共性說明
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.54px] leading-[33px]">
                本案擁有難能可貴的庭院，先前作為攤販的販賣區及工作區，埋沒了天生良好的景觀視野，多餘的贅飾和招牌布條，也遮掩建築原始的結構之美。對此，我們將原先封閉的自用庭院，轉化為半開放式的社區客廳，建立起與鄰里、周圍環境的共生關係。寬敞開闊的空地巧用植栽牆、盆景、花圃等自然綠意，圍塑生機蓬勃的院落，藉由悠閒寫意的氛圍，招引野貓、小鳥、昆蟲等駐足停留，溫柔地開啟親近自然的途徑。循著永續環保的理念，不抹除上一段故事的痕跡，而是選擇保留斑駁的舊木門、台式老窗花，以及施工使用後的木梯、剩餘電纜線作為造景的裝飾，透過「疊加」的方式連通過去與未來，展現「時光」的意義。而畫面頹美的質感，薈萃出時間陳釀的人文溫度，毋須刻意塑造，足以吸引人深入探索。
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[5]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[6]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start py-10">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6 whitespace-pre">
                4. 經營或使用情況
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.54px] leading-[33px]">
                我們提出「共享設計工作室」的想法，邀請幾位設計工作者一同加入進駐，藉由共享的概念解決空間機能重複的問題，例如會議室、材料室、事務區及茶水間等，如此一來，既能滿足工作室的機能需求，同時也能大幅降低營運成本、提升空間的使用率。此外，剝離辦公室制式的框架，伴隨著綠意與書香的舒心環境，以工作融於生活的理念，催生出全新的辦公體驗，我們期望讓員工在努力投入工作時，依然保持身心健康、每天充滿幸福感。而悠閒的庭院環境、愜意的書店氛圍，如此細膩有溫度的空間，促使了街坊鄰居前來交流互動，經由分享生活的美和感動，讓這股溫暖在社區間蔓延開來。{' '}
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[7]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[8]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <div className="flex flex-col justify-start py-10">
              <h2 className="text-primary text-[1rem] md:text-[1.25rem] font-sansCjk font-medium tracking-[2.2px] pt-10 pb-3 md:pb-6 whitespace-pre">
                5. 故事分享
              </h2>
              <p className="text-[#464646] text-[0.875rem] font-sansCjk tracking-[1.54px] leading-[33px]">
                身為創意工作者，我們透過日常的設計工作訴說生活之美，並藉由藝術薈萃、創意加值的概念，傳遞出一則則精彩動人的故事。深知設計者的工作常態與環境，我們以自身使用經驗，去感染更多志同道合的夥伴朋友，針對老屋改建及辦公室裝修，並非只有大興土木的選項，在都會中如何與環境友善共生，更是值得我們不停思考的議題。藉由工作環境的改善，我們能深刻感受到四季的變化，植物的生長與凋零，昆蟲、鳥及貓的親近相處，這是我們過去在辦公大樓裡的工作環境所感受不到的樣貌，而這樣的工作環境轉變，對設計工作者本身來說是一種創意也是突破。
              </p>
            </div>
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[9]}
              alt="chspace-content"
              width={1090}
              height={647}
            />
            <Image
              className="mx-auto rounded-md pt-10 wider:w-[1920px]"
              src={CONTENTIMG[10]}
              alt="chspace-content"
              width={1090}
              height={647}
            />

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
          <div className="px-10 2ss:px-5 2md:px-[3.5rem] 3md:px-[4.25rem] xl:px-[8.5rem] xxxl:px-[10rem] 3xl:px-[11rem] wide:px-[14rem] wider:px-[15rem] flex flex-row md:flex-row justify-start items-center -mb-10 3md:-mb-8 xl:mb-[1rem]">
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
        <OtherInfoCard OtherInfo={OTHERCONTENTS01} />
      </div>
    </section>
  );
}
