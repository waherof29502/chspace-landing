import { IconHouse, IconBag, IconCube, IconLeaf, IconCup } from '@/public/svg';

import React from 'react';
// 共用組件內容（Menu,Footer）
export const NAV_ITEMS = [
  { id: 1, name: '關於文域', link: '/about-us' },
  { id: 2, name: '作品欣賞', link: '/portfolio' },
  { id: 3, name: '服務與流程', link: '/services' },
  { id: 4, name: '媒體報導', link: '/media-reports' },
  { id: 5, name: '文・域', link: '/chspace' },
  { id: 6, name: '聯絡文域', link: '/contact-us' }
];

export const FOOTER_ITEMS = [
  { id: 1, name: '關於文域', link: '/about-us' },
  { id: 2, name: '作品欣賞', link: '/portfolio' },
  { id: 3, name: '服務與流程', link: '/services' }
];

// 首頁內容
export const SERVICE_ITEMS = [
  { id: 1, src: '/images/home/3-1.png', title: '住宅設計', icon: React.createElement(IconHouse) },
  { id: 2, src: '/images/home/3-2.png', title: '辦公空間', icon: React.createElement(IconBag) },
  { id: 3, src: '/images/home/3-3.png', title: '文化場域', icon: React.createElement(IconLeaf) },
  { id: 4, src: '/images/home/3-4.png', title: '商空設計', icon: React.createElement(IconCup) },
  { id: 5, src: '/images/home/3-5.png', title: '展場規劃', icon: React.createElement(IconCube) }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    src: '/images/home/2-1.png',
    title: '三重陳宅｜寧靜致遠',
    location: '新北市 三重',
    link: '/work01',
    isImageLeft: false
  },
  {
    id: 2,
    src: '/images/home/2-2.png',
    title: '內湖羅宅｜漫光滋養',
    location: '台北市 內湖',
    link: '/work02',
    isImageLeft: true
  },
  {
    id: 3,
    src: '/images/home/2-3.png',
    title: '陽明山李宅｜山嵐藝廊',
    location: '台北市 陽明山',
    link: '/work03',
    isImageLeft: false
  }
];
//作品欣賞內容
export const PORTFOLIO_PAGE_ITEMS = [
  {
    id: 1,
    src: '/images/home/2-1.png',
    title: '三重陳宅｜寧靜致遠',
    location: '新北市 三重',
    link: '/portfolio/work01',
    category: '住宅設計',
    desc: '一座居家圖書館家庭成員是一對夫妻和兩位小男孩，屋主很喜歡閱讀也有很多藏書， 為此打造一個親子共讀空間，以木紋區隔出空間的層次也如畫框般，勾勒家的畫景與架構。 玻璃磚屏風，保留早期紅磚交丁的工法，作爲區隔同時引領幽微的光影在室內自然流動。 主臥床頭為消弭大樑壓迫感，在其邊緣倒木紋斜角，使臥室氛圍舒展開來，有如置身溫馨小木屋。靜謐的氛圍和山景交映，達至寧靜致遠的心境。',
    awards:
      '文域設計於2022年4月初以四個不同類型空間項目：書店 | 別墅 | 住宅 | 辦公空間，榮獲2022德國IF四項大獎，呈現出全方位的優質創意、人文精神、尊重環境、與崇尚自然的設計概念，發想與實踐。',
    data: [{ 空間類型: '住宅設計' }]
  },
  {
    id: 2,
    src: '/images/home/2-2.png',
    title: '內湖羅宅｜漫光滋養',
    location: '台北市 內湖',
    link: '/portfolio/work02',
    category: '住宅設計'
  },
  {
    id: 3,
    src: '/images/home/2-3.png',
    title: '陽明山李宅｜山嵐藝廊',
    location: '台北市 陽明山',
    link: '/portfolio/work03',
    category: '住宅設計'
  },
  {
    id: 4,
    src: '/images/home/2-4.png',
    title: '台灣室內設計週｜漢斯希爾展館',
    location: '南港展覽館1館',
    link: '/portfolio/work03',
    category: '展場規劃'
  },
  {
    id: 5,
    src: '/images/home/2-5.png',
    title: '金灣閱潮書店｜閱潮咖啡區',
    location: '廣州珠海 金灣市',
    link: '/portfolio/work04',
    category: '商空設計'
  },
  {
    id: 6,
    src: '/images/home/2-6.png',
    title: '心之所憩｜生活的模樣',
    location: '台北市 中山區',
    link: '/portfolio/work04',
    category: '文化場域'
  }
];
export const PORTFOLIO_FILTER_LISTS = [
  { id: 1, title: 'All', category: 'All', path: 'all' },
  { id: 2, title: '住宅設計', category: '住宅設計', path: 'house' },
  { id: 3, title: '辦公空間', category: '辦公空間', path: 'office' },
  { id: 4, title: '文化場域', category: '文化場域', path: 'cultural-space' },
  { id: 5, title: '商空設計', category: '商空設計', path: 'commercial-space' },
  { id: 6, title: '展場規劃', category: '展場規劃', path: 'venue-plan' }
];
//作品詳細內文內容
export const SLIDERS01 = [
  { id: 1, src: '/images/work01/1-1.jpg' },
  { id: 2, src: '/images/work01/1-2.jpg' },
  { id: 3, src: '/images/work01/1-3.jpg' },
  { id: 4, src: '/images/work01/1-4.jpg' },
  { id: 5, src: '/images/work01/1-5.jpg' },
  { id: 6, src: '/images/work01/1-6.jpg' },
  { id: 7, src: '/images/work01/1-7.jpg' },
  { id: 8, src: '/images/work01/1-8.jpg' }
];
export const PROJECTDETAIL = [
  {
    id: 1,
    category: '住宅設計',
    spaceType: '臥室|客廳｜書房',
    houseStatus: '公寓老屋翻新',
    familyMember: '夫妻+2子女',
    houseSpace: '約29坪',
    designStyle: '實木皮、實木地板、礦物塗料、玻璃磚'
  }
];
export const OTHERSPROJECT01 = [
  {
    id: 1,
    src: '/images/work01/2-1.png',
    title: '台灣室內設計週｜漢斯希爾展館',
    desc: '南港展覽館1館',
    link: '/work01'
  },
  { id: 2, src: '/images/work01/2-2.png', title: '台灣室內設計週｜漢斯希爾展館', desc: '新竹高鐵旁', link: '/work02' },
  { id: 3, src: '/images/work01/2-2.png', title: '閱讀軌跡｜閱讀迷宮', desc: '浙江/紹興 鏡湖區', link: '/work03' }
];
export const NEWS01 = [
  { id: 1, content: '【2022 iF獎設計】放緩生活步調享受日光、木質的洗禮' },
  { id: 2, content: '「專訪」日日時光一起生活的初心！' },
  { id: 3, content: '【SHOW AWARDS】文域設計 獲2022 年―書店 | 別墅 | 住宅 | 辦公空間―4 項IF 設計大獎' }
];
//about page
export const FEATUREIMG = [
  '@/public/images/about/1-3.png',
  '@/public/images/about/1-2.png',
  '@/public/images/about/1-4.png',
  '@/public/images/about/1-1.png',
  '@/public/images/about/1-5.png',
  '@/public/images/about/2-1.png',
  '@/public/images/about/2-2.png'
];

