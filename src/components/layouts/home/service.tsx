import Image from 'next/image';
import NewsBg from '@/public/images/bg-2.png';
import ServiceCard from './service-card';
import { SERVICE_ITEMS } from '@/src/constants';
export default function Service() {
  return (
    <section className="relative">
      <Image className="rounded-lg object-cover" src={NewsBg} fill alt="News bg" />

      <div className="relative max-w-8xl items-center mx-auto px-4 sm:px-6 justify-center lg:mx-[10px] xl:mx-[90px] 2xl:mx-[100px]">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-primary flex flex-row md:ml-[20px] 2xl:ml-[28px] wide:ml-[120px] md:flex-row md:justify-start items-center mb-6 2xl:mb-[40px] wider:ml-[130px]">
            <h2 className="text-[38px] font-syne md:text-[48px] font-normal capitalize">Service</h2>
            <span className="pl-4 mt-1.5 font-sansCjk text-[#545351] text-[18px]">服務項目</span>
          </div>
          <div className="flex overflow-x-auto no-scrollbar mt-4 items-start w-auto lg:max-w-none 3xl:ml-[50px] wide:ml-[100px] wider:ml-[280px]">
            {SERVICE_ITEMS.map((item) => (
              <ServiceCard key={item.id} dataIndex={item.id} src={item.src} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
