import Image from 'next/image';
import Link from 'next/link';
import { useRef } from "react";
import CustomBtn from '@/src/components/ui/custom-btn';
import { motion, useScroll, useTransform } from "framer-motion";
interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
  isImageLeft: boolean;
}

const PortfolioCard = ({ imageSrc, title, location, link, isImageLeft }: PortfolioProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
     ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={`max-w-8xl mx-auto lg:mt-[97px] mb-[20px] lg:mb-[212px] flex flex-1 flex-col md:flex-row md:grid md:grid-cols-2 ${
        isImageLeft ? 'md:grid-flow-col' : 'flex-col-reverse'
      }`}
    >
      {isImageLeft && <Image className="mx-auto rounded-md" src={imageSrc} alt={title} width={768} height={486} />}
      <div className="md:flex md:flex-col justify-between md:justify-center items-center  mx-4 mt-8 md:mt-[40px] lg:mt-20 -mb-2 md:m-10 ">
        <div className="flex flex-col md:justify-start items-start text-primary w-full md:w-[250px]  md:ml-[25px] lg:ml-[20px] lg:mr-[150px] ">
          <p className="text-[18px] md:text-[22px] font-sansCjk font-medium md:font-semibold md:py-0 py-[14px]">
            {title}
          </p>
          <span className="text-[#464646] text-[14px] md:text-[18px] font-sansCjk font-light lg:font-normal">
            {location}
          </span>
        </div>
        <Link href={link} className="transition-all">
          <CustomBtn title={'view more'} fontType={'font-syne'} />
        </Link>
      </div>

      {!isImageLeft && (
        <Image className="max-w-8xl mx-auto my-4 rounded-md" src={imageSrc} alt={title} width={768} height={486} />
      )}
    </motion.div>
  );
};

export default PortfolioCard;
