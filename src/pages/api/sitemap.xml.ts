import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // An array of all pages in your site
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/aboutus', changefreq: 'weekly', priority: 0.8 },
    { url: '/Courses', changefreq: 'weekly', priority: 0.8 },
    { url: '/java-full-stack', changefreq: 'weekly', priority: 0.8 },
    { url: '/react', changefreq: 'weekly', priority: 0.8 },
    { url: '/python-data-engineering', changefreq: 'weekly', priority: 0.8 },
    { url: '/aws-cloud-engineering', changefreq: 'weekly', priority: 0.8 },
    { url: '/snowflake', changefreq: 'weekly', priority: 0.8 },
    { url: '/data-analyst', changefreq: 'weekly', priority: 0.8 },
    { url: '/component/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/placements', changefreq: 'weekly', priority: 0.8 },
    { url: '/registration', changefreq: 'weekly', priority: 0.8 },
  ]

  try {
    const smStream = new SitemapStream({ hostname: 'https://www.ignitedmindslearning.com' })

    // Create a readable stream and pipe it to the SitemapStream
    const pipeline = Readable.from(pages).pipe(smStream)

    // Generate sitemap XML
    const xml = await streamToPromise(pipeline)

    res.writeHead(200, {
      'Content-Type': 'application/xml'
    })
    res.end(xml)
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}

