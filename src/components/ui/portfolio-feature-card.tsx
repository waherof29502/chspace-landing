import Image from 'next/image';
import Link from 'next/link';
import CustomBtn from '@/src/components/ui/custom-btn';
import {useRef} from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
  category: string;
}

const PortfolioCard = ({imageSrc, title, location, link, category }: PortfolioProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div  
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={`mx-auto md:mt-[97px] mb-10 md:mb-[100px] flex flex-1 flex-col`}>
      <Link href={link}>
      <Image className="mx-auto rounded-md" src={imageSrc} alt={title} width={1090} height={647} />
      </Link>
      <div className="flex justify-start mt-12 p-2 md:p-0">
        <div className="md:hidden flex flex-col items-center border-[1.5px] border-primary border-solid rounded-xl w-[58px] h-[60px] mt-2 mr-[10px] p-3 ">
          <span className="text-[12px] font-sansCjk md:text-[16px] lg:text-[18px]  text-primary font-semibold">
            {category.slice(0, 2)}
          </span>
          <span className="text-[12px] font-sansCjk md:text-[16px] lg:text-[18px] text-primary font-semibold">
            {category.slice(2, 4)}
          </span>
        </div>

        {/* <div className='md:hidden flex items-center border-[1.5px] border-primary border-solid rounded-xl w-[58px] h-[60px] mt-2 mr-[10px] p-3 '>
        <span className='text-[12px] font-sansCjk text-primary tracking-[2.2px] font-semibold' >
          {category}
        </span>
        </div> */}
        {/* <div className='hidden md:flex items-center border-[1.5px] border-primary border-solid rounded-xl w-[68px] h-[78px] md:pl-[16px] pl-[12px] pr-[1px] lg:pl-[12px] md:mr-10 mr-4'>
        <span className='text-[12px] font-sansCjk md:text-[16px] lg:text-[18px] text-primary font-semibold' >
          {category}
        </span>
        </div> */}
        <Link href={link}>
        <div className="hidden md:flex flex-col justify-center items-center border-[1.5px] border-primary border-solid rounded-xl w-[68px] h-[78px]  mr-4">
          <span className="text-[12px] font-sansCjk md:text-[16px] lg:text-[18px] text-primary font-semibold">
            {category.slice(0, 2)}
          </span>
          <span className="text-[12px] font-sansCjk md:text-[16px] lg:text-[18px] text-primary font-semibold">
            {category.slice(2, 4)}
          </span>
        </div>
         </Link>
        <div className="text-primary font-sans w-[255px] xs:w-[290px] md:w-[620px] lg:w-full pt-8 -mt-[29px] md:-mt-[45px] md:pt-[50px]">
          <div className="flex flex-col">
            <Link href={link}>
            <p className="text-[20px] font-sansCjk md:text-[22px] font-semibold py-[3px]">{title}</p>
            <span className="text-[#464646] font-sansCjk text-[18px] font-normal">{location}</span>
            </Link>
            <div className="flex justify-end -mt-10 md:-mt-[70px] 3xl:-mt-[80px] w-[270px] 2ss:w-[300px] xs:w-[320px] 2xs:w-[380px] sm:w-[500px] md:w-full 2md:w-[720px] 3md:w-[850px] 2lg:w-full">
              <Link href={link} className="transition-all">
                <CustomBtn title={'view more'} fontType={'font-syne'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
