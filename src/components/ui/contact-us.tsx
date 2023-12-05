import { IconPhone, IconLocation } from '@/public/svg';
import CustomBtn from './custom-btn';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row item-start h-auto md:py-[60px] lg:py-[30px] xl:py-[50px] 2xl:p-[70px] justify-evenly">
          <div className="text-black flex flex-col m-5 md:m-10 3xl:mr-8">
            <div className="flex flex-row md:w-[256px] md:flex-row justify-start md:justify-center lg:justify-start items-center md:ml-[10px] lg:ml-[14px] xl:ml-[80px] 2xl:ml-[10px] wide:ml-[28px] wider:-ml-[140px]">
              <h2 className="text-[38px] font-syne md:text-[48px] font-normal capitalize">Contact</h2>
              <span className="ml-3 mt-1.5 font-sansCjk text-[#545351] text-[18px]">聯絡我們</span>
            </div>
            <div className="flex p-2 lg:ml-[20px] md:p-0 mt-[60px] xl:ml-[80px] 2xl:ml-[10px] wider:-ml-[140px] xl:mr-[150px] flex-col md:items-center lg:justify-center ">
              <span className="text-[#545351] text-[16px] md:text-[13px] lg:text-[18px] font-sansCjk font-medium md:font-semibold leading-10">
                營造生活美學，享受無比舒適
                <br />
                欲瞭解更多我們的專業服務，歡迎與我們聯繫
              </span>
            </div>
            <div className="mr-1 xl:mr-[100px] wider:mr-[100px] md:mt-6 flex justify-end">
              <Link href="/contact-us">
                <CustomBtn title={'立即諮詢'} fontType={'font-sansCjk'} />
              </Link>
            </div>
          </div>
          <div className="flex flex-row md:w-full lg:w-auto md:flex-row justify-start md:justify-center items-center ml-[21px] md:ml-0 lg:ml-0 md:border-l-[#c3c3c3] md:border-l-[0.8px] md:border-t-0 md:border-t-[#c3c3c3] border-t-[1px] md:border-b-0 border-b-[#c3c3c3] md:border-r-[#c3c3c3] border-b-[1px] md:border-r-[0.8px] wide:w-[420px] wider:w-[500px]">
            <div className="lg:ml-10 py-12 md:mr-10 lg:mr-[60px] xl:px-10 sm:mr-5 mr-0 my-5 ">
              <div className="ml-4 flex flex-row md:flex-col justify-center items-center">
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
