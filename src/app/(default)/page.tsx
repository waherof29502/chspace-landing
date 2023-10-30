export const metadata = {
  title: '文域首頁',
  description: 'Page description',
};

import Hero from '@/src/components/hero';
import Features from '@/src/components/features';
import FeaturesBlocks from '@/src/components/features-blocks';
import Testimonials from '@/src/components/testimonials';
import Newsletter from '@/src/components/newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      {/* <Newsletter /> */}
    </>
  );
}
