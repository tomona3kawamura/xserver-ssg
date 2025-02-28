import HTMLReactParser from "html-react-parser";
import { getBlogsDetail, getBlogsAllIds } from "@/app/hooks/useMicrocms";
import Link from "next/link";

export async function generateStaticParams() {
  const postIds = await getBlogsAllIds();

  return postIds.map((id: string) => ({
    news_id: id,
  }));
}

export default async function NewsDetail({
  params,
}: {
  params: { news_id: string };
}) {
  if (!params?.news_id) {
    return <></>;
  }
  const blog = await getBlogsDetail(params?.news_id);
  return (
    <div className="container mx-auto font-[family-name:var(--font-geist-sans)]">
      <div className="relative pb-24 overflow-hidden">
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
          <header className="h-30 pb-12">
            <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-conic from-gradient-3 to-gradient-4" />
            <p className="text-2xl text-center">
              <Link href="/">Blog Site</Link>
            </p>
          </header>
          {new Date(blog?.publishedAt).toLocaleDateString()}
          <h1>{blog?.title}</h1>
          <div>{HTMLReactParser(blog?.content)}</div>
        </div>
      </div>
    </div>
  );
}
