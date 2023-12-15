'use client';

import Link from 'next/link';
import MobileMenu from './mobile-menu-white';
import { NAV_ITEMS } from '@/src/constants';
import Logo from './logo';
export default function ArticleHeader() {
  return (
    <header className={`fixed z-30 w-full`}>
      <div className="bg-[#F5F5F5] w-[99%] rounded-[20px] m-2 md:h-auto max-w-8xl mx-auto px-10 md:px-4 lg:px-8 xl:px-[140px]">
        <div className="flex items-center justify-between h-16 pt-10 pr-2 md:h-[9rem]">
          <Logo top={false} />
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow font-syne justify-end items-center mb-[80px] text-[16px] md:text-[14px] lg:text-[16px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`font-normal px-2 2md:px-[14px] 3md:px-4 2xl:px-5 3xl:px-10 flex md:tracking-[3.2px] xl:tracking-[6.4px] items-center transition duration-150 ease-in-out text-[#1B1B1B]`}
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
