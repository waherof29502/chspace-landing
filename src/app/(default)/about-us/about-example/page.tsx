export const metadata = {
  title: '文域設計｜關於文域',
  description: '住宅設計 | 辦公空間 | 文化場域 | 商空設計 | 展場規劃'
};

import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-7.png';
import About from '@/src/components/layouts/about';

export default function AboutExample() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'關於文域'} desc={'About Us'} />
      <h2 className="text-[20rem] text-primary">我是子頁面</h2>
    </>
  );
}
