// import { NextApiRequest, NextApiResponse } from 'next'
// import { SitemapStream, streamToPromise } from 'sitemap'
// import { Readable } from 'stream'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // An array of all pages in your site
//   const pages = [
//     { url: '/', changefreq: 'daily', priority: 1 },
//     { url: '/aboutus', changefreq: 'weekly', priority: 0.8 },
//     { url: '/Courses', changefreq: 'weekly', priority: 0.8 },
//     { url: '/java-full-stack', changefreq: 'weekly', priority: 0.8 },
//     { url: '/react', changefreq: 'weekly', priority: 0.8 },
//     { url: '/python-data-engineering', changefreq: 'weekly', priority: 0.8 },
//     { url: '/aws-cloud-engineering', changefreq: 'weekly', priority: 0.8 },
//     { url: '/snowflake', changefreq: 'weekly', priority: 0.8 },
//     { url: '/data-analyst', changefreq: 'weekly', priority: 0.8 },
//     { url: '/component/blog', changefreq: 'weekly', priority: 0.8 },
//     { url: '/placements', changefreq: 'weekly', priority: 0.8 },
//     { url: '/registration', changefreq: 'weekly', priority: 0.8 },
//   ]

//   try {
//     const smStream = new SitemapStream({ hostname: 'https://www.ignitedmindslearning.com' })

//     // Create a readable stream and pipe it to the SitemapStream
//     const pipeline = Readable.from(pages).pipe(smStream)

//     // Generate sitemap XML
//     const xml = await streamToPromise(pipeline)

//     res.writeHead(200, {
//       'Content-Type': 'application/xml'
//     })
//     res.end(xml)
//   } catch (error) {
//     console.error(error)
//     res.status(500).end()
//   }
// }




// import { NextApiRequest, NextApiResponse } from 'next'
// import { SitemapStream, streamToPromise } from 'sitemap'
// import { Readable } from 'stream'
// import { MetadataRoute } from 'next'

// // Dynamic Sitemap API Handler
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const pages = [
//     { url: '/', changefreq: 'daily', priority: 1 },
//     { url: '/aboutus', changefreq: 'monthly', priority: 0.5 },
//     { url: '/courses', changefreq: 'weekly', priority: 0.8 },
//     { url: '/java-full-stack', changefreq: 'weekly', priority: 0.8 },
//     { url: '/react', changefreq: 'weekly', priority: 0.8 },
//     { url: '/python-data-engineering', changefreq: 'weekly', priority: 0.8 },
//     { url: '/aws-cloud-engineering', changefreq: 'weekly', priority: 0.8 },
//     { url: '/snowflake', changefreq: 'weekly', priority: 0.8 },
//     { url: '/data-analyst', changefreq: 'weekly', priority: 0.8 },
//     { url: '/component/blog', changefreq: 'weekly', priority: 0.8 },
//     { url: '/placements', changefreq: 'weekly', priority: 0.8 },
//     { url: '/registration', changefreq: 'weekly', priority: 0.8 },
//   ]

//   try {
//     const smStream = new SitemapStream({ hostname: 'https://www.ignitedmindslearning.com' })
//     const pipeline = Readable.from(pages).pipe(smStream)
//     const xml = await streamToPromise(pipeline)

//     res.writeHead(200, {
//       'Content-Type': 'application/xml',
//     })
//     res.end(xml)
//   } catch (error) {
//     console.error(error)
//     res.status(500).end()
//   }
// }

// // Static Sitemap Generation for MetadataRoute
// export function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: 'https://www.ignitedmindslearning.com',
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 1,
//     },
//     {
//       url: 'https://www.ignitedmindslearning.com/aws-cloud-engineering',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: 'https://www.ignitedmindslearning.com/aboutus',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.5,
//     },
//     // Add other URLs...
//   ]
// }




import { MetadataRoute } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// Base URL for the website
const baseUrl = 'https://www.ignitedmindslearning.com';

// Static Sitemap Generation for MetadataRoute
export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/aws-cloud-engineering`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/java-full-stack`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/react`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/python-data-engineering`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/snowflake`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/data-analyst`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/registration`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}

// Dynamic Sitemap API Handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/aboutus', changefreq: 'monthly', priority: 0.5 },
    { url: '/courses', changefreq: 'weekly', priority: 0.8 },
    { url: '/java-full-stack', changefreq: 'weekly', priority: 0.8 },
    { url: '/react', changefreq: 'weekly', priority: 0.8 },
    { url: '/python-data-engineering', changefreq: 'weekly', priority: 0.8 },
    { url: '/aws-cloud-engineering', changefreq: 'weekly', priority: 0.8 },
    { url: '/snowflake', changefreq: 'weekly', priority: 0.8 },
    { url: '/data-analyst', changefreq: 'weekly', priority: 0.8 },
    { url: '/component/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/placements', changefreq: 'weekly', priority: 0.8 },
    { url: '/registration', changefreq: 'weekly', priority: 0.8 },
  ];

  try {
    const smStream = new SitemapStream({ hostname: baseUrl });
    const pipeline = Readable.from(pages).pipe(smStream);
    const xml = await streamToPromise(pipeline);

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });
    res.end(xml);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
