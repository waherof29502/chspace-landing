export const metadata = {
  title: '文域設計 | 文・域',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計'
};
import Image from 'next/image';
import { CHSPACE } from '@/src/constants';
import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-4.png';
import Link from 'next/link';
export default function ChSpace() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'文・域'} desc={'C.H.Space'} />
      <section className="relative overflow-hidden">
        <div className="py-2 md:p-20 w-full">
          <div className="mt-10 columns-1 md:columns-2 lg:columns-3 w-auto space-y-10 items-center">
            {CHSPACE.map((item) => (
              <div className="flex flex-col justify-start items-start px-12 md:px-5 xl:px-10" key={item.id}>
                <Link href={`/chspace1`}>
                  <Image src={item.src} alt="image" width={495} height={325} />
                  <h1 className="font-sansCjk text-[16px] font-semibold text-primary tracking-[1.76px] pt-6">
                    {item.title}
                  </h1>
                  <span className="font-syne text-[14px] text-primary tracking-[0.42px] pt-5 ">{item.date}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
