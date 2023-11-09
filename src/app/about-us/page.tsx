export const metadata = {
  title: '關於我們',
  description: 'Page description',
};

import PortfolioHero from '@/src/components/layouts/portfolio/portfolio-hero';

export default function AboutUs() {
  return (
    <>
    <PortfolioHero/>
    <div className='flex mx-10 p-[120px] transition-all'>
<div className='flex w-[200px] items-center '>
  <p className='text-primary transform transition-transform ease-linear hover:translate-x-10'>View More</p>
  <div className="relative w-20  h-px bg-gray-500 transform transition-transform ease-linear hover:translate-x-10" />
  <div className="relative rounded-full bg-black w-10 h-10 hover:bg-blue-500 " />
</div>
  {/* <svg width="155" height="40" className='hover:text-primary' viewBox="0 0 155 40">
    <path d="M154.5 20C154.5 28.0242 148.216 34.5 140.5 34.5C132.784 34.5 126.5 28.0242 126.5 20C126.5 11.9758 132.784 5.5 140.5 5.5C148.216 5.5 154.5 11.9758 154.5 20Z" stroke="black" fill='currentColor' />
  </svg> */}
  {/* <svg width="155" height="40" className='text-black hover:translate-x-9' viewBox="0 0 155 40">
    <path d="M141 20L91 20" stroke="currentColor" />
  </svg> */}
  <svg width="155" height="40" className='hover:text-primary' viewBox="0 0 155 40">
    <path d="M154.5 20C154.5 28.0242 148.216 34.5 140.5 34.5C132.784 34.5 126.5 28.0242 126.5 20C126.5 11.9758 132.784 5.5 140.5 5.5C148.216 5.5 154.5 11.9758 154.5 20Z" stroke="black" fill='currentColor' />
  </svg>
</div>
    </>
  );
}
