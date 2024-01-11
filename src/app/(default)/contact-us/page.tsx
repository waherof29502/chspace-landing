export const metadata = {
  title: '文域設計 | 聯絡文域',
  description: '住宅設計 | 辦公空間 | 文化場域 | 商空設計 | 展場規劃'
};
import OtherHero from '@/src/components/ui/other-hero';
import HeroBg from '@/public/images/bg-8.png';
import ContactForm from '@/src/components/utils/contact-form';
export default function ContactUs() {
  return (
    <>
      <OtherHero imageUrl={HeroBg} title={'聯絡文域'} desc={'Contact Us'} />
      <section className="relative overflow-hidden">
        <div className="py-2 md:py-20">
          <div className="text-primary flex flex-col items-center justify-center">
            <span className="text-[16px] text-center md:text-[22px] font-sansCjk font-normal md:font-semibold tracking-[3.3px] capitalize pt-8 md:pb-10 px-8 mb-2 ">
              請填寫並發送下面的諮詢表單，服務專員將盡快與您聯繫
            </span>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
