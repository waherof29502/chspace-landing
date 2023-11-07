import ServiceGridCard from './service-grid-card';
import Image from 'next/image';
import NewsBg from '@/public/images/bg-2.png';
import ServiceCard from './service-card'
import { SERVICE_ITEMS } from '@/src/constants';
export default function Service() {
  return (
    <section className='relative'>
      <Image
        className='rounded-lg object-cover'
        src={NewsBg}
        fill
        alt='News bg'
      />

      <div className='relative max-w-8xl items-center mx-auto px-4 sm:px-6 justify-center lg:mx-[10px] xl:mx-[90px] 2xl:mx-[100px]'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='text-primary flex flex-col md:ml-[30px] xl:ml-[10px] 2xl:ml-[120px] md:flex-row md:justify-start items-center 2xl:mb-[40px]'>
            <h1 className='font-syne text-[48px] font-normal capitalize'>
              Service
            </h1>
            <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
              服務項目
            </span>
          </div>
          {/*<div className='mt-[60px] mx-auto grid gap-[12px]  md:grid-cols-5 items-start md:max-w-2xl lg:max-w-none'>
             Items 
            {SERVICE_ITEMS.map((item) => (
                <ServiceCard
                key={item.id}    
                  src={item.src}
                  title={item.title}
                  icon={item.icon}
                />
      
            ))}
          </div>*/}
          <div className="flex overflow-x-auto no-scrollbar  mt-4 items-start w-auto md:max-w-2xl lg:max-w-none 2xl:ml-[100px]">
           {SERVICE_ITEMS.map((item) => (
          <ServiceCard
           key={item.id}
                  dataIndex= {item.id}
                  src={item.src}
                  title={item.title}
                  icon={item.icon}/>
                   ))}
                 </div>
        </div>
      </div>
    </section>
  );
}
