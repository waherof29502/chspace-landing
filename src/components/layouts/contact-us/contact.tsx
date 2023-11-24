'use client'
import {useState,useEffect} from 'react'

export default function Contact() {

  return (
    <>
     <section className='relative overflow-hidden'>
        <div className='relative max-w-8xl mx-auto px-4 sm:px-6 md:px-[50px] xl:px-[100px] 2xl:px-[235px] '>
          <div className='py-2 md:py-20'>
            <div className='text-primary flex flex-row md:flex-row justify-start items-center mt-10 md:mt-0 mb-[60px] md:mb-0 2xl:-ml-[75px] wide:ml-[15px] wider:ml-[30px]'>
              <h1 className='text-[22px] font-sansCjk md:text-[48px] font-normal capitalize'>
                請填寫並發送下面的諮詢表單，服務專員將盡快與您聯繫
              </h1>
       
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
