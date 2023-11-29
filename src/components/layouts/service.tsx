'use client'
import {useState} from 'react';
import {SERVICESFILTER} from '@/src/constants'
import Image from 'next/image';
import { IconHouse } from '@/public/svg';
const PROCESSINFO = [
    {id:1,title:'初步溝通',desc:'彙整基本需求後，將由專人電訪與諮詢',contact:'TEL:+886-2-27386876 | FAX:+886-2-27386878'},
    {id:2,title:'設計合約',desc:'簽訂設計合約，進行細部空間規劃'},
    {id:3,title:'現場丈量',desc:'約至案件現場進行細部會勘與丈量'},
    {id:4,title:'設計圖面配置',desc:'設計概念發想+平面圖配置規劃'},
    {id:5,title:'工程合約',desc:'依據合約預算及工期按圖施作'},
    {id:6,title:'工程施工',desc:'專業工程實施，並由工程師確實監造及紀錄'},
    {id:7,title:'完工交屋',desc:'現場清潔進行驗收、完工案例拍攝'},
    {id:8,title:'售後服務',desc:'確保每個案場的服務品質，進行案件執行後的觀察'},
]

export default function Service() {
    const [activeCategory, setActiveCategory] = useState("住宅設計")
    const filterProjects = () => {
    if(activeCategory == "住宅設計") {
      return SERVICESFILTER.filter((item) => item.category === "住宅設計")
    }else if(activeCategory == "辦公室設計"){
      return SERVICESFILTER.filter((item) => item.category === "辦公室設計")
    }else if(activeCategory == "文化場域設計"){
      return SERVICESFILTER.filter((item) => item.category === "文化場域設計")
    }else if(activeCategory == "商空設計"){
      return SERVICESFILTER.filter((item) => item.category === "商空設計")
    }else if(activeCategory == "展場設計"){
      return SERVICESFILTER.filter((item) => item.category === "展場設計")
    }else{
      return SERVICESFILTER

    }
  }
  return (
    <section>Service
    <div className='min-h-screen flex flex-col w-full justify-start mx-auto'>
    <div className='min-h-fit w-full flex justify-center'>
          <div className={` flex flex-row justify-center items-center font-serif mt-5 md:mt-10 md:mb-[100px] `}>
              {SERVICESFILTER.map((item)=>(
                 <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.category)}
                   className={`px-8 `}
                >  
                <div className="flex flex-col justify-center items-center group">
                <div className='text-[40px] text-[#D9D9D9] group-hover:text-[#1B1B1B] pb-4'>{item.icon}</div>
                <span className="tracking-[3px] font-sansCjk text-[18px] md:text-[20px] text-primary font-medium ">
                    {item.title}
                </span>
                </div>
                </button>
              ))}
            </div>
    </div>
    <div className='grid grid-cols-2 gap-[200px] pl-[100px]'>
        <ul>
        {PROCESSINFO.slice(0,4).map((item, index) => (
            <li className='relative flex gap-8 pt-[70px] items-center' key={item.id}>
            <div className='flex justify-center items-center bg-[#F3F3F3] rounded-full w-[100px] h-[100px] z-10'>
                <p className='text-primary font-syne tracking-[0.54px] text-[18px]'>Step{item.id}</p>
            </div>
            {index !== PROCESSINFO.slice(0,4).length - 1 ? (
                <div className='before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px] before:bg-[#F3F3F3]' />
            ) :  (<div className='before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px] ' />)}
            <div className='flex-col justify-start text-[#464646] font-sansCjk'>
                <p className='font-semibold text-[20px] tracking-[3px] py-2'>{item.title}</p>
                <p className='text-[16px] tracking-[1.76px] py-1'>{item.desc}</p>
                <span className='py-2'>{item.contact}</span>
            </div>
            </li>
        ))}
        </ul>
        <ul>
        {PROCESSINFO.slice(4,8).map((item, index) => (
            <li className='relative flex gap-8 pt-[70px] items-center' key={item.id}>
            <div className='flex justify-center items-center bg-[#F3F3F3] rounded-full w-[100px] h-[100px] z-10'>
                <p className='text-primary font-syne tracking-[0.54px] text-[18px]'>Step{item.id}</p>
            </div>
            {index !== PROCESSINFO.slice(0,4).length - 1 ? (
                <div className='before:absolute before:z-0 before:left-[50px] before:h-full before:w-[2px] before:bg-[#F3F3F3]' />
            ) :null}
            <div className='flex-col justify-start text-[#464646] font-sansCjk'>
                <p className='font-semibold text-[20px] tracking-[3px] py-2'>{item.title}</p>
                <p className='text-[16px] tracking-[1.76px] py-1'>{item.desc}</p>
                <span>{item.contact}</span>
            </div>
            </li>
        ))}
        </ul>
    </div>
    </div>
    </section>
  )
}
