import ArticleHeader from '@/src/components/ui/headers/article-header';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleHeader />
      <main className="grow">{children}</main>
    </>
  );
}
