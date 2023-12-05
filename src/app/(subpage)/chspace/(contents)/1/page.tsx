export const metadata = {
  title: '文域設計 | 文・域',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計'
};
import Image from 'next/image';
import Link from 'next/link';
import { CHSPACE, CONTENTIMG, OTHERCONTENTS01 } from '@/src/constants';
import ArticleHeader from '@/src/components/ui/article-header';
import IconFb from '@/public/svg/fb-solid.svg';
import IconIg from '@/public/svg/ig-solid.svg';
import OtherInfoCard from '@/src/components/ui/other-info-card';

export default function Content() {
  return (
    <>
      <ArticleHeader />
      <section className="relative overflow-hidden">
        <div className="mt-[150px] md:mt-[200px] lg:mt-[250px] py-2 flex justify-center w-full mx-auto ">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-start px-10 lg:px-[150px] 3xl:px-[350px] pb-10 3xl:pb-[60px]">
              <h1 className="text-primary text-[24px] font-sansCjk tracking-[2.64px] font-semibold pb-4">
                {CHSPACE[0].title}
              </h1>
              <span className="text-primary text-[16px] font-syne tracking-[0.48px]">{CHSPACE[0].date}</span>
              <div className="relative left-16 bottom-3  h-px p-[0.5px] w-10 bg-[#C4C4C4] " />
            </div>
            <div className="px-10 lg:px-[180px] 3xl:px-[420px] py-5">
              <Image
                className="mx-auto rounded-md wider:w-[1920px]"
                src={CONTENTIMG[0]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <div className="flex flex-col justify-start">
                <h2 className="text-primary text-[20px] font-medium tracking-[2.2px] pt-10 pb-6">
                  {CHSPACE[0].content?.title[0]}
                </h2>
                <p className="text-[#464646] text-[14px] font-sansCjk tracking-[1.54px] leading-[33px]">
                  {CHSPACE[0].content?.desc[0]}
                </p>
              </div>
              <Image
                className="mx-auto rounded-md py-10 wider:w-[1920px]"
                src={CONTENTIMG[1]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <Image
                className="mx-auto rounded-md wider:w-[1920px]"
                src={CONTENTIMG[2]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <div className="flex flex-col justify-start">
                <h2 className="text-primary text-[20px] font-medium tracking-[2.2px] pt-10 pb-6">
                  {CHSPACE[0].content?.title[1]}
                </h2>
                <p className="text-[#464646] text-[14px] font-sansCjk tracking-[1.54px] leading-[33px]">
                  {CHSPACE[0].content?.desc[1]}
                </p>
              </div>
              <Image
                className="mx-auto rounded-md  py-10 wider:w-[1920px]"
                src={CONTENTIMG[3]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <Image
                className="mx-auto rounded-md wider:w-[1920px]"
                src={CONTENTIMG[4]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <div className="flex flex-col justify-start">
                <h2 className="text-primary text-[20px] font-medium tracking-[2.2px] pt-10 pb-6">
                  {CHSPACE[0].content?.title[2]}
                </h2>
                <p className="text-[#464646] text-[14px] font-sansCjk tracking-[1.54px] leading-[33px]">
                  {CHSPACE[0].content?.desc[2]}
                </p>
              </div>
              <Image
                className="mx-auto rounded-md  py-10 wider:w-[1920px]"
                src={CONTENTIMG[5]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <Image
                className="mx-auto rounded-md wider:w-[1920px]"
                src={CONTENTIMG[6]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <div className="flex flex-col justify-start">
                <h2 className="text-primary text-[20px] font-medium tracking-[2.2px] pt-10 pb-6">
                  {CHSPACE[0].content?.title[3]}
                </h2>
                <p className="text-[#464646] text-[14px] font-sansCjk tracking-[1.54px] leading-[33px]">
                  {CHSPACE[0].content?.desc[3]}
                </p>
              </div>
              <Image
                className="mx-auto rounded-md  py-10 wider:w-[1920px]"
                src={CONTENTIMG[7]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <Image
                className="mx-auto rounded-md wider:w-[1920px]"
                src={CONTENTIMG[8]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <div className="flex flex-col justify-start">
                <h2 className="text-primary text-[20px] font-medium tracking-[2.2px] pt-10 pb-6">
                  {CHSPACE[0].content?.title[4]}
                </h2>
                <p className="text-[#464646] text-[14px] font-sansCjk tracking-[1.54px] leading-[33px]">
                  {CHSPACE[0].content?.desc[4]}
                </p>
              </div>
              <Image
                className="mx-auto rounded-md  py-10 wider:w-[1920px]"
                src={CONTENTIMG[9]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <Image
                className="mx-auto rounded-md wider:w-[1920px]"
                src={CONTENTIMG[10]}
                alt="chspace-content"
                width={1090}
                height={647}
              />
              <div className="text-primary flex flex-row justify-end items-center pt-[50px] mt-10 md:mt-10 wider:mr-[200px]">
                <Link href={'https://www.facebook.com/CHSPACE'} target="_blank" rel="noopener noreferrer">
                  <IconFb className="text-[34px] mr-2 text-[#7A7A7A] hover:text-[#4e4e4e]" />
                </Link>
                <Link href={' https://www.instagram.com/chs_interior/'} target="_blank" rel="noopener noreferrer">
                  <IconIg className="text-[34px] text-[#7A7A7A] hover:text-[#4e4e4e]" />
                </Link>
              </div>
              {/* content end */}
            </div>
            <div className="px-5 2md:px-[55px] xl:px-[120px] 3xl:px-[170px] wide:px-[230px] flex flex-row md:flex-row md:justify-start items-center mt-[50px] mb-[10px] md:mb-[45px] border-t-[1.5px] border-[#D6D6D6] border-solid">
              <h2 className="py-10 xl:pt-[80px] xl:pb-[10px] font-syne text-[30px] md:text-[48px] text-primary font-normal capitalize">
                Other articles
              </h2>
              <span className="pl-4 xl:pt-[80px] xl:pb-[10px] mt-1.5 font-san text-[#545351] text-[18px]">
                其他文章
              </span>
            </div>
          </div>
        </div>
        <OtherInfoCard OtherInfo={OTHERCONTENTS01} />
      </section>
    </>
  );
}
