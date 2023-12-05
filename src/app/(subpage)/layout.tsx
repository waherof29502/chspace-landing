'use client';

import { useEffect } from 'react';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import OtherHeader from '@/src/components/ui/other-header';
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     disable: 'phone',
  //     duration: 700,
  //     easing: 'ease-out-cubic',
  //   });
  // });

  return (
    <>
      <OtherHeader />
      <main className="grow">{children}</main>
    </>
  );
}
