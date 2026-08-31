import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let blog = null;
  try {
    // Fetch the blog post by slug
    const res = await fetchAPI(`/blogs?filters[slug][$eq]=${slug}&populate=*`);
    if (res.data && res.data.length > 0) {
      blog = res.data[0];
    } else {
      // If not found by slug, try by documentId just in case
      const idRes = await fetchAPI(`/blogs/${slug}?populate=*`);
      if (idRes.data) {
        blog = idRes.data;
      }
    }
  } catch (error) {
    console.error("Failed to fetch blog post", error);
  }

  if (!blog) {
    notFound();
  }

  const title = blog.title || blog.Title || "Untitled Post";
  const content = blog.content || blog.Content;
  // Check variations of cover image naming
  const coverImage = blog.coverImage || blog.coverimage || blog.CoverImage;

  const imageUrl = coverImage 
    ? (coverImage.url.startsWith('http') ? coverImage.url : `http://localhost:1337${coverImage.url}`)
    : null;

  return (
    <main className="min-h-screen bg-nabtura-slate text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb or Back Button */}
        <Link href="/blog" className="inline-block mb-8 text-nabtura-green hover:text-white transition-colors">
          &larr; Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

        {/* Cover Image */}
        {imageUrl && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={imageUrl} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content - Strapi v5 rich text or basic text */}
        <div className="prose prose-lg prose-invert max-w-none">
          {typeof content === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p className="text-gray-300 whitespace-pre-wrap">
              {/* Fallback if it's JSON blocks */}
              {content ? JSON.stringify(content, null, 2) : "No content available for this post."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
