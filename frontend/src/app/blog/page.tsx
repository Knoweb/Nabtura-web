import { fetchAPI } from "@/lib/api";
import Link from "next/link";

// We disable caching for this page so it shows new blogs right away in dev, 
// for production you might use revalidate or webhook based invalidation
export const revalidate = 0;

export default async function BlogIndexPage() {
  let blogs: any[] = [];
  try {
    const res = await fetchAPI("/blogs?populate=*&sort=createdAt:desc");
    if (res.data && res.data.length > 0) {
      blogs = res.data;
    }
  } catch (error) {
    console.warn("Failed to fetch blogs", error);
  }

  

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">LATEST INSIGHTS</h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore our latest articles, updates, and innovations in smart agriculture and intelligent green solutions.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p>No blog posts found. Check back later!</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Post (First Item) */}
            {blogs.length > 0 && (() => {
              const featured = blogs[0];
              const title = featured.title || featured.Title || "Untitled Post";
              const content = featured.content || featured.Content;
              const coverImage = featured.coverImage || featured.coverimage || featured.CoverImage;
              const imageUrl = coverImage 
                ? (coverImage.url.startsWith('http') ? coverImage.url : `http://localhost:1337${coverImage.url}`)
                : null;

              return (
                <Link 
                  href={`/blog/${featured.slug || featured.documentId}`}
                  className="group flex flex-col lg:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all hover:border-nabtura-green/50 shadow-2xl"
                >
                  <div className="relative w-full lg:w-2/3 h-72 lg:h-[450px] overflow-hidden bg-black/50">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600">
                        No Image
                      </div>
                    )}
                    <div className="absolute top-6 left-6 bg-nabtura-green text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 w-full lg:w-1/3 flex flex-col justify-center">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 line-clamp-3 group-hover:text-nabtura-green transition-colors leading-tight">
                        {title}
                      </h2>
                      {typeof content === 'string' && (
                        <p className="text-gray-400 text-base lg:text-lg line-clamp-4 mb-8">
                          {content.replace(/<[^>]*>?/gm, '')}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center text-base font-bold text-nabtura-green mt-auto uppercase tracking-widest">
                      Read Article <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Remaining Posts Grid */}
            {blogs.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {blogs.slice(1).map((blog) => {
                  const title = blog.title || blog.Title || "Untitled Post";
                  const content = blog.content || blog.Content;
                  const coverImage = blog.coverImage || blog.coverimage || blog.CoverImage;
                  
                  const imageUrl = coverImage 
                    ? (coverImage.url.startsWith('http') ? coverImage.url : `http://localhost:1337${coverImage.url}`)
                    : null;

                  return (
                    <Link 
                      key={blog.id} 
                      href={`/blog/${blog.slug || blog.documentId}`}
                      className="group flex flex-col h-[420px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all hover:border-nabtura-green/50 shadow-lg"
                    >
                      <div className="relative w-full h-56 overflow-hidden bg-black/50">
                        {imageUrl ? (
                          <img 
                            src={imageUrl} 
                            alt={title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-600">
                            No Image
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-nabtura-green transition-colors">
                            {title}
                          </h3>
                          {typeof content === 'string' && (
                            <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                              {content.replace(/<[^>]*>?/gm, '')}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center text-sm font-semibold text-nabtura-green mt-auto uppercase tracking-wider">
                          Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

