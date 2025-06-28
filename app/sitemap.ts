import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gaggleniti.com';
  const now = new Date().toISOString();

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
    { url: `${baseUrl}/plans`, lastModified: now },
    { url: `${baseUrl}/catalog`, lastModified: now },
    { url: `${baseUrl}/login`, lastModified: now },
  ];
}
