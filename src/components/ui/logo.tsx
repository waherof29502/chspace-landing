import Link from 'next/link';
import LogoWhite from '@/public/images/logo-white.png';
import LogoBlack from '@/public/images/logo-black.png';
import Image from 'next/image';

export default function Logo({top}:any) {
  return( 
  <Link href='/'>
     <div className='shrink-0 mr-4 mt-4'>
              <Image
                className='rounded-lg'
                src={!top ? LogoBlack : LogoWhite}
                width={183}
                height='183'
                alt='logo'
              />
            </div>
  </Link>)
}
