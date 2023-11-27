export const metadata = {
  title: '文域設計 | 作品欣賞',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計',
  
};

import PortfolioFeature from '@/src/components/layouts/portfolio/portfolio-feature';
import HeroBg from '@/public/images/bg-3.png';
import OtherHero from '@/src/components/ui/other-hero';

export default function Portfolio() {
  return (
    <>
      <OtherHero src={HeroBg} title={"作品欣賞"} desc={"Portfolio"}/>
      <PortfolioFeature/>
    </>
  );
}
