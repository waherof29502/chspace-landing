import Image from 'next/image';
import Link from 'next/link';
import Award from '@/public/svg/award.svg'
interface ProjectDataProps {
 category:string, spaceType:string,houseStatus:string, familyMember:string,houseSpace:string,designStyle:string
}

const ProjectDataCard = ({category, spaceType,houseStatus, familyMember,houseSpace,designStyle}:ProjectDataProps ) => {

  return (
    <div className='mt-[60px] w-full grid gap-[40px] lg:gap-[60px] grid-cols-1 md:grid-cols-2 items-center px-3 md:px-0'>
  <div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center'>空間類型</p>
  <p className='font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{category}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk  text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center'>家庭成員</p>
  <p className='font-sansCjk  text-[12px] md:text-[16px] text-[#46446] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{familyMember}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center'>空間格局</p>
  <p className='font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{spaceType}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk  text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px]  md:w-[200px] 3xl:w-[300px] text-center'>空間坪數</p>
  <p className='font-sansCjk  text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{houseSpace}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center'>屋況狀況</p>
  <p className='font-sansCjk  text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{houseStatus}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center'>設計風格</p>
  <p className='font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{designStyle}</p>
</div>
      {/* <p className='text-[12px] md:text-[22px] text-black'>家庭成員</p>
     <p className='text-[12px] md:text-[22px] text-black'>夫妻+2子女</p>
   
  <div className='flex'>
          <p className='text-[12px] md:text-[22px] text-black'>空間格局</p>

     <p className='text-[12px] md:text-[22px] text-black'>臥室 | 客廳 | 書房</p>
     </div> */}

    </div>
  );
};

export default ProjectDataCard;
