import Logo from '@/public/images/logo-1.png';
import Image from 'next/image';
import { IconFb, IconIg, IconShare } from '@/public/svg';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 bg-background py-20'>
        <div className='flex flex-col justify-center items-center mb-2 md:mb-4 md:flex-row md:items-center md:justify-between md:px-[80px] lg:px-[280px] py-4 md:py-12'>
          {/* Logo */}
          <div className='mb-2'>
            <Image
              className='rounded-lg'
              src={Logo}
              width={184}
              height='184'
              alt='logo'
            />
          </div>

          {/* Service Nav as */}
          <div>
            <div className='hidden mb-10 ml-5 md:mb-0 md:flex flex-col justify-center items-center md:items-center text-sm text-gray-600 md:[writing-mode:vertical-lr]'>
              <Link href='/about-us' className=' text-white text-[22px]'>
                <span className='block' style={{ letterSpacing: '1.6em' }}>
                  文・域
                </span>
              </Link>
              <Link
                href='/about-us'
                className=' text-white md:ml-5 text-[22px]'
              >
                <span className='block' style={{ letterSpacing: '1em' }}>
                  聯絡文域
                </span>
              </Link>
              <Link
                href='/about-us'
                className='text-white md:ml-5 text-[22px] md:-mr-1'
              >
                <span className='block' style={{ letterSpacing: '1em' }}>
                  媒體報導
                </span>
              </Link>
              <Link
                href='/about-us'
                className=' text-white md:ml-5 lg:ml-[100px] text-[22px]'
              >
                <span className='block' style={{ letterSpacing: '0.6em' }}>
                  服務與流程
                </span>
              </Link>
              <Link
                href='/about-us'
                className=' text-white md:ml-5 text-[22px]'
              >
                <span className='block' style={{ letterSpacing: '1em' }}>
                  作品欣賞
                </span>
              </Link>
              <Link
                href='/about-us'
                className='text-white md:ml-5 text-[22px] md:-mr-1'
              >
                <span className='block' style={{ letterSpacing: '1em' }}>
                  關於文域
                </span>
              </Link>
            </div>
          </div>
        </div> 
        {/* Bottom area */}
        <div className='flex flex-col justify-center items-center md:-mt-20 md:flex md:flex-row md:items-center md:justify-between py-4 md:px-[90px] lg:px-[280px] md:py-12 '>
          {/* Social as */}
          <div className='flex mb-4 md:order-1 sx:ml-4 md:mb-0'>
            <Link
              href='#0'
              className='flex justify-center items-center text-white '
              aria-label='IG'
            >
              <IconIg className='text-[32px]' />
            </Link>
            <Link
              href='#0'
              className='flex justify-center items-center ml-4 text-white'
              aria-label='Fb'
            >
              <IconFb className='text-[32px]' />
            </Link>
            <Link
              href='#0'
              className='flex justify-center items-center ml-4 text-white'
              aria-label='Share'
            >
              <IconShare className='text-[30px]' />
            </Link>
          </div>
          {/* Copyrights note */}
          <div className='text-[18x] text-white font-syne ml-4'>
            &copy; 2023 by creer-design
          </div>
        </div>
      </div>
    </footer>
  );
}
