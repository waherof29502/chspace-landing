'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { NAV_ITEMS } from '@/src/constants';
import Logo from './logo';
import useScrollProcess from '@/src/hooks/useScrollProcess';

export default function Header() {
  const completions = useScrollProcess();

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-100 ${completions !== 0 ? 'bg-white' : ''}`}>
      <div className="h-[100px] md:h-auto max-w-8xl mx-auto px-10 sm:px-6 lg:px-8 xl:px-[140px]">
        <div className="flex items-center justify-between h-16 pt-6 pr-2 md:h-[6.25rem] 3xl:h-[12vh]">
          <Logo completions={completions} />
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow font-syne justify-end items-center -mt-[2.625rem] text-[16px] md:text-[14px] lg:text-[16px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  {/* <Link
                    href={item.link}
                    className={`font-normal px-2 2md:px-[14px] 3md:px-4 2xl:px-5 3xl:px-10  py-3 flex items-center md:tracking-[3.2px] xl:tracking-[6.4px] transition duration-150 ease-in-out ${
                      !top ? 'text-[#1B1B1B]' : ''
                    }`}
                  >
                    {item.name}
                  </Link> */}
                  <Link
                    href={item.link}
                    className={`font-normal px-2 2md:px-[14px] 3md:px-4 2xl:px-5 3xl:px-10 py-3 flex items-center md:tracking-[3.2px] xl:tracking-[6.4px] transition duration-150 ease-in-out ${
                      completions !== 0 ? 'text-[#1B1B1B]' : ''
                    }`}
                  >
                    {item.name}
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
