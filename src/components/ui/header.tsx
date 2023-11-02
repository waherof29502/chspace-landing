'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoWhite from '@/public/images/logo-white.png';
import LogoBlack from '@/public/images/logo-black.png';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import { NAV_ITEMS } from '@/src/constants';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 750 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out ${
        !top ? 'bg-white ease-in ' : ''
      }`}
    >
      <div className='h-[100px] md:h-auto max-w-8xl mx-auto px-5 sm:px-6 lg:px-[80px]'>
        <div className='flex items-center justify-between h-16 pt-6 pr-2 md:h-40'>
          {/* Site branding */}
          <div className='shrink-0 mr-4 mt-4 md:hidden'>
            <Image
              className='rounded-lg'
              src={!top ? LogoBlack : LogoWhite}
              width={100}
              height='100'
              alt='logo'
            />
          </div>
          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            <div className='shrink-0 mr-4 mt-4'>
              <Image
                className='rounded-lg'
                src={!top ? LogoBlack : LogoWhite}
                width={183}
                height='183'
                alt='logo'
              />
            </div>
            <ul className='flex grow font-sansCjk justify-end items-center -mt-[43px]'>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out ${
                      !top ? 'text-slate-600' : ''
                    }`}
                  >
                    {item.navItems}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
