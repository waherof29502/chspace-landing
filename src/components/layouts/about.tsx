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

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative w-[90%] md:w-[80%] mx-auto">
          <div className={`w-full mx-auto flex flex-col xl:grid xl:grid-cols-2 `}>
            <div className="pt-10 flex justify-center mb-0 xl:mb-20 xl:mt-[10px] 3xl:mt-[100px]">
              <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-primary w-full lg:w-[90%] ">
                <h2 className="text-[16px] md:text-[24px] font-sansCjk font-medium tracking-[2.08px] md:tracking-[2.4px]">
                  文域設計創立於2017年，深耕文化場域
                </h2>
                <p className="text-[#464646] text-[16px] font-sansCjk font-normal tracking-[1.76px] leading-[39px] xl:pr-[100px] py-5 md:pt-10 md:pb-0 xxxl:py-20">
                  以”文化創生”為核心理念，致力於文化、藝術和商業的有機融合，建構室內外的空間場域，藉由場域精神傳達文化價值，提升生活美學及品味。
                  我們專注於高端商業的綜合服務，包括商業空間升級以打造城市文化地標、文化空間企劃與設計、文化內容策劃等，透過淬鏈、創意、多元的設計概念及操作手法，以最純粹的方式，表現品牌價值及故事。
                </p>
                <Link href="/services" className="transition-all sm:ml-auto xl:ml-0 z-20">
                  <button className="flex mx-12 ml-[125px] xs:ml-[150px] md:ml-0 my-[10px] md:my-0 py-5 md:py-[50px] transition-all ">
                    <div className="group flex w-[210px] items-center justify-between ">
                      <p
                        className={`text-primary translate-x-13 font-syne text-[16px] tracking-[1.48px] transition-all  group-hover:translate-x-12 ease-linear duration-800`}
                      >
                        more service
                      </p>
                      <div className="relative w-[60px] group-hover:w-5 h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-800" />
                      <div className="relative -ml-[50px]  rounded-full border-[1.5px] border-primary border-solid w-8 h-8 ease-linear group-hover:bg-black duration-800" />
                      <div className="absolute w-0 group-hover:w-4 h-[1.2px] bg-blue-200 transform transition-transform group-hover:ease-linear group-hover:translate-x-[178px] duration-800" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <Image
              className="w-full mx-auto mb-0 md:mb-20 mt-10 xl:mt-[200px] rounded-md"
              src={Image04}
              alt="about-chsapce"
              width={804}
              height={497}
            />
          </div>
          {/* Section 以設計閱讀世界 mobile */}
          <div className="lg:hidden relative pr-10 pl-10">
            <div className="flex items-center justify-center min-h-screen -mt-[50px] md:-mt-[160px]">
              <div className="shrink-0 w-3/4 md:w-full left-[35px] sm:left-[180px] sm:mt-0 md:mt-[19px] mb-[200px] sm:mb-0 relative z-10 ">
                <Image className="rounded-lg" src={Image01} width={573} height="383" alt="img01" />
              </div>
              <div className="flex shrink-0 ml-0 sm:ml-0 w-1/2 md:w-2/3 md:ml-[280px] left-[20px] md:-left-[20px] 2xl:left-[30px] mb-auto relative z-10">
                <Image className="rounded-lg" src={Image02} width={336} height="233" alt="img02" />
              </div>
              <div className="flex shrink-0 w-1/2 md:w-2/3 lg:w-auto -left-[30px] md:-left-[260px]  sm:top-[180px] relative z-10">
                <Image className="rounded-lg" src={Image03} width={263} height="307" alt="img01" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center -mt-[250px] sm:-mt-[100px]">
            <div className="lg:hidden flex flex-col w-full items-center pb-[70px]">
              <div className="relative left-0 right-1 bottom-10 w-px p-[0.5px] h-10 bg-gray-500 transform translate-y-1/2"></div>
              <div className="text-[24px] wider:text-[24px] text-gray-600 font-medium [writing-mode:vertical-lr] leading-[60px]">
                <span className="block font-sansCjk tracking-[20px]">世界</span>
                <span className="block font-sansCjk tracking-[20px]">閱讀</span>
                <span className="block font-sansCjk tracking-[20px]">以設計，</span>
              </div>
              <div className="text-[18px] wider:text-[24px] text-[#1b1b1b] font-normal mt-10">
                <Image className="rounded-lg" src={Logo} width={110} height={110} alt="logo" />
              </div>
            </div>
            <Image className="rounded-lg lg:hidden" src={Image05} width={904} height="510" alt="img05" />
          </div>
          {/* Section 以設計閱讀世界  desktop*/}
          <div className="relative pr-10 pl-10 pb-[40px]">
            <div className="hidden lg:flex items-center justify-center min-h-screen wider:min-h-max -mt-[120px] wider:mt-[220px] ">
              <div className="shrink-0 md:w-[700px] 2xl:w-[60%] md:mt-[19px] relative z-10 ">
                <Image className="rounded-lg" src={Image01} width={573} height="383" alt="img01" />
              </div>
              <div className="flex shrink-0 ml-[280px] md:left-[50px] 2xl:left-[30px] -top-[250px] 2xl:-top-[330px] relative z-10">
                <Image className="rounded-lg" src={Image02} width={336} height="233" alt="img02" />
              </div>
              <div className="flex shrink-0 w-2/3 lg:w-auto -left-[260px] 2xl:-left-[100px] top-[160px] md:top-[200px] relative z-10">
                <Image className="rounded-lg" src={Image03} width={263} height="307" alt="img01" />
              </div>
              <div className="flex flex-col inset-0 justify-center w-full mt-[200px] items-center absolute z-20">
                <div className="relative left-0 right-1 bottom-10 w-px p-[0.5px] h-10 bg-gray-500 transform translate-y-1/2"></div>
                <div className="text-[24px] wider:text-[24px] text-gray-600 font-medium [writing-mode:vertical-lr] leading-[60px]">
                  <span className="block font-sansCjk tracking-[20px]">世界</span>
                  <span className="block font-sansCjk tracking-[20px]">閱讀</span>
                  <span className="block font-sansCjk tracking-[20px]">以設計，</span>
                </div>
                <div className="text-[18px] wider:text-[24px] text-[#1b1b1b] font-normal mt-10">
                  <Image className="rounded-lg" src={Logo} width={110} height={110} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center ">
            <Image className="rounded-lg" src={Image05} width={904} height="510" alt="img05" />
          </div>
        </div>
        {/* {section end} */}

        <div
          className="relative bg-fit w-full h-auto lg:h-[991px] mt-[120px]"
          style={{ backgroundImage: `url(${NewsBg.src})` }}
        >
          <div className="flex flex-col justify-start item-center w-[80%] mx-auto pb-10">
            <div className="flex flex-row md:justify-start items-center pt-[50px] pb-[10px] lg:py-[50px]">
              <h2 className="font-syne text-[30px] md:text-[48px] tracking-[1.44px] text-primary font-normal capitalize">
                Design History
              </h2>
              <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[16px] lg:text-[18px]">設計歷程</span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 ">
              <div className="flex flex-col">
                <h3 className="text-primary text-[16px] lg:text-[24px] tracking-[2.64px] font-sansCjk py-8">
                  年度大事
                </h3>
                <div className="flex flex-col justify-start gap-y-12 ">
                  {ANNUALEVENTS.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row text-primary w-full items-start leading-[42px]"
                    >
                      <p className="text-[#464646] text-[14px] lg:text-[18px] font-sansCjk font-extrabold tracking-[1.98px]">
                        {item.year}
                      </p>
                      <ul className="md:px-5 lg:px-10 text-[14px] lg:text-[18px]  whitespace-pre">
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
                <h3 className="text-primary text-[16px] lg:text-[24px] tracking-[2.64px] font-sansCjk py-8">
                  獲獎紀錄
                </h3>
                <div className="flex flex-col justify-start gap-y-12">
                  {AWARDRECORDS.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row text-primary w-full items-start leading-[42px]"
                    >
                      <p className="text-[#464646] text-[14px] lg:text-[18px] font-sansCjk font-extrabold tracking-[1.98px]">
                        {item.year}
                      </p>
                      <ul className="md:px-5 lg:px-10 text-[14px] lg:text-[18px] whitespace-pre">
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
            <div>
              <div className="flex flex-row md:justify-start items-center pt-[50px] pb-[10px] lg:py-[50px]">
                <h2 className="font-syne text-[30px] md:text-[48px] tracking-[1.44px] text-primary font-normal capitalize">
                  Our Team
                </h2>
                <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[16px] lg:text-[18px]">設計團隊</span>
              </div>
              <Image className="rounded-lg" src={Image06} width={904} height="510" alt="img05" />
            </div>
          </div>
          <div className="xl:hidden flex justify-end w-2/3 lg:w-full ml-auto mt-[40px] -mr-[40px] md:-mr-[100px]">
            <Image className="rounded-lg" src={Image07} width={546} height="364" alt="img05" />
          </div>

          <div className="flex pb-[100px] pt-20 wide:pt-[230px] w-full wider:w-[80%] justify-center items-center mx-auto">
            <div className="w-full wide:w-2/3 flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row items-center lg:items-start">
              <Image
                src={TEAMIMAGE[0].src}
                width={285}
                height={367}
                alt={TEAMIMAGE[0].title}
                className="rounded-sm lg:ml-14 xl:ml-0"
              />
              <div className="flex flex-col p-4 md:p-10 lg:p-20 items-center lg:items-start">
                <div className="flex flex-row items-center">
                  <p className="text-primary tracking-[12.98px] text-[18px] pt-4 [writing-mode:vertical-lr] ">
                    {TEAMIMAGE[0].title.slice(0, 3)}
                  </p>
                  <div className="flex flex-col pl-5">
                    <p className="text-primary tracking-[1.98px] text-[18px] pt-4">{TEAMIMAGE[0].title.slice(3, 10)}</p>
                    <span className="text-primary tracking-[1.98px] text-[18px] pt-2 ">{TEAMIMAGE[0].category}</span>
                  </div>
                </div>
                <p className="text-[#464646] leading-[35px] tracking-[1.76px] text-[16px] pt-2 lg:pr-[10px]  xxxl:pr-[20px] wider:pr-[300px]">
                  {TEAMIMAGE[0].desc}
                </p>
              </div>
            </div>
            <div className="hidden xl:block xl:w-1/3 wide:w-1/3 mb-auto wide:-mt-[400px]">
              <Image className="rounded-lg" src={Image07} width={546} height="364" alt="img05" />
            </div>
          </div>
          <div className="text-primary grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 ">
            {TEAMIMAGE.slice(1, 11).map((item) => (
              <div className="flex flex-col justify-center items-center font-sansCjk" key={item.id}>
                <Image src={item.src} width={285} height={367} alt={item.title} className="rounded-sm" />
                <p className="text-primary tracking-[1.98px] text-[18px] pt-4">{item.title}</p>
                <span className="text-primary  tracking-[1.98px] text-[18px] pt-2">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
