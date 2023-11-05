import React from 'react';
import Image from 'next/image';
import NewsBg from '@/public/images/bg-2.png';

const NewsLetter = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='w-full h-[485px] object-cover'>
        <Image
          className='rounded-lg'
          src={NewsBg}
          fill
          alt='News bg'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center p-2'>
          <h1 className='mb-2 text-primary text-[24px] md:text-[26px] font-semibold text-center'>
            以「文化創意」底蘊做設計
          </h1>
          <h1 className='mb-2 text-primary text-[24px] md:text-[26px] font-semibold text-center'>
            創作「知性」的空間
          </h1>
          <button className='bg-[#1b1b1b] font-syne p-4 w-[200px] md:w-[265px] mt-4 rounded-2xl'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
