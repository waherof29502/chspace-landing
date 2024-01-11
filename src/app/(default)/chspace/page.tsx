export const metadata = {
  title: '文域設計 | 文・域',
  description: '住宅設計 | 辦公空間 | 文化場域 | 商空設計 | 展場規劃'
};
import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-4.png';
import Chspace from '@/src/components/layouts/chspace';
export default function ChSpace() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'文・域'} desc={'C.H.Space'} />
      <Chspace/>
    </>
  );
}
