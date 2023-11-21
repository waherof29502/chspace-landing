export const metadata = {
  title: '文域設計 | 作品欣賞',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計',
  
};

import PortfolioFeature from '@/src/components/layouts/portfolio/portfolio-feature';
import PortfolioHero from '@/src/components/layouts/portfolio/portfolio-hero';

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <PortfolioFeature/>
    </>
  );
}
