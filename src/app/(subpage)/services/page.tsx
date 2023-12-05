export const metadata = {
  title: '關於我們',
  description: 'Page description'
};

import OtherHero from '@/src/components/ui/other-hero';
import PortfolioBg from '@/public/images/bg-6.png';
import Service from '@/src/components/layouts/service';

export default function Services() {
  return (
    <>
      <OtherHero src={PortfolioBg} title={'服務與流程'} desc={'Services & processes'} />
      <Service />
    </>
  );
}
