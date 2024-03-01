import Image from 'next/image';
import Link from 'next/link';
import CustomBtn from '@/src/components/ui/custom-btn';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
  category: string;
}

const PortfolioCard = ({ imageSrc, title, location, link, category }: PortfolioProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess
      }}
      className={`w-full  md:mt-12 3md:mt-0 mx-auto flex flex-col gap-y-8`}
    >
      <Link href={link}>
        <Image className="mx-auto rounded-md" src={imageSrc} alt={title} width={1090} height={647} />
      </Link>
      <div className="flex justify-start ">
        <div className="md:hidden flex flex-col items-center border-[1.5px] border-primary border-solid rounded-xl w-[58px] h-[60px] mt-2 mr-[10px] p-3 ">
          <span className="text-[12px] font-sansCjk md:text-[16px] lg:text-[18px]  text-primary font-semibold">
            {category.slice(0, 2)}
          </span>
          <span className="text-[12px] font-sansCjk md:text-[16px] lg:text-[18px] text-primary font-semibold">
            {category.slice(2, 4)}
          </span>
        </div>

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
        <div className="text-primary font-sans mt-1">
          <Link href={link}>
            <p className="text-[20px] font-sansCjk lg:text-[22px] font-semibold py-[3px]">{title}</p>
            <span className="text-[#464646] font-sansCjk text-[18px] font-normal">{location}</span>
          </Link>
        </div>
        {/* tablet/desktop button */}
        <div className="hidden md:block ml-auto -mr-10 ">
          <Link href={link} className="transition-all">
            <CustomBtn title={'view more'} fontType={'font-syne'} />
          </Link>
        </div>
      </div>
      {/* mobile button */}
      <div className="md:hidden ml-auto -mr-10 -mt-[60px]">
        <Link href={link} className="transition-all">
          <CustomBtn title={'view more'} fontType={'font-syne'} />
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
