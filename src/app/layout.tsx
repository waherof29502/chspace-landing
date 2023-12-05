import '../styles/style.css';
import { Syne, Noto_Serif_TC } from 'next/font/google';
import localFonts from 'next/font/local';
import { cn } from '@/src/utils/utils';

import Banner from '@/src/components/ui/banner';
import Footer from '@/src/components/ui/footer';
import ContactUs from '@/src/components/ui/contact-us';
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap'
});
// const serifNoto = Noto_Serif_TC({
//   subsets: ['latin'],
//   variable: '--font-serifNoto',
//   preload: false,
//   display: 'swap',
//   weight:['200','300','400','500','600','700','900']
// });
const sansCjk = localFonts({
  src: '../../public/fonts/NotoSerifCJKtc-VF.otf',
  display: 'swap',
  variable: '--font-sansCjk'
});
// const sansCjk = Noto_Sans_CJK({
//   subsets: ['latin'],
//   variable: '--font-cjk',
//   display: 'swap',
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans-TW">
      <body
        className={cn('font-serif antialiased bg-white text-white tracking-tight', syne.variable, sansCjk.variable)}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Banner />
          <ContactUs />
          <Footer />
        </div>
      </body>
    </html>
  );
}
