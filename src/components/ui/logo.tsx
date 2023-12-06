import Link from 'next/link';
import {LogoHBlack, LogoHWhite} from '@/public/svg/index';

export default function Logo({ top }: any) {
  return (
    <Link href="/">
      <div className="shrink-0 -ml-4 md:ml-0 mr-4 mt-2 w-[100px] md:w-[183px]">
        {!top ?<LogoHBlack className="text-[100px] md:text-[123px] lg:text-[153px] md:ml-2 md:mb-10 lg:mb-12"/> : <LogoHWhite className="text-[100px] md:text-[153px] lg:text-[183px]"/>
      }
      </div>
    </Link>
  );
}
