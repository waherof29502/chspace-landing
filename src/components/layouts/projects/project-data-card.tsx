
interface ProjectDataProps {
 category:string, spaceType:string,houseStatus:string, familyMember:string,houseSpace:string,designStyle:string
}

const ProjectDataCard = ({category, spaceType,houseStatus, familyMember,houseSpace,designStyle}:ProjectDataProps ) => {

  return (
    <div className='mt-[60px] w-full grid gap-[40px] lg:gap-[60px] grid-cols-1 md:grid-cols-2 items-center xl:w-[1280px] 3xl:w-[1380px] wide:w-[1450px] wider:w-[1900px] px-3 md:px-0 2lg:w-[1100px] xl:pr-[250px] xxl:pr-[160px] xxxl:pr-[100px] 2xl:px-0'>
  <div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre'>空間類型</p>
  <p className='font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{category}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk  text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre'>家庭成員</p>
  <p className='font-sansCjk  text-[12px] md:text-[16px] text-[#46446] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{familyMember}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre'>空間格局</p>
  <p className='font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{spaceType}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk  text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px]  md:w-[200px] 3xl:w-[300px] text-center whitespace-pre'>空間坪數</p>
  <p className='font-sansCjk  text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{houseSpace}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre'>屋況狀況</p>
  <p className='font-sansCjk  text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center'>{houseStatus}</p>
</div>
<div className='flex items-center'>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre'>設計風格</p>
  <p className='font-sansCjk text-[10px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center whitespace-pre overflow-x-auto'>{designStyle}</p>
</div>
   
    </div>
  );
};

export default ProjectDataCard;
