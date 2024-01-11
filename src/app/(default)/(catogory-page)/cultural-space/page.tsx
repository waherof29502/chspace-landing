export const metadata = {
  title: '文域設計 | 作品欣賞',
  description: '住宅設計 | 辦公空間 | 文化場域 | 商空設計 | 展場規劃'
};

import PortfolioFeature from '@/src/components/layouts/portfolio';
import HeroBg from '@/public/images/bg-3.png';
import OtherHero from '@/src/components/ui/other-hero';

export default function Portfolio() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'作品欣賞'} desc={'Portfolio'} />
      <PortfolioFeature />
    </>
  );
}
