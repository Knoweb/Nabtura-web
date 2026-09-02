import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import Image from 'next/image';
import Link from 'next/link';
import BlogContent from '@/components/blog/BlogContent';

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
    console.warn("Failed to fetch blog post", error);
  }

  // Fallback to sample data for UI preview
  if (!blog) {
    const sampleBlogs = [
      {
        id: 1,
        documentId: "sample-1",
        title: "NABTURA Wins Global Innovation Award for Smart Agriculture",
        content: "<p>We are thrilled to announce that NABTURA has been recognized globally for our pioneering work in AI-driven microgreens and intelligent water management systems. This achievement marks a significant milestone in our journey towards sustainable urban farming.</p><p>By integrating advanced sensor technology with our proprietary closed-loop irrigation systems, we've demonstrated a 95% reduction in water usage compared to traditional methods, while simultaneously increasing crop yields by over 300%.</p><p>This award validates our core mission: to transform challenging environments into thriving, sustainable green spaces that nourish communities and protect our planet's most vital resources.</p>",
        slug: "nabtura-wins-global-innovation-award",
        coverImage: { url: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce11?w=800&q=80" },
      },
      {
        id: 2,
        documentId: "sample-2",
        title: "New Vertical Farming Facility Opens in Dubai",
        content: "<p>Our latest state-of-the-art vertical farming facility is now operational in the heart of Dubai. Capable of producing over 10 tons of fresh, organic microgreens monthly with 95% less water than traditional agriculture, this facility represents the future of food security in the region.</p><p>Designed specifically to combat the challenges of arid climates, the facility utilizes our 'Smart Cycle' technology to continuously sense, monitor, analyze, and optimize the growing conditions. This ensures perfect climate control 24/7, regardless of the extreme temperatures outside.</p><p>We invite local partners and restaurants to experience the unparalleled freshness of our hyper-local produce.</p>",
        slug: "new-vertical-farming-facility-dubai",
        coverImage: { url: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?w=800&q=80" },
      },
      {
        id: 3,
        documentId: "sample-3",
        title: "Strategic Partnership Announced for Desert Greening",
        content: "<p>NABTURA has officially partnered with leading environmental agencies to deploy our proprietary soil-regeneration and smart irrigation technology across arid regions, transforming unused desert spaces into thriving green ecosystems.</p><p>This massive undertaking will utilize our automated monitoring systems to ensure every drop of water is utilized efficiently. By establishing these 'Purposeful Green' zones, we are not only combating desertification but also creating vital micro-climates that support local biodiversity.</p><p>The first phase of the project has already commenced, and we look forward to sharing updates on this transformative journey.</p>",
        slug: "strategic-partnership-desert-greening",
        coverImage: { url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80" },
      }
    ];

    blog = sampleBlogs.find(b => b.slug === slug || b.documentId === slug);
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
    <main className="min-h-screen bg-transparent text-white pt-32 pb-20 relative z-10">
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

        {/* Content */}
        <BlogContent content={content} />
      </div>
    </main>
  );
}
