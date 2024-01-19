import React from 'react';
import Image from 'next/image';
import NewsBg from '@/public/images/bg-2.png';
import Link from 'next/link';
const NewsLetter = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[485px] object-cover">
        <Image className="rounded-lg" src={NewsBg} fill alt="News bg" />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-2" >
          <h1 className="mb-2 text-primary font-sansCjk text-[18px] md:text-[26px] font-medium md:font-semibold text-center">
            以「文化創意」底蘊做設計
            <br />
            創作「知性」的空間
          </h1>
           <button className="flex items-center justify-center bg-[#1b1b1b] p-4 w-[200px] md:w-[265px] mt-4 rounded-2xl group">
            <div className="w-0 group-hover:w-10  h-[1.2px] bg-white transform transition-transform duration-700" />
            <Link href={"/about-us"}>
            <p className="font-syne font-bold translate-x-0 transform transition-transform group-hover:translate-x-3 md:group-hover:translate-x-4 duration-700">
              Learn More
            </p>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
