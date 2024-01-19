import { IconPhone, IconLocation } from '@/public/svg';
import CustomBtn from './custom-btn';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row item-start h-auto py-[2rem] md:py-[3.75rem] lg:py-[1.875rem] xl:py-[3.125rem] 2xl:p-[4.375rem] justify-evenly scale-100 md:scale-90 3md:scale-100">
          <div className="text-black flex flex-col m-2 px-4 mt-10 md:m-10 3xl:mr-8 ">
            <div className="flex flex-row md:w-[16rem] md:flex-row justify-start md:justify-center lg:justify-start items-center md:ml-[0.625rem] lg:ml-[0.875rem] xl:ml-[5rem] xxxl:ml-[4.25rem] 3xl:ml-3 wide:ml-[0.75rem] wider:-ml-[8.75rem] ">
              <h2 className="text-[1.875rem] font-syne md:text-[3rem] font-normal capitalize">Contact</h2>
              <span className="ml-3 mt-1.5 font-sansCjk text-[#545351] text-[1rem] md:text-[1.125rem]">聯絡我們</span>
            </div>
            <div className="flex md:ml-[1rem] lg:ml-[1.25rem] md:p-0 mt-4 md:mt-[3.75rem] xl:ml-[5rem] xxxl:ml-[4.375rem] 2xl:ml-[10px] wider:-ml-[8.75rem] lg:mr-0 3xl:mr-[9.375rem] flex-col md:items-center lg:justify-center ">
              <span className="text-[#545351] text-[1rem] md:text-[1rem] lg:text-[1.125rem] font-sansCjk font-medium md:font-semibold leading-10">
                營造生活美學，享受無比舒適<br/>
                欲瞭解更多我們的專業服務，歡迎與我們聯繫
              </span>
            </div>
            <div className="ml-auto  flex justify-end">
              <Link href="/contact-us">
                 <button className="flex my-[10px] md:my-0 py-[50px] transition-all ">
                    <div className="group flex w-[180px] items-center justify-between">
                      <p
                        className={`text-primary translate-x-13 font-sansCjk text-[16px] tracking-[2.08px] transition-all group-hover:translate-x-12 ease-linear duration-500`}
                      >
                        立即諮詢
                      </p>
                      <div className="relative w-[50px] group-hover:w-5 h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-500" />
                      <div className="relative -ml-[50px]  rounded-full border-[1.5px] border-primary border-solid w-8 h-8  group-hover:bg-black duration-500" />
                      <div className="absolute w-0 group-hover:w-5 h-[1.2px] translate-x-[144px] bg-blue-200 transform transition-transform group-hover:ease-linear group-hover:translate-x-[147px] duration-200" />
                    </div>
                  </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row md:w-full lg:w-auto md:flex-row justify-start md:justify-center items-center ml-[21px] md:ml-0 lg:ml-0 md:border-l-[#c3c3c3] md:border-l-[0.8px] md:border-t-0 md:border-t-[#c3c3c3] border-t-[1px] md:border-b-0 border-b-[#c3c3c3] md:border-r-[#c3c3c3] border-b-[1px] md:border-r-[0.8px] wide:w-[420px] wider:w-[500px]">
            <div className="ml-10 py-12 md:mr-10 lg:mr-[60px] xl:px-10 sm:mr-5 mr-0 my-5 ">
              <div className="flex flex-row md:flex-col justify-center items-center">
                <IconPhone className="text-[30px] text-white" />
                <div className="flex flex-col ml-[21px] md:ml-0 mt-0 md:mt-[50px] gap-4">
                  <span className="text-primary  hover:text-gray-600 text-[16px] md:text-[14px] md:whitespace-pre lg:text-[16px] ">
                    <a href="tel:+886-2-27386876">TEL:+886-2-27386876</a>
                  </span>
                  <span className="text-primary text-[16px] md:text-[14px] lg:text-[16px] md:whitespace-pre  ">
                    FAX:+886-2-27386878
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:ml-10 flex md:w-full lg:w-auto flex-row md:flex-row justify-start md:justify-center items-center ml-[21px] md:ml-0 ">
            <div className="py-12  md:mr-10 sm:mr-5 mr-0 my-5 ">
              <div className="ml-4 flex flex-row md:flex-col justify-center items-center">
                <IconLocation className="text-[30px] text-white" />
                <div className="flex flex-col ml-[21px] md:ml-0 md:mt-[50px] gap-4 px-2">
                  <span className="text-primary font-serif hover:text-gray-600 text-[14px] md:text-[12px]  md:whitespace-pre lg:text-[16px] ">
                    <a href="https://maps.app.goo.gl/SccgiGPd85kFWuSX6" target="_blank">
                      105台北市大安區復興南路二段290號8樓
                    </a>
                  </span>
                  <span className="text-primary font-serif  hover:text-gray-600  text-[14px] md:text-[12px] lg:text-[16px] ">
                    <a href="https://maps.app.goo.gl/g2qt7RrNW1yGhphZ7" target="_blank">
                      上海市長寧區新華路210弄1號402室
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
