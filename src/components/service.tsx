import ServiceCard from './service-card';
import Image from 'next/image';
import NewsBg from '@/public/images/bg-2.png';

import { SERVICE_ITEMS } from '@/src/constants';
export default function Service() {
  return (
    <section className='relative'>
      <Image
        className='rounded-lg'
        src={NewsBg}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt='News bg'
      />

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='text-primary flex flex-col md:flex-row md:justify-start items-center'>
            <h1 className='font-syne text-[48px] font-normal capitalize'>
              Service
            </h1>
            <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
              服務項目
            </span>
          </div>
          <div className='mt-[60px] mx-auto grid gap-[12px] grid-cols-3 md:grid-cols-5 items-start md:max-w-2xl lg:max-w-none'>
            {/* Items */}
            {SERVICE_ITEMS.map((item) => (

                <ServiceCard
                key={item.id}
                  src={item.src}
                  title={item.title}
                  icon={item.icon}
                />
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
