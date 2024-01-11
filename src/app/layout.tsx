import '../styles/style.css';
import { Syne} from 'next/font/google';
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

const sansCjk = localFonts({
  src: '../../public/fonts/NotoSerifCJKtc-VF.otf',
  display: 'swap',
  variable: '--font-sansCjk'
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans-TW">
      <body
        className={cn('font-serif antialiased bg-white text-white tracking-tight' ,sansCjk.variable,syne.variable)}
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
