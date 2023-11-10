import Image from 'next/image';
import Link from 'next/link';
import IconClick from '@/public/svg/icon.svg'
import CustomBtn from './custom-btn';
interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link:string;
  isImageLeft:boolean;
}

const PortfolioCard = ({ imageSrc, title, location,link, isImageLeft }: PortfolioProps) => {

  return (
     <div className={`max-w-8xl mx-auto lg:mt-[97px] mb-2 lg:mb-[212px] flex flex-1 flex-col md:flex-row md:grid md:grid-cols-2 ${isImageLeft ? 'md:grid-flow-col' : 'flex-col-reverse'}`}>
      {isImageLeft && (
        <Image className='mx-auto rounded-md' src={imageSrc} alt={title} width={768} height={486} />
      )}
      <div className='md:flex md:flex-col justify-start md:justify-center items-center mx-4 mt-8 md:mt-[70px] lg:mt-20 -mb-2 md:m-10 '>
        <div className='flex flex-col justify-start items-start text-primary w-full md:w-[250px] lg:ml-[20px] lg:mr-[150px]'>
        <p className='md:text-[22px] font-sansCjk font-semibold md:py-0 py-[14px]'>
          {title}
        </p>
         <span className='text-[#464646] text-[18px] font-sansCjk font-normal'>{location}</span>
         </div>
        <Link href={link} className='transition-all'>
        <CustomBtn title={"view more"} fontType={'font-syne'}/>
        </Link>
        
      </div>
      {!isImageLeft && (
        <Image className='max-w-8xl mx-auto my-4 rounded-md' src={imageSrc} alt={title} width={768} height={486} />
      )}
    </div>
  );
};

export default PortfolioCard;
