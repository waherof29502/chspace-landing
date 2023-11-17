import Image from 'next/image';
import Link from 'next/link';
import CustomBtn from '../../custom-btn';
interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link:string;
  category: string;
}

const PortfolioCard = ({ imageSrc, title, location,link, category }: PortfolioProps) => {

  return (
     <div className={`mx-auto md:mt-[97px] mb-10 md:mb-[100px] flex flex-1 flex-col`}>
    
        <Image className='mx-auto rounded-md' src={imageSrc} alt={title} width={1090} height={647} />
      
      <div className='flex justify-start mt-12 p-2 md:p-0'>
         <div className='md:hidden flex items-center border-[1.5px] border-primary border-solid rounded-xl w-[58px] h-[60px] mt-2 mr-[10px] p-3 '>
        <span className='text-[12px] font-sansCjk text-primary tracking-[2.2px] font-semibold' >
          {category}
        </span>
        </div>
       <div className='hidden md:flex items-center border-[1.5px] border-primary border-solid rounded-xl w-[68px] h-[78px] md:pl-[16px] pl-[12px] pr-[1px] lg:pl-[12px] md:mr-10 mr-4'>
        <span className='text-[12px] font-sansCjk md:text-[16px] lg:text-[18px] text-primary font-semibold' >
          {category}
        </span>
        </div>
        
        <div className='text-primary font-sans w-[255px] xs:w-[290px] md:w-[620px] lg:w-full pt-8 -mt-[29px] md:-mt-[45px] md:pt-[50px]'>
        <div className='flex flex-col'>
        <p className='text-[20px] font-sansCjk md:text-[22px] font-semibold py-[3px]'>
          {title}
        </p>
         <span className='text-[#464646] font-sansCjk text-[18px] font-normal'>{location}</span>
        <div className='flex justify-end mt-10 md:mt-[0px]'>
              <Link href={link} className='transition-all'>
        <CustomBtn title={"view more"} fontType={'font-syne'}/>
        </Link>
        
     
      </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default PortfolioCard;
