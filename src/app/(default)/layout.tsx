
import Footer from '@/src/components/ui/footer';
import Header from '@/src/components/ui/header';
import ActiveSectionContextProvider from '@/src/context/active-section-context';
export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
    <ActiveSectionContextProvider>
      <Header />
      <main className="grow">{children}</main>
    </ActiveSectionContextProvider>
    </>
  );
}
