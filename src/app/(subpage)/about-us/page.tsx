export const metadata = {
  title: '關於我們',
  description: 'Page description',
};

import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-7.png';
import About from '@/src/components/layouts/about'

export default function AboutUs() {
  return (
    <>
     <OtherHero src={HeroBg} title={"關於文域"} desc={"About Us"}/>
     <About/>
    </>
  );
}
