'use client';

import Link from 'next/link';
import MobileMenu from './mobile-menu-white';
import { NAV_ITEMS } from '@/src/constants';
import Logo from './logo';
export default function ArticleHeader() {
  return (
    <header className={`fixed w-[99%] z-30 bg-[#F5F5F5] rounded-[20px] m-2`}>
      <div className="h-[100px] md:h-auto max-w-8xl mx-auto px-10 sm:px-6 lg:px-8 xl:px-[140px]">
        <div className="flex items-center justify-between h-16 pt-6 pr-2 md:h-40">
          <Logo top={false} />
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow font-syne justify-end items-center -mt-[43px] text-[16px] md:text-[14px] lg:text-[16px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`font-normal px-2 2md:px-[14px] 3md:px-4 2xl:px-5 3xl:px-10 flex md:tracking-[3.2px] xl:tracking-[6.4px] items-center transition duration-150 ease-in-out text-slate-600`}
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
