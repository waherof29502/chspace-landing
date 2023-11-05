import Image from 'next/image';
import Link from 'next/link';
interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link:string;
  category: string;
}

const PortfolioCard = ({ imageSrc, title, location,link, category }: PortfolioProps) => {

  return (
     <div className={`mx-auto md:mt-[97px] mb-10 md:mb-[160px] flex flex-1 flex-col`}>
    
        <Image className='mx-auto rounded-md' src={imageSrc} alt={title} width={1090} height={647} />
      
      <div className='flex justify-start items-center mt-2 p-2 md:p-0'>
       <div className='flex items-center border-[1.5px] border-primary border-solid rounded-xl w-[64px] h-[78px] pl-[10px] pr-[1px] md:pl-[7px] md:pr-[1px] lg:pl-[12px] md:mr-10 mr-4'>
        <span className=' text-[14px] md:text-[16px] lg:text-[18px] text-primary font-semibold' >
          {category}
        </span>
        </div>
        
        <div className='text-primary font-sans w-full md:w-[920px] pt-8 md:pt-[50px]'>
        <div className='flex flex-col'>
        <p className='text-[20px] md:text-[22px] font-semibold py-[3px]'>
          {title}
        </p>
         <span className='text-[#464646] text-[18px] font-normal'>{location}</span>
        <div className='flex justify-end mt-4 md:mt-[40px]'>
        <Link href={link} className='text-primary'>
         立即諮詢
      </Link>
      </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default PortfolioCard;
