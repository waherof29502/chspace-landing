'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenuWhite from './mobile-menu-white';
import { NAV_ITEMS } from '@/src/constants';
import Logo from './logo';
export default function HeaderWhite() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 600 ? setTop(false) : window.pageYOffset > 700 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out bg-white
      }`}
    >
      <div className="h-[100px] md:h-auto max-w-8xl mx-auto px-10 sm:px-6 lg:px-8 xl:px-[140px]">
        <div className="flex items-center justify-between h-16 pt-6 pr-2 md:h-[12vh]">
          <Logo />
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow font-syne justify-end items-center -mt-[55px] text-[16px] md:text-[14px] lg:text-[16px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`font-normal px-2 2md:px-[14px] 3md:px-4 2xl:px-5 3xl:px-10  py-3 flex items-center md:tracking-[3.2px] xl:tracking-[6.4px] transition duration-150 ease-in-out text-[#1B1B1B] `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileMenuWhite />
        </div>
      </div>
    </header>
  );
}
