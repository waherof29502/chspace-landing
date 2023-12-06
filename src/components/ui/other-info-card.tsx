'use client';
import React, { useState } from 'react';
import CustomBtn02 from '@/src/components/ui/custom-btn02';
import OtherCard from '@/src/components/utils/other-card';
import CarouselText from '@/src/components/utils/carousel-text';
type OtherInfoProps = {
  id: number;
  src: string;
  title?: string;
  otherTitle?: string;
  desc?: string;
  date?: string;
  tag?: string;
};
interface OtherInfoCardProps {
  OtherInfo: OtherInfoProps[];
}

export default function OtherInfoCard({ OtherInfo }: OtherInfoCardProps) {
  const [currText, setCurrText] = useState(0);

  return (
    <div className="flex justify-center lg:pl-[30px] xl:pl-[100px] 3xl:px-[150px] wide:px-[220px]">
      <div className="lg:hidden flex overflow-x-auto mt-4 items-start no-scrollbar wide:max-w-full">
        {OtherInfo.map((item) => (
          <OtherCard
            key={item.id}
            dataIndex={item.id}
            imageUrl={item.src}
            title={item.title}
            otherTitle={item.otherTitle}
            desc={item.desc}
            date={item.date}
            tag={item.tag}
          />
        ))}
      </div>
      <div className="hidden lg:flex overflow-x-auto mt-4 items-start no-scrollbar wide:max-w-full">
        <CarouselText autoSlide={false} setCurr={setCurrText} curr={currText}>
          {OtherInfo.map((item) => (
            <OtherCard
              key={item.id}
              dataIndex={item.id}
              imageUrl={item.src}
              title={item.title}
              otherTitle={item.otherTitle}
              desc={item.desc}
              date={item.date}
              tag={item.tag}
            />
          ))}
        </CarouselText>
        <div
          className="flex flex-row items-center wide:mt-[100px] lg:ml-[100px] lg:mr-[50px]"
          onClick={() => setCurrText(currText == OtherInfo.length - 2 ? 0 : currText + 1)}
        >
          <CustomBtn02 title={'view more'} fontType={'font-syne'} />
        </div>
      </div>
    </div>
  );
}
