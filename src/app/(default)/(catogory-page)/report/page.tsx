export const metadata = {
  title: '文域設計 | 媒體報導',
  description: '住宅設計 | 辦公空間 | 文化場域 | 商空設計 | 展場規劃'
};
import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-5.png';
import MediaReport from '@/src/components/layouts/media-report';

export default function MediaReports() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'媒體報導'} desc={'Media Reports'} />
      <MediaReport />
    </>
  );
}
