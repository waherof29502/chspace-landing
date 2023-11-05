export const metadata = {
  title: 'Home - Simple',
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
