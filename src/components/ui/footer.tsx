import { IconFb, IconIg, IconShare, LogoVWhite } from '@/public/svg';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 bg-background rounded-xl -my-3 lg:m-[8px] py-20">
        <div className="flex flex-col mb-2 md:mb-4 p-10 xl:px-[120px] py-4 md:py-12">
          <div className="md:hidden flex justify-center items-center">
            <LogoVWhite className="text-[120px] pb-2" />
          </div>
          <div className="hidden md:flex justify-between w-full">
            {/* Logo */}
            <LogoVWhite className="text-[140px] ml-8" />
            {/* Service Nav as */}
            <div className="mb-10 ml-5 md:mb-0 md:flex flex-col justify-center items-center md:items-start text-sm text-gray-600 md:[writing-mode:vertical-lr]">
              <Link href="/chspace" className="item-center font-sansCjk text-white text-[22px] group">
                <div className="relative left-[16px] h-0 group-hover:h-2 w-[1.2px] bg-white transform transition-transform group-hover:ease-in group-hover:translate-y-1 duration-500" />
                <span className="block group-hover:translate-y-6 duration-500 tracking-[43.5px]">文・域</span>
              </Link>
              <Link href="/contact-us" className="item-center font-sansCjk text-white md:ml-5 text-[22px] group">
                <div className="relative left-[16px] h-0 group-hover:h-2 w-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-y-1 duration-500" />
                <span className="block group-hover:translate-y-6 duration-500" style={{ letterSpacing: '1em' }}>
                  聯絡文域
                </span>
              </Link>
              <Link
                href="/media-reports"
                className="items-center text-white font-sansCjk md:ml-5 text-[22px] md:-mr-1 group"
              >
                <div className="relative left-[16px] h-0 group-hover:h-2 w-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-y-1 duration-500" />
                <span className="block group-hover:translate-y-6 duration-500" style={{ letterSpacing: '1em' }}>
                  媒體報導
                </span>
              </Link>
              <Link
                href="/services"
                className="items-center text-white font-sansCjk md:ml-5 lg:ml-[100px] text-[22px] group"
              >
                <div className="relative left-[16px] h-0 group-hover:h-2 w-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-y-1 duration-500" />
                <span className="block group-hover:translate-y-6 duration-500 tracking-[11.2px]">服務與流程</span>
              </Link>
              <Link href="/portfolio" className="items-center text-white font-sansCjk md:ml-5 text-[22px] group">
                <div className="relative left-[16px] h-0 group-hover:h-2 w-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-y-1 duration-500" />
                <span className="block  group-hover:translate-y-6 duration-500" style={{ letterSpacing: '1em' }}>
                  作品欣賞
                </span>
              </Link>
              <Link
                href="/about-us"
                className="items-center text-white font-sansCjk md:ml-5 text-[22px] md:-mr-1 group"
              >
                <div className="relative left-[16px] h-0 group-hover:h-2 w-[1.2px] bg-white transform transition-transform group-hover:ease-in-out group-hover:translate-y-1 duration-500" />
                <span className="block group-hover:translate-y-6 duration-500" style={{ letterSpacing: '1em' }}>
                  關於文域
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom area */}
        <div className="flex flex-col justify-center items-center md:-mt-10 md:flex md:flex-row md:items-center md:justify-between py-4 md:px-[45px] lg:px-[40px] xl:px-[120px] md:py-12 ">
          {/* Social as */}
          <div className="flex mb-4 md:order-1 sx:ml-4 md:mb-0">
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
          {/* Copyrights note */}
          <div className="text-[18x] text-white font-syne ml-4">
            <Link href="https://creer-design.com/" target="_blank">
              &copy; 2023 by creer-design
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
