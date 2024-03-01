import Award from '@/public/svg/award.svg';
import { PROJECTDETAIL } from '@/src/constants';
interface ProjectFeatureProps {
  imageUrl?: string;
  title: string;
  location: string;
  link: string;
  category: string;
  desc?: string;
  awards?: string;
}

const ProjectFeatureCard = ({ imageUrl, title, location, link, category, desc, awards }: ProjectFeatureProps) => {
  return (
    <div className={`mx-auto mb-10 md:mb-[160px] flex flex-1 flex-col`}>
      <div className="flex justify-start items-center mt-2 p-2 md:p-0">
        {/* 案名區塊 */}
        <div className="text-primary font-sans w-full md:w-[920px] pt-8 md:pt-[50px]">
          <div className="flex flex-col max-w-2xl">
            <h1 className="text-[32px] font-sansCjk md:text-[34px] wide:text-[38px] font-semibold py-[3px]">{title}</h1>
            <span className="text-[#1b1b1b] text-[22px] wide:text-[24px] font-medium mt-[20px] tracking-wide font-sansCjk ">
              {location}
            </span>
            <span className="text-[#1b1b1b] text-[16px] font-medium mt-[50px] tracking-[1.76px] font-sansCjk leading-[39px]">
              {' '}
              {desc}
            </span>
            <div className="flex flex-row md:flex-row md:justify-start items-center mt-[100px] mb-[10px] md:-mb-[45px]">
              <h2 className="font-syne text-[30px] xl:text-[44px] wide:text-[48px] font-normal capitalize">Awards</h2>
              <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[18px]">獲獎事蹟</span>
            </div>
            {/* 獲獎事蹟區塊 */}
            <div className="flex flex-1 flex-col md:flex-row max-w-2xl items-start md:items-center mt-[30px] mb-[30px] md:mb-0 md:mt-[86px]">
              <Award className="text-[52px] md:text-[104px] mr-10" />
              <div className="text-primary md:border-l-[1.2px] border-[#D6D6D6] border-solid md:pl-6 mt-[20px] ">
                <span className="text-[#1b1b1b] text-[16px] font-sansCjk font-medium tracking-[1.76px] leading-[35px] ">
                  {' '}
                  {awards}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row md:flex-row md:justify-start items-center mt-[50px] md:-mb-[45px] ">
              <h2 className="font-syne text-[30px] xl:text-[44px] wide:text-[48px] font-normal capitalize">Data</h2>
              <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[18px]">空間資料</span>
            </div>
          </div>
          {/* 空間資料區塊 */}
          <div className="flex-1 w-full xl:w-[1300px] justify-between md:mt-[86px]">
            {PROJECTDETAIL.slice(0, 1).map((item) => (
              <>
                <div className="mt-[60px] w-full grid gap-[40px] lg:gap-[60px] grid-cols-1 md:grid-cols-2 items-center xl:w-[1280px] 3xl:w-[1380px] wide:w-[1450px] wider:w-[1900px] px-3 md:px-0 2lg:w-[1100px] xl:pr-[250px] xxl:pr-[160px] xxxl:pr-[100px] 2xl:px-0">
                  <div className="flex items-center">
                    <p className="font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre">
                      空間類型
                    </p>
                    <p className="font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-sansCjk  text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre">
                      家庭成員
                    </p>
                    <p className="font-sansCjk  text-[12px] md:text-[16px] text-[#46446] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center">
                      {item.familyMember}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre">
                      空間格局
                    </p>
                    <p className="font-sansCjk text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center">
                      {item.spaceType}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-sansCjk  text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px]  md:w-[200px] 3xl:w-[300px] text-center whitespace-pre">
                      空間坪數
                    </p>
                    <p className="font-sansCjk  text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center">
                      {item.houseSpace}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre">
                      屋況狀況
                    </p>
                    <p className="font-sansCjk  text-[12px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center">
                      {item.houseStatus}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-sansCjk text-[10px] md:text-[16px] text-primary tracking-[1.76px] font-semibold border-b-[1.2px] border-[#848383] border-solid py-2 w-[100px] md:w-[200px] 3xl:w-[300px] text-center whitespace-pre">
                      設計風格
                    </p>
                    <p className="font-sansCjk text-[10px] md:text-[16px] text-[#464646] tracking-[1.76px] font-normal border-b-[1.2px] border-[#d6d6d6] border-solid py-2 ml-[60px] w-[400px] 3xl:w-[600px] text-center whitespace-pre overflow-x-auto">
                      {item.designStyle}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeatureCard;
