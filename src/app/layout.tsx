import '../styles/style.css';
import { Syne,Noto_Serif_TC } from 'next/font/google';
import localFonts from 'next/font/local';


import Banner from '@/src/components/banner';
import Footer from '@/src/components/ui/footer';
import ContactUs from '@/src/components/contact-us';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});
const serif = Noto_Serif_TC({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight:['200','300','400','500','600','700','900']
});
const sansCjk = localFonts({
  src: '../../public/fonts/NotoSerifCJKtc-VF.otf',
  variable: '--font-sansCjk',
});
// const sansCjk = Noto_Sans_CJK({
//   subsets: ['latin'],
//   variable: '--font-cjk',
//   display: 'swap',
// });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${serif.variable} font-sans ${syne.variable} ${sansCjk.variable} antialiased bg-white text-white tracking-tight`}
      >
        <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
        
          {children}
          <Banner />
          <ContactUs />
          <Footer />
        </div>
      </body>
    </html>
  );
}
