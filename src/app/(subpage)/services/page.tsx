export const metadata = {
  title: '文域設計 | 服務與流程',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計'
};

import OtherHero from '@/src/components/ui/other-hero';
import PortfolioBg from '@/public/images/bg-6.png';
import Service from '@/src/components/layouts/service';

export default function Services() {
  return (
    <>
      <OtherHero imageUrl={PortfolioBg} title={'服務與流程'} desc={'Services & processes'} />
      <Service />
    </>
  );
}