export const ANNUALEVENTS = [
  { id: 1, year: '2022', desc: '德國iF DESIGN AWARD設計獎' },
  { id: 2, year: '2021', desc: ['台灣 金邸獎網路人氣獎', '台灣 金點設計獎'] },
  {
    id: 3,
    year: '2020',
    desc: [
      '義大利A’Design Awards銀獎',
      '中國  艾特獎 商業空間 -  銅獎',
      '台灣  亞洲設計大獎Grand Prize 入圍',
      '中國 金外灘商業空間 - 優秀獎'
    ]
  },
  { id: 4, year: '2019', desc: ['美國IDA設計大獎', '美國MUSE 設計獎 - 金獎', '台灣 金點設計獎 - 年度最佳空間'] }
];
export const AWARDRECORDS = [
  { id: 1, year: '2022', desc: '德國iF DESIGN AWARD設計獎' },
  { id: 2, year: '2021', desc: ['台灣 金邸獎網路人氣獎', '台灣 金點設計獎'] },
  {
    id: 3,
    year: '2020',
    desc: [
      '義大利A’Design Awards銀獎',
      '中國  艾特獎 商業空間 -  銅獎',
      '台灣  亞洲設計大獎Grand Prize 入圍',
      '中國 金外灘商業空間 - 優秀獎'
    ]
  },
  { id: 4, year: '2019', desc: ['美國IDA設計大獎', '美國MUSE 設計獎 - 金獎', '台灣 金點設計獎 - 年度最佳空間'] }
];
export const TEAMIMAGE = [
  {
    id: 1,
    title: '謝鎮宇｜Jarvis',
    category: '設計總監',
    src: '/images/about/2-3.png',
    desc: '「文化創生」是文域設計一貫秉持的理念，在設計中打造與品牌關聯的文化意涵，在公益與商業之間達到完美的平衡是我所努力的方向。'
  },
  { id: 2, title: '張惠茹｜Rita', category: '主任設計師', src: '/images/about/2-4.png' },
  { id: 3, title: '林意婷｜Yiting', category: '燈光設計師', src: '/images/about/2-5.png' },
  { id: 4, title: '林家帆｜Abby', category: '工程顧問', src: '/images/about/2-6.png' },
  { id: 5, title: '方境鴻｜Hung', category: '設計師', src: '/images/about/2-7.png' },
  { id: 6, title: '郭姮均｜Jean', category: '設計師', src: '/images/about/2-8.png' },
  { id: 7, title: '宋宇禮｜Yuli', category: '設計師', src: '/images/about/2-9.png' },
  { id: 8, title: '蔡心瑜｜Hsin', category: '設計師', src: '/images/about/2-10.png' },
  { id: 9, title: '林采誼｜Shirley', category: '助理設計師', src: '/images/about/2-11.png' },
  { id: 10, title: '曾琬雯｜Tammy', category: '助理設計師', src: '/images/about/2-12.png' },
  { id: 11, title: '陳淑妍｜Cheryl', category: '秘書', src: '/images/about/2-13.png' }
];

