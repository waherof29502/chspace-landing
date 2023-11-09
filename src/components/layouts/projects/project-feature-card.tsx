import Image from 'next/image';
import Link from 'next/link';
import Award from '@/public/svg/award.svg'
import WorkDataCard from './project-data-card';
interface WorkFeatureProps {
  imageSrc: string;
  title: string;
  location: string;
  link:string;
  category: string;
  desc?:string;
  awards?:string
}
const PROJECTDETAIL =[
  {id:1,category:'住宅設計',spaceType:'臥室|客廳｜書房',houseStatus:'公寓老屋翻新',familyMember:'夫妻+2子女',houseSpace:'約29坪',designStyle:'實木皮、實木地板、礦物塗料、玻璃磚'}
]

const ProjectCard = ({ imageSrc, title, location,link, category,desc,awards}: WorkFeatureProps) => {

  return (
     <div className={`mx-auto mb-10 md:mb-[160px] flex flex-1 flex-col`}>  
      <div className='flex justify-start items-center mt-2 p-2 md:p-0'>
        <div className='text-primary font-sans w-full md:w-[920px] pt-8 md:pt-[50px]'>
        <div className='flex flex-col max-w-2xl'>
        <p className='text-[32px] md:text-[38px] font-serif font-semibold py-[3px]'>
          {title}
        </p>
         <span className='text-[#1b1b1b] text-[24px] font-medium mt-[20px] tracking-wide font-serif '>{location}</span>
          <span className='text-[#1b1b1b] text-[16px] font-medium mt-[50px] tracking-[1.76px] font-serif  leading-[39px]'> {desc}</span>
          <div className='flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:-mb-[45px]'>
              <h1 className='font-syne text-[30px] md:text-[48px] font-normal capitalize'>
               Awards
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                獲獎事蹟
              </span>
            </div>
         <div className='flex flex-1 flex-col md:flex-row max-w-2xl items-start md:items-center mt-[30px] mb-[30px] md:mb-0 md:mt-[86px]'>
         <Award className='text-[52px] md:text-[104px] mr-10'/>
         <div className='text-primary md:border-l-[1.2px] border-[#D6D6D6] border-solid md:pl-6 mt-[20px] '>
          <span className='text-[#1b1b1b] text-[16px] font-serif font-medium tracking-[1.76px] leading-[35px] '> {awards}</span>
          </div>
         </div>
        </div>
        <div className=''>
         <div className='flex flex-row md:flex-row md:justify-start items-center mt-[50px] md:-mb-[45px]'>
              <h1 className='font-syne text-[30px] md:text-[48px] font-normal capitalize'>
               Data
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                空間資料
              </span>
            </div>
           
            </div>
            
      <div className='flex-1 w-full xl:w-[1300px] justify-between'>
       {PROJECTDETAIL.slice(0, 1).map((item) => (
            <WorkDataCard key={item.id} category={item.category} spaceType={item.spaceType} houseStatus={item.houseStatus} familyMember={item.familyMember} houseSpace={item.houseSpace} designStyle={item.designStyle}/> 
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
