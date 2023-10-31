import PortfolioCard from './portfolio-card';
import { PORTFOLIO_ITEMS } from '../constants';
export default function Portfolio() {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-2 md:py-20'>
            <div className='text-primary flex flex-col md:flex-row md:justify-start items-center mt-10 md:mt-0 mb-[60px] md:mb-0'>
              <h1 className='font-syne text-[48px] font-normal capitalize'>
                Portfolio
              </h1>
              <span className='pl-4 mt-1.5 font-sans text-[#545351] text-[18px]'>
                最新作品
              </span>
            </div>
            {PORTFOLIO_ITEMS.map((item)=>(
              <PortfolioCard
              key={item.id} 
              imageSrc={item.src}
              title={item.title}
              location={item.location}
              link={item.link}
              isImageLeft={item.isImageLeft}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
