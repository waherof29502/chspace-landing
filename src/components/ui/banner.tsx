'use client';
import { IconMessage, IconLine } from '@/public/svg';
export default function Banner() {
  return (
    <div className="fixed bottom-[70px] right-2 w-auto z-20">
      <div className="p-3 md:rounded flex flex-col justify-between">
        <a
          className={`mt-3 flex items-center transition duration-150 ease-in-out`}
          href="https://line.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconLine className="text-[42px] 3xl:text-[48px] text-[#1b1b1b] hover:text-[#2ccf55]" />
        </a>

        <a
          className={`mt-3 flex items-center transition duration-150 ease-in-out`}
          href="https://instergram"
          target="_blank"
          rel="noreferrer"
        >
          <IconMessage className="text-[42px] 3xl:text-[48px] text-[#1b1b1b] hover:text-[#4ab7e8]" />
        </a>
      </div>
    </div>
  );
}
