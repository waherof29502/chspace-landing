import Image from 'next/image';
import React from 'react';

interface ServiceProps {
  src: string;
  title: string;
  icon: string;
}

const ServiceCard = ({ src, title, icon }: ServiceProps) => {
  return (
    <div className='relative overflow-hidden'>
      <Image
        src={src}
        alt={title}
        width={100}
        height={100}
        className='w-full object-contain'
      />

      <div className='absolute inset-0 flex flex-col justify-center items-center p-0 md:p-6 '>
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className='opacity-0 hover:opacity-100 ease-in-out'
        />
        <p className='text-[12px] md:text-[22px] text-white'>{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
