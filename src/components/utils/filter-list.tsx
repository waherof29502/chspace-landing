'use client'

import { useState } from 'react'


export default function FilterList({
  FilterList
}: any) {
const [activeCategory, setActiveCategory] = useState("All")

const filterProjects = () => {
    if (activeCategory === 'All') {
      return FilterList;
    } else {
      return FilterList.filter((item: any) => item.category === activeCategory);
    }
  };


   return (
    <div
      className={`text-primary grid grid-cols-2  md:flex md:flex-row justify-center items-center font-serif mt-10 md:mt-10 md:-mb-[40px] lg:mb-[100px] ${
        !top ? 'fixed bg-white top-[60px] md:top-[110px] -left-[2px] md:-left-[8px] h-[250px] md:h-20 w-full z-10 flex flex-row justify-center items-center py-4 px-2' : ''
      }`}
    >
      {FilterList.map((item: any) => (
        <button
          key={item.id}
          onClick={() => setActiveCategory(item.category)}
          className={`px-8 ${
            item.id !== FilterList[FilterList.length - 1].id
              ? 'md:border-r-[1px] border-[#9c9c9c] border-solid mb-10 md:mb-0'
              : 'mb-10 md:mb-0'
          }`}
        >
          <span className="tracking-wider font-sansCjk text-[18px] md:text-[12px] lg:text-[22px] text-[#888] font-semibold hover:text-primary">
            {item.title}
          </span>
        </button>
      ))}
    </div>
  );
}
