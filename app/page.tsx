import { getBlogsList } from "@/app/hooks/useMicrocms";
import Link from "next/link";

export default async function Home() {
  const blogsRes = await getBlogsList();
  const blogs = blogsRes.contents;
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
          <main className="flex-1 w-full">
            <ul className="w-full">
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
                >
                  <Link
                    as={`/news/${blog.id}`}
                    href={`/news/[slug]`}
                    className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4"
                  >
                    {blog.publishedAt && (
                      <p className="mb-3 font-bold uppercase opacity-60">
                        {new Date(blog?.publishedAt).toLocaleDateString()}
                      </p>
                    )}
                    <h2 className="text-2xl md:text-3xl">{blog.title}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className={`stroke-current text-primary`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 19l7-7-7-7"
                      ></path>
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
}