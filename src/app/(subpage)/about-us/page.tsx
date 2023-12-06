export const metadata = {
  title: '文域設計｜關於文域',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計'
};

import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-7.png';
import About from '@/src/components/layouts/about';

export default function AboutUs() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'關於文域'} desc={'About Us'} />
      <About />
    </>
  );
}
