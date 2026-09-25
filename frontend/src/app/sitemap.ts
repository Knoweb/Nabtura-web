import { MetadataRoute } from 'next';
import { fetchAPI } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nabtura.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/blog',
    '/capabilities/nursery-solutions',
    '/capabilities/smartcare',
    '/contact',
    '/possibilities',
    '/solutions',
    '/solutions/desert-greening',
    '/solutions/environmental-projects',
    '/solutions/landscapes',
    '/solutions/smart-greenhouses',
    '/solutions/smart-irrigation',
    '/solutions/smart-microgreens',
    '/solutions/urban-forests',
    '/who-we-serve',
    '/who-we-serve/developers',
    '/who-we-serve/growers-farms',
    '/who-we-serve/homes-villas',
    '/who-we-serve/hotels-resorts',
    '/who-we-serve/investors-partners',
    '/who-we-serve/landowners',
    '/who-we-serve/restaurants-fb',
    '/work-with-nabtura',
    '/legal/cookie-policy',
    '/legal/privacy-policy',
    '/legal/terms-of-use'
  ];

  const staticSitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  let blogSitemap: MetadataRoute.Sitemap = [];
  try {
    const res = await fetchAPI('/blogs?fields[0]=slug&fields[1]=updatedAt&pagination[limit]=1000');
    if (res && res.data) {
      blogSitemap = res.data.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.warn("Failed to fetch blogs for sitemap", error);
  }

  return [...staticSitemap, ...blogSitemap];
}
