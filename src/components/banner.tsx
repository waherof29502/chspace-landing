'use client';
import Link from 'next/link';
import { IconMessage, IconLine } from '@/public/svg';
export default function Banner() {
  return (
    <div className='fixed bottom-[220px] right-2 w-auto z-50'>
      <div className='p-3 md:rounded flex flex-col justify-between'>
        <a
          className={`mt-3 flex items-center transition duration-150 ease-in-out`}
          href='https://line.com'
          target='_blank'
          rel='noreferrer'
        >
          <IconLine className='text-[48px] text-white hover:text-primary' />
        </a>

        <a
          className={`mt-3 flex items-center transition duration-150 ease-in-out`}
          href='https://instergram'
          target='_blank'
          rel='noreferrer'
        >
          <IconMessage className='text-[48px] text-white' />
        </a>
      </div>
    </div>
  );
}
