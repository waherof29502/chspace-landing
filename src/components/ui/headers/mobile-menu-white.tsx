'use client';

import { useState, useRef, useEffect } from 'react';
import { LogoHWhite } from '@/public/svg';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS } from '@/src/constants';
import { IconFb, IconIg, IconShare } from '@/public/svg';
export default function MobileMenuWhite() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node))
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}

      <button
        ref={trigger}
        className={`hamburger ${!mobileNavOpen ? 'text-black' : ''} z-50 ${mobileNavOpen && `active text-white`}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>
      {/*Mobile navigation */}
      <div ref={mobileNav}>
        {mobileNavOpen ? (
          <div id="mobile-nav" className="absolute top-0 h-screen pb-16 z-100 left-0 w-full overflow-scroll bg-primary">
            <div className="shrink-0 ml-4 pr-2 pl-1 pt-1">
              <Link href="/" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <LogoHWhite className="text-[100px] md:text-[183px]" />
              </Link>
            </div>
            <ul className="px-5 mt-[45px] font-syne">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`font-normal text-white tracking-[10px] text-[20px] px-5 py-3 flex justify-center items-center `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex mt-[76px] ml-[44px] md:order-1">
              <Link
                href="https://www.instagram.com/chs_interior/"
                className="flex justify-center items-center text-white hover:text-[#888888]"
                aria-label="IG"
              >
                <IconIg className="text-[32px]" />
              </Link>
              <Link
                href="https://www.facebook.com/CHSPACE"
                className="flex justify-center items-center ml-4 text-white hover:text-[#888888]"
                aria-label="Fb"
              >
                <IconFb className="text-[32px]" />
              </Link>
              <Link
                href="#0"
                className="flex justify-center items-center ml-4 text-white hover:text-[#888888]"
                aria-label="Share"
              >
                <IconShare className="text-[30px]" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
