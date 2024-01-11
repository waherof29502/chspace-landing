
import Header from '@/src/components/ui/headers/header';
export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <main className="grow">{children}</main>
    </>
  );
}