// services page
export const SERVICESFILTER = [
  {
    id: 1,
    title: '住宅設計',
    category: '住宅設計',
    src: '/images/services/1-1.png',
    icon: React.createElement(IconHouse)
  },
  {
    id: 2,
    title: '辦公空間',
    category: '辦公空間',
    src: '/images/services/1-2.png',
    icon: React.createElement(IconBag)
  },
  {
    id: 3,
    title: '文化場域',
    category: '文化場域',
    src: '/images/services/1-3.png',
    icon: React.createElement(IconLeaf)
  },
  {
    id: 4,
    title: '商空設計',
    category: '商空設計',
    src: '/images/services/1-4.png',
    icon: React.createElement(IconCup)
  },
  {
    id: 5,
    title: '展場規劃',
    category: '展場規劃',
    src: '/images/services/1-5.png',
    icon: React.createElement(IconCube)
  }
];
export const PROCESSINFO = [
  {
    id: 1,
    title: '初步溝通',
    desc: '彙整基本需求後，將由專人電訪與諮詢',
    contact: 'TEL:+886-2-27386876 | FAX:+886-2-27386878'
  },
  { id: 2, title: '設計合約', desc: '簽訂設計合約，進行細部空間規劃' },
  { id: 3, title: '現場丈量', desc: '約至案件現場進行細部會勘與丈量' },
  { id: 4, title: '設計圖面配置', desc: '設計概念發想+平面圖配置規劃' },
  { id: 5, title: '工程合約', desc: '依據合約預算及工期按圖施作' },
  { id: 6, title: '工程施工', desc: '專業工程實施，並由工程師確實監造及紀錄' },
  { id: 7, title: '完工交屋', desc: '現場清潔進行驗收、完工案例拍攝' },
  { id: 8, title: '售後服務', desc: '確保每個案場的服務品質，進行案件執行後的觀察' }
];
//media report page
export const NEWS_FILTER_LISTS = [
  { id: 1, title: '影音專區', category: '影音專區', path: 'video' },
  { id: 2, title: '媒體專訪', category: '媒體專訪', path: 'report' }
];
export const MEDIAREPORT = [
  {
    id: 1,
    src: '/images/news/1-1.png',
    title: '文域設計總監謝鎮宇專訪：以文化創生為念，打造多面的空間體驗！',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 2,
    src: '/images/news/1-2.png',
    title: '2022 iF 設計精選－文域室內裝修設計有限公司 文域生活｜太倉閱潮書店',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 3,
    src: '/images/news/1-3.png',
    title: '文域設計 謝鎮宇總監 : 重新定義人與空間的連結 | 睦人物 Vol.3',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 4,
    src: '/images/news/1-4.png',
    title: '文域設計總監謝鎮宇專訪：以文化創生為念，打造多面的空間體驗！',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 5,
    src: '/images/news/1-5.png',
    title: '2022 iF 設計精選－文域室內裝修設計有限公司 文域生活｜太倉閱潮書店',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 6,
    src: '/images/news/1-6.png',
    title: '文域設計 謝鎮宇總監 : 重新定義人與空間的連結 | 睦人物 Vol.3',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 7,
    src: '/images/news/1-7.png',
    title: '文域設計總監謝鎮宇專訪：以文化創生為念，打造多面的空間體驗！',
    tag: '影音專區',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 8,
    src: '/images/news/1-8.png',
    title: '2022 iF 設計精選－文域室內裝修設計有限公司 文域生活｜太倉閱潮書店',
    tag: '媒體專訪',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  },
  {
    id: 9,
    src: '/images/news/1-9.png',
    title: '文域設計 謝鎮宇總監 : 重新定義人與空間的連結 | 睦人物 Vol.3',
    tag: '媒體專訪',
    date: '2021/07',
    resource: '來源：T客邦',
    link: '/media-reports/new1'
  }
];
export const MEDIACONTENTIMG = [
  '/images/news/1-1-1.png',
  '/images/news/1-1-2.png',
  '/images/news/1-1-3.png',
  '/images/news/1-1-4.png'
];
// chspace page
export const CHSPACE = [
  {
    id: 1,
    src: '/images/chspace/1-1.png',
    title: '書架的模組化、可拆解與富有彈性的構件組裝，創造出空間生命週循環的迴圈，體現環保永續的精神。',
    date: '2023/11'
  },
  {
    id: 2,
    src: '/images/chspace/1-3.png',
    title: '開放式格局，將豐沛的陽光寫入日常，明樣的白色調，道敘生活的暖意。',
    date: '2023/11'
  },
  {
    id: 3,
    src: '/images/chspace/1-2.png',
    title: '書架的模組化、可拆解與富有彈性的構件組裝，創造出空間生命週循環的迴圈，體現環保永續的精神。',
    date: '2021/07'
  },
  {
    id: 4,
    src: '/images/chspace/1-4.png',
    title: '跳脫刻板的閱讀模式，層層堆高的階梯座位，包容了各式的型態與文化底色，在這可以隨性坐臥，安靜地看書沉思...',
    date: '2023/11'
  },
  {
    id: 5,
    src: '/images/chspace/1-5.png',
    title: '跳脫刻板的閱讀模式，層層堆高的階梯座位，包容了各式的型態與文化底色，在這可以隨性坐臥，安靜地看書沉思...',
    date: '2023/11'
  },
  {
    id: 6,
    src: '/images/chspace/1-6.png',
    title: '跳脫刻板的閱讀模式，層層堆高的階梯座位，包容了各式的型態與文化底色，在這可以隨性坐臥，安靜地看書沉思...',
    date: '2023/11'
  }
];

export const OTHERCONTENTS01 = [
  {
    id: 1,
    src: '/images/chspace/1-1-12.png',
    title: '書架的模組化、可拆解與富有彈性的構件組裝，創造出空間生命週循環的迴圈，體現環保永續的精神。',
    date: '2021/07',
    link: '/chspace1'
  },
  {
    id: 2,
    src: '/images/chspace/1-1-13.png',
    title: '《做鐵工的人》每個項目工地幕後的無名英雄，都是成就作品的大英雄。',
    date: '2021/07',
    link: '/chspace1'
  },
  {
    id: 3,
    src: '/images/chspace/1-1-13.png',
    title: '書架的模組化、可拆解與富有彈性的構件組裝，創造出空間生命週循環的迴圈，體現環保永續的精神。',
    date: '2021/07',
    link: '/chspace1'
  }
];
