export const metadata = {
  title: '文域設計 ｜首頁',
  description: '深耕"人文藝術文化場域"以設計閱讀世界。'
};

import Hero from '@/src/components/layouts/home/hero';
import Features from '@/src/components/layouts/home/features';
import Newsletter from '@/src/components/layouts/home/newsletter';
import Service from '@/src/components/layouts/home/service';
import Portfolio from '@/src/components/layouts/home/portfolio';
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Newsletter />
      <Portfolio />
      <Service />
    </>
  );
}
