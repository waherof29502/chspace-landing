export const metadata = {
  title: '作品',
  description: 'Page description',
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
