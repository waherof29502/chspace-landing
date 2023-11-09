import ProjectCard from './service-grid-card';
import Image from 'next/image';
import { IconPhone, IconLocation } from '@/public/svg';

export default function ContactUs() {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='max-w-8xl mx-auto flex flex-wrap items-center h-auto md:h-[625px] justify-evenly'>
          <div className=' text-black flex flex-col m-10 3xl:mr-8'>
            <div className='flex flex-col md:flex-row md:justify-start items-center'>
              <h1 className='font-syne text-[48px] font-normal capitalize'>
                Contact
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                聯絡我們
              </span>
            </div>
            <div className='flex p-12 md:p-0 mt-[60px] flex-col items-center justify-center'>
              <span className='text-[#545351] text-[18px] font-serif font-semibold leading-10'>
                營造生活美學，享受無比舒適
                <br />
                欲瞭解更多我們的專業服務，歡迎與我們聯繫
              </span>
            </div>
            <div className='md:mt-6 flex justify-end'>
              <h1 className='font-serif'>立即諮詢</h1>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center md:border-l-[#c3c3c3] md:border-l-[1px] md:border-t-0 md:border-t-[#c3c3c3] border-t-[1px] md:border-b-0 border-b-[#c3c3c3] md:border-r-[#c3c3c3] border-b-[1px] md:border-r-[1px]'>
            <div className='ml-3 px-10 py-12 md:mr-10 sm:mr-5 mr-0 my-5 '>
              <div className='ml-4 flex flex-col justify-center items-center'>
                <IconPhone className='text-[30px] text-white' />
                <div className='flex flex-col mt-[50px] gap-4'>
                  <span className='text-primary'>TEL:+886-2-27386876</span>
                  <span className='text-primary'>FAX:+886-2-27386878</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='ml-3 px-10 py-12  md:mr-10 sm:mr-5 mr-0 my-5 '>
              <div className='ml-4 flex flex-col justify-center items-center'>
                <IconLocation className='text-[30px] text-white' />
                <div className='flex flex-col mt-[50px] gap-4'>
                  <span className='text-primary font-serif'>
                    105台北市大安區復興南路二段290號8樓
                  </span>
                  <span className='text-primary font-serif'>
                    上海市長寧區新華路210弄1號402室
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
