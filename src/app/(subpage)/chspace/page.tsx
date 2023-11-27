export const metadata = {
  title: '文域設計 | 文・域',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計',
  
};
import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-4.png';
export default function ChSpace() {

  return (
    <>
     <OtherHero src={HeroBg} title={"文・域"} desc={"C.H.Space"}/>
    </>
  );
}
