import Link from 'next/link';
import {LogoHBlack, LogoHWhite} from '@/public/svg/index';

export default function Logo({ top }: {top?:boolean}) {
  return (
    <Link href="/">
      <div className="shrink-0 -ml-4 md:ml-0 mr-4 mt-6 w-[100px] md:w-[183px]">
        {!top ?<LogoHBlack className="text-[90px] md:text-[113px] 3xl:text-[153px] md:ml-2 md:mb-10 lg:mb-12"/> : <LogoHWhite className="text-[90px] md:text-[153px] 2xl:text-[183px]"/>
      }
      </div>
    </Link>
  );
}
