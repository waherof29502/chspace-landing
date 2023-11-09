'use client'
import {useState} from 'react'
import PortfolioCard from './portfolio-feature-card';
import {PORTFOLIO_PAGE_ITEMS} from '@/src/constants'

const FILTER_LISTS =[
  {id:1,title:'All',category:'All'},
  {id:2,title:'住宅設計',category:'住宅設計'},
  {id:3,title:'書店・文化場域設計',category:'書店設計'},
  {id:4,title:'商空・展場設計',category:'展場設計'},
]
export default function PortfolioFeature() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filterProjects = () => {
    if(activeCategory == "住宅設計") {
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === "住宅設計")
    }else if(activeCategory === '書店設計'){
      return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === "書店設計")
    }else if(activeCategory === '展場設計'){
     return PORTFOLIO_PAGE_ITEMS.filter((item) => item.category === "展場設計")
    }else{
      return PORTFOLIO_PAGE_ITEMS

    }
  }
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-2 md:py-20'>
            <div className='text-primary flex flex-col md:flex-row justify-center items-center font-serif mt-10 md:mt-10 mb-[100px] '>
              {FILTER_LISTS.map((item)=>(
                 <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.category)}
                   className={`px-5 mr-5 ${
                    item.id !== FILTER_LISTS[FILTER_LISTS.length - 1].id
                    ? 'md:border-r-[1px] border-primary border-solid mb-10 md:mb-0'
                    : 'mb-10 md:mb-0'
                    }`}
                >
                  <span className="tracking-wider text-[22px] text-[#888] font-semibold hover:text-primary">
                  {item.title}
                  </span>
                </button>
              ))}
            </div>
           
            {filterProjects().map((item)=>(
              <PortfolioCard
              key={item.id} 
              imageSrc={item.src}
              title={item.title}
              location={item.location}
              link={item.link}
              category ={item.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
