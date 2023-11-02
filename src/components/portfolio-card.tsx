import Image from 'next/image';
import Link from 'next/link';
interface PortfolioProps {
  imageSrc: string;
  title: string;
  location: string;
  link:string;
  isImageLeft:boolean;
}

const PortfolioCard = ({ imageSrc, title, location,link, isImageLeft }: PortfolioProps) => {

  return (
     <div className={`mx-auto md:mt-[97px] mb-2 md:mb-[202px] flex flex-1 flex-col md:grid md:grid-cols-2 ${isImageLeft ? 'md:grid-flow-col' : 'flex-col-reverse'}`}>
      {isImageLeft && (
        <Image className='mx-auto rounded-md' src={imageSrc} alt={title} width={600} height={600} />
      )}
      <div className='flex md:flex-col justify-start md:justify-center items-center mx-4 mt-8 mb-10 md:m-10'>
        <div className='text-primary font-sans w-full md:w-[250px]'>
        <p className='text-[22px] font-semibold py-[14px]'>
          {title}
        </p>
         <span className='text-[#464646] text-[18px] font-normal'>{location}</span>
        <div className='flex justify-end md:mt-[40px]'>
        <Link href={link} className='text-primary'>
         立即諮詢
      </Link>
        </div>
        </div>
      </div>
      {!isImageLeft && (
        <Image className='mx-auto my-4 rounded-md' src={imageSrc} alt={title} width={600} height={600} />
      )}
    </div>
  );
};

export default PortfolioCard;
