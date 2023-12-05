export const metadata = {
  title: '文域設計 | 媒體報導',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計'
};
import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-5.png';
import News from '@/src/components/layouts/news';

export default function MediaReport() {
  return (
    <>
      <OtherHero src={HeroBg} title={'媒體報導'} desc={'Media Reports'} />
      <News />
    </>
  );
}
