
import Image from 'next/image';
import HeroBg from '@/public/images/hero-image.png';


export const SLIDERS =[
  {id:1,src:'/images/2-1.png',title:'三重陳宅｜寧靜致遠',location:'新北市 三重',link:'/portfolio/work01',category:'住宅設計'},
  {id:2,src:'/images/2-2.png',title:'內湖羅宅｜漫光滋養',location:'台北市 內湖',link:'/portfolio/work02',category:'住宅設計'},
  {id:3,src:'/images/2-3.png',title:'陽明山李宅｜山嵐藝廊',location:'台北市 陽明山',link:'/portfolio/work03',category:'住宅設計'},
  {id:4,src:'/images/2-4.png',title:'台灣室內設計週｜漢斯希爾展館',location:'南港展覽館1館',link:'/portfolio/work04',category:'書店設計'},
  {id:5,src:'/images/2-5.png',title:'金灣閱潮書店｜閱潮咖啡區',location:'廣州珠海 金灣市',link:'/portfolio/work05',category:'書店設計'},
  {id:6,src:'/images/2-6.png',title:'心之所憩｜生活的模樣',location:'台北市 中山區',link:'/portfolio/work06',category:'住宅設計'},

]
export default function Work01() {
  return (
    <section className='relative'>
     <div className='w-full min-h-screen flex items-center justify-center relative'>
    {/* Hero image */}
     <Image
          className='pl-2 pr-2 pt-2 pb-2 md:pb-0 rounded-2xl object-cover'
          src={HeroBg}
          fill
          alt='hero-bg'
        />
    </div>
    <div style={{backgroundImage:`url(${SLIDERS[0].src})`}} className='w-full h-full bg-center bg-cover duration-500'>

    </div>
  
    </section>
  );
}
