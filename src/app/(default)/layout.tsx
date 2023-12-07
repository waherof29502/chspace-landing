
import Header from '@/src/components/ui/header';
export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <main className="grow">{children}</main>
    </>
  );
}
