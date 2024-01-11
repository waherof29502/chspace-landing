import Link from 'next/link';
import {LogoHBlack, LogoHWhite} from '@/public/svg/index';

export default function Logo({completions }: {completions?:number}) {
  return (
    <Link href="/">
      <div className="shrink-0 -ml-4 md:ml-0 mr-4 mt-6 w-[100px] md:w-[183px]">
        {completions !==0  ?<LogoHBlack className="text-[5.625rem] md:text-[6.25rem] wide:text-[8.15rem] sm:ml-2 md:mb-10 lg:mb-12"/> : <LogoHWhite className="text-[5.625rem] md:text-[9.5rem] 2xl:text-[11rem] sm:ml-2 md:ml-0"/>
      }
      </div>
    </Link>
  );
}
