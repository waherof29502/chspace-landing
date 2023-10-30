'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import LogoBlack from '@/public/images/logo-black.png';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS } from '@/src/constants';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
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
    <div className='flex md:hidden'>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${
          !top && !mobileNavOpen ? 'text-black' : ''
        } z-50 ${mobileNavOpen && `active text-black`}`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        <svg
          className='w-6 h-6 fill-current '
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='4' width='24' height='2' />
          <rect y='11' width='24' height='2' />
          <rect y='11' width='24' height='2' />
          <rect y='18' width='24' height='2' />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        {/* {mobileNavOpen ? (
          <div
            id='mobile-nav'
            className='absolute top-0 h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white'
          >
            <div className='shrink-0 ml-4 pr-2 pl-1 pt-1'>
              <Image
                className='rounded-lg'
                src={LogoBlack}
                width={100}
                height='100'
                alt='logo'
              />
            </div>
            <ul className='px-5 mt-1 font-sansCjk'>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={` font-medium text-black px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                  >
                    {item.navItems}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null} */}
        <Transition
          show={mobileNavOpen}
          as='nav'
          id='mobile-nav'
          className='absolute top-0 h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white'
          enter='transition ease-out duration-200 transform'
          enterFrom='opacity-0 -translate-x-2'
          enterTo='opacity-100 translate-x-0'
          leave='transition ease-out duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <>
            <div className='shrink-0 ml-4 pr-2 pl-1 pt-1'>
              <Image
                className='rounded-lg'
                src={LogoBlack}
                width={100}
                height='100'
                alt='logo'
              />
            </div>
            <ul className='px-5 mt-1 font-sansCjk'>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={` font-medium text-black px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                  >
                    {item.navItems}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        </Transition>
      </div>
    </div>
  );
}
