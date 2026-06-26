import type { MetadataRoute } from 'next';

const BASE_URL = 'https://nestcraft.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/how-it-works',
    '/cost-calculator',
    '/about',
    '/contact',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
