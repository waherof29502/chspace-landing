import OtherHeader from '@/src/components/ui/other-header';
export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OtherHeader />
      <main className='grow'>{children}</main>
    </>
  );
}
