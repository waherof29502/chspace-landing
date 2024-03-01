'use client';
import { TEAMIMAGE, ANNUALEVENTS, AWARDRECORDS } from '@/src/constants';
import Image from 'next/image';
import NewsBg from '@/public/images/bg-2.png';
import Image01 from '@/public/images/about/1-3.png';
import Image02 from '@/public/images/about/1-2.png';
import Image03 from '@/public/images/about/1-4.png';
import Image04 from '@/public/images/about/1-1.png';
import Image05 from '@/public/images/about/1-5.png';
import Image06 from '@/public/images/about/2-1.png';
import Image07 from '@/public/images/about/2-2.png';
import Link from 'next/link';
import Logo from '@/public/images/logo-2.png';
import { easeIn, motion } from 'framer-motion';

import { IconPlay } from '@/public/svg';
export default function About() {
  const fadeInAnimationVariants = {
    // bottom to up
    initial: {
      opacity: 0,
      x: 0,
      y: 100
    },
    initial2: {
      opacity: 0,
      x: 100,
      y: 0
    },
    // up to bottom
    initial3: {
      opacity: 0,
      x: 0,
      y: -200
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        motion: easeIn,
        delay: 0.25 * index
      }
    })
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative w-[90%] 3xl:w-[80%] mx-auto">
          <div className={`w-full mx-auto flex flex-col xl:grid xl:grid-cols-2 `}>
            <div className="pt-10 flex justify-center mb-0 xl:mb-10 3xl:mb-20 mt-5 xl:mt-[2.5rem] 3xl:mt-[6.25rem]">
              <motion.div
                className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-primary w-full lg:w-[90%] "
                variants={fadeInAnimationVariants}
                initial="initial2"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={0}
              >
                <h2 className="text-[1rem] lg:text-[1.25rem] 3xl:text-[1.5rem] font-medium font-sansCjk tracking-[2.08px] md:tracking-[2.4px]">
                  文域設計創立於2017年，深耕文化場域
                </h2>
                <p className="text-[#464646] text-[0.875rem] 3xl:text-[1rem] font-medium font-sansCjk tracking-[1.82px] md:tracking-[1.76px] leading-[2.25rem] 3xl:leading-[39px] px-2 md:px-4 3md:pl-0 xl:pr-[6.25rem] py-5 md:pt-10 md:pb-0 3xl:py-20">
                  以”文化創生”為核心理念，致力於文化、藝術和商業的有機融合，建構室內外的空間場域，藉由場域精神傳達文化價值，提升生活美學及品味。
                  <br />
                  我們專注於高端商業的綜合服務，包括商業空間升級以打造城市文化地標、文化空間企劃與設計、文化內容策劃等，透過淬鏈、創意、多元的設計概念及操作手法，以最純粹的方式，表現品牌價值及故事。
                </p>
                <Link href="/services" className="transition-all sm:ml-auto xl:ml-0 z-20">
                  <button className="flex mx-12 ml-[125px] xs:ml-[150px] md:ml-0 my-[10px] md:my-0 py-5 md:py-[50px] transition-all ">
                    <div className="group flex w-[210px] items-center justify-between ">
                      <p
                        className={`text-primary translate-x-0 font-syne text-[1rem] font-normal tracking-[1.48px] transition-all  group-hover:translate-x-[2.25rem] ease-linear duration-800`}
                      >
                        more services
                      </p>
                      <div className="relative w-[3rem]  h-[1px] bg-primary transform  group-hover:translate-x-2 duration-500" />
                      <div className="relative -ml-[3.125rem] rounded-full border-[1px] border-primary border-solid w-8 h-8 ease-linear group-hover:bg-black duration-500" />
                      <div className="absolute w-[1.25rem] opacity-0 group-hover:opacity-100 h-[1px] bg-blue-200 transform translate-x-[178px] duration-500" />
                    </div>
                  </button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false
              }}
              custom={0}
            >
              <Image
                className="w-full mx-auto mb-0 md:mb-20 mt-10 xl:mt-[8rem] 3xl:mt-[200px] rounded-md"
                src={Image04}
                alt="about-chsapce"
                width={804}
                height={497}
              />
            </motion.div>
          </div>
          {/* Section 以設計閱讀世界 mobile */}
          <div className="lg:hidden relative pr-10 pl-10">
            <div className="flex items-center justify-center min-h-[65vh] md:min-h-[90vh] -mt-[3rem] md:-mt-[12rem]">
              <motion.div
                className="shrink-0 w-full md:w-full -left-[3rem] sm:-left-[8rem] md:left-[180px] mt-20 sm:mt-0 md:mt-[1.25rem] mb-[200px] sm:mb-0 relative z-10 "
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={1}
              >
                <Image className="rounded-lg" src={Image01} width={573} height="383" alt="img01" />
              </motion.div>
              {/* 右上角圖片 */}
              <motion.div
                className="flex shrink-0  w-1/2 md:w-2/3 ml-0 md:p-10 md:ml-[280px] left-[1.25rem] sm:-left-[3rem] mb-auto relative z-10"
                variants={fadeInAnimationVariants}
                initial="initial2"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={2}
              >
                <Image className="rounded-lg" src={Image02} width={336} height="233" alt="img02" />
              </motion.div>
              <motion.div
                className="flex shrink-0 w-1/2 md:w-2/3 lg:w-auto -left-[10px] md:-left-[260px]  sm:top-[180px] relative z-10"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={2}
              >
                <Image className="rounded-lg" src={Image03} width={263} height="307" alt="img01" />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center -mt-[150px] sm:-mt-[100px]">
            <motion.div
              className="lg:hidden flex flex-col w-full items-center pb-[70px]"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false
              }}
              custom={1}
            >
              <div className="relative left-0 right-1 bottom-10 w-px p-[0.5px] h-10 bg-[#9C9C9C] transform translate-y-1/2"></div>
              <div className="text-[1.125rem] text-[#4B4646] font-medium font-sansCjk [writing-mode:vertical-lr] leading-[2.5rem]">
                <span className="block tracking-[1.25rem]">世界</span>
                <span className="block tracking-[1.25rem]">閱讀</span>
                <span className="block tracking-[1.25rem]">
                  以設計<span className="absolute mr-3">，</span>
                </span>
              </div>
              <div className="text-[18px] text-[#1b1b1b] font-normal mt-10">
                <Image className="rounded-lg" src={Logo} width={110} height={110} alt="logo" />
              </div>
            </motion.div>
            <motion.div
              className="lg:hidden flex justify-center items-center"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false
              }}
              custom={0}
            >
              <IconPlay className="absolute text-[2rem] cursor-pointer text-white hover:text-white/70" />
              <Image className="rounded-lg lg:hidden" src={Image05} width={904} height="510" alt="img05" />
            </motion.div>
          </div>
          {/* Section 以設計閱讀世界  desktop*/}
          <div className="relative pr-10 pl-10 pb-[40px]">
            {/* 左側圖片 */}
            <div className="hidden lg:flex items-center justify-center min-h-max mb-[200px] wider:mb-[180px] mt-[180px] lg:mt-[120px] xl:mt-[6.25rem] wide:mt-[9rem] wider:mt-[7rem] ">
              <motion.div
                className="shrink-0 md:w-[43.75rem] xl:w-[80%] 2xl:w-[60%] md:mt-[1.25rem] relative z-10"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={1}
              >
                <Image className="rounded-lg" src={Image01} width={573} height="383" alt="img01" />
              </motion.div>
              {/* 右上角圖片 */}
              <motion.div
                className="flex shrink-0 ml-[280px] md:left-[50px] 3md:-left-[120px] 2xl:left-[30px] -top-[250px]  2xl:-top-[330px] relative z-10"
                variants={fadeInAnimationVariants}
                initial="initial2"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={2}
              >
                <Image className="rounded-lg" src={Image02} width={336} height="233" alt="img02" />
              </motion.div>
              {/* 右下角圖片 */}
              <motion.div
                className="flex shrink-0 w-2/3 lg:w-auto -left-[260px] 2xl:-left-[100px] top-[160px] md:top-[200px] relative z-10"
                variants={fadeInAnimationVariants}
                initial="initial2"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={3}
              >
                <Image className="rounded-lg" src={Image03} width={263} height="307" alt="img01" />
              </motion.div>
              <motion.div
                className="flex flex-col inset-0 justify-center w-full mt-10 items-center absolute z-20"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={1}
              >
                <div className="relative left-0 right-1 bottom-10 w-px p-[0.5px] h-10 bg-gray-500 transform translate-y-1/2"></div>
                <div className="text-[24px] wider:text-[24px] text-gray-600 font-medium font-sansCjk [writing-mode:vertical-lr] leading-[60px]">
                  <span className="block tracking-[20px]">世界</span>
                  <span className="block tracking-[20px]">閱讀</span>
                  <span className="block relative tracking-[20px]">
                    以設計
                  </span>
                </div>
                <div className="text-[18px] wider:text-[24px] text-[#1b1b1b] font-normal mt-10">
                  <Image className="rounded-lg" src={Logo} width={110} height={110} alt="logo" />
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="hidden lg:flex justify-center items-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false
            }}
            custom={0}
          >
            <IconPlay className="absolute text-[5.5rem] cursor-pointer text-white hover:text-white/70" />
            <Image className="rounded-lg" src={Image05} width={904} height="510" alt="img05" />
          </motion.div>
        </div>
        {/* {section end} */}

        <div
          className="relative bg-fit w-full h-auto lg:h-[991px] mt-10 3md:mt-[7.5rem]"
          style={{ backgroundImage: `url(${NewsBg.src})` }}
        >
          <div className="flex flex-col justify-start item-center w-[80%] mx-auto py-[4rem] lg:py-12">
            <div className="flex flex-row md:justify-start items-center py-0  lg:py-[50px]">
              <h2 className="font-syne text-[1.875rem] md:text-[3rem] tracking-[1.44px] text-primary font-normal capitalize">
                Design History
              </h2>
              <span className="pl-4 mt-1.5 text-[#545351] text-[1rem] lg:text-[18px]">設計歷程</span>
            </div>
            <div className="flex flex-col  md:grid md:grid-cols-2 md:gap-10">
              <div className="flex flex-col">
                <h3 className="text-primary text-[1rem] lg:text-[1.5rem] tracking-[2.64px] font-semibold py-8">
                  年度大事
                </h3>
                <div className="flex flex-col justify-start gap-y-12">
                  {ANNUALEVENTS.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row text-primary w-full items-start leading-[42px]"
                    >
                      <p className="text-[#464646] text-[14px] lg:text-[1.125rem] font-black tracking-[1.98px]">
                        {item.year}
                      </p>
                      <ul className="md:px-5 lg:px-10 text-[14px] lg:text-[1rem] leading-[2.625rem] tracking-[1.76px] font-medium font-sansCjk whitespace-pre">
                        {Array.isArray(item.desc) ? (
                          item.desc.map((achievement, index) => (
                            <li key={index} className="">
                              {achievement}
                            </li>
                          ))
                        ) : (
                          <li className="">{item.desc}</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-primary text-[1rem] lg:text-[1.5rem] tracking-[2.64px] font-semibold  py-8">
                  獲獎紀錄
                </h3>
                <div className="flex flex-col justify-start gap-y-12">
                  {AWARDRECORDS.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row text-primary w-full items-start leading-[42px]"
                    >
                      <p className="text-[#464646] text-[14px] lg:text-[1.125rem] font-black tracking-[1.98px]">
                        {item.year}
                      </p>
                      <ul className="md:px-5 lg:px-10 text-[14px] lg:text-[1rem] leading-[2.625rem] tracking-[1.76px] font-medium font-sansCjk whitespace-pre">
                        {Array.isArray(item.desc) ? (
                          item.desc.map((achievement, index) => (
                            <li key={index} className="">
                              {achievement}
                            </li>
                          ))
                        ) : (
                          <li className="">{item.desc}</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* team section  */}
        <div className="py-2 lg:py-20 w-[90%] md:w-[80%] wider:w-full mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row md:justify-start items-center pt-[50px] pb-[10px] lg:py-[50px]">
              <h2 className="font-syne text-[30px] md:text-[3rem] tracking-[1.44px] text-primary font-normal capitalize">
                Our Team
              </h2>
              <span className="pl-4 mt-1.5 text-[#545351] text-[1rem] lg:text-[1.125rem]">設計團隊</span>
            </div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false
              }}
              custom={0}
            >
              <Image className="rounded-lg" src={Image06} width={904} height="510" alt="img05" />
            </motion.div>
          </div>
          {/* 1280 尺寸以下的團體照位置 */}
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false
            }}
            custom={0}
            className="xl:hidden flex justify-end w-2/3 lg:w-full ml-auto mt-[4rem] 3md:mt-10 -mr-[40px] md:-mr-[100px]"
          >
            <Image className="rounded-lg 3md:scale-75" src={Image07} width={546} height="364" alt="img05" />
          </motion.div>
          <div className="flex pb-8 xl:pb-[100px] pt-[4rem] xl:pt-20 wide:pt-[230px] w-full wider:w-[83%] justify-center items-center mx-auto 3md:-mt-20 xl:mt-[7rem] wide:mt-6 mb-10">
            {/* 老闆的圖和文 */}
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false
              }}
              custom={0}
              className="w-full 3xl:w-3/4 wide:w-2/3 flex flex-col md:grid md:grid-cols-2 3md:flex 3md:flex-row items-center 3md:items-start"
            >
              <Image
                src={TEAMIMAGE[0].src}
                width={392}
                height={540}
                alt={TEAMIMAGE[0].title}
                className="rounded-sm ml-0 px-12 md:pl-0 md:pr-9 lg:pr-6 2md:scale-95 3md:scale-75 xl:scale-95 xxxl:scale-100"
              />
              <div className="flex flex-col p-4 md:p-10 xxxl:p-20 items-center md:items-start">
                <div className="flex flex-row items-center 3md:pt-20 xl:pt-10">
                  <p className="text-primary tracking-[12.98px] text-[1.375rem] md:text-[1.125rem] font-medium font-sansCjk pt-4 [writing-mode:vertical-lr] ">
                    {TEAMIMAGE[0].title.slice(0, 3)}
                  </p>
                  <div className="flex flex-col pl-5">
                    <p className="text-primary font-serifNoto tracking-[1.98px] text-[1rem] md:text-[1.125rem] pt-4">
                      {TEAMIMAGE[0].title.slice(3, 10)}
                    </p>
                    <span className="text-primary font-normal tracking-[1.98px] text-[1rem] md:text-[1.125rem] pt-2 ">
                      {TEAMIMAGE[0].category}
                    </span>
                  </div>
                </div>
                <p className="text-[#464646] leading-[35px] tracking-[1.82px] md:tracking-[1.76px] text-[0.875rem] md:text-[1rem] pt-2 lg:pr-0  wider:pr-[300px]">
                  {TEAMIMAGE[0].desc}
                </p>
              </div>
            </motion.div>
            {/* 1280尺寸以上的團體照位置 */}
            <div className="hidden xl:block xl:w-1/3 wide:w-1/3 mb-auto -mt-[8rem] wide:-mt-[12rem] scale-150 3xl:scale-125 wide:scale-110 pr-0 xl:pr-10 xxxl:pr-12 3xl:pr-10 wide:pr-5">
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={0}
              >
                <Image className="rounded-lg" src={Image07} width={546} height="364" alt="img05" />
              </motion.div>
            </div>
          </div>
          {/* 員工團體照區塊 */}
          <div className="text-primary grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-16 wider:px-[12.5rem]">
            {TEAMIMAGE.slice(1, 11).map((item) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false
                }}
                custom={0}
                className="flex flex-col justify-center items-center pb-10"
                key={item.id}
              >
                <Image src={item.src} width={285} height={367} alt={item.title} className="rounded-sm" />
                <p className="text-primary tracking-[1.98px] text-[1rem] 3xl:text-[1.125rem] pt-10 md:pt-4 font-medium font-sansCjk">
                  {item.title}
                </p>
                <span className="text-primary tracking-[1.98px] text-[1rem]  3xl:text-[1.125rem] pt-2 font-medium font-sansCjk">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
