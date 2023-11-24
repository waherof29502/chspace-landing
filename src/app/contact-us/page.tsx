export const metadata = {
  title: '文域設計 | 聯絡我們',
  description: '住宅設計 | 辦公室設計 | 文化場域設計 | 商空設計 | 展場設計',
  
};


import OtherHero from '@/src/components/ui/other-hero';
import PortfolioBg from '@/public/images/portfolio-bg.png';
import Contact from '@/src/components/layouts/contact-us/contact'
export default function ContactUs() {
  return (
    <>
     <OtherHero src={PortfolioBg} title={"聯絡文域"} desc={"Contact Us"}/>
     <Contact/>
    </>
  );
}
