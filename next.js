// Next.js Advanced Cheatsheet

// 1. Routing
// Basic page routing
// pages/about.js
export default function About() {
  return <h1>About Page</h1>
}

// Dynamic routes
// pages/posts/[id].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { post: {} }
  }
}

// 2. Data Fetching
// getStaticProps (Static Generation)
export async function getStaticProps(context) {
  const data = await fetch('https://api.example.com/data')
  return {
    props: { data },
    revalidate: 60 // ISR - revalidate every 60 seconds
  }
}

// getServerSideProps (Server-side Rendering)
export async function getServerSideProps(context) {
  return {
    props: { data: {} }
  }
}

// Client-side data fetching
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)
  if (error) return <div>Error</div>
  if (!data) return <div>Loading...</div>
  return <div>Hello {data.name}!</div>
}

// 3. API Routes
// pages/api/user.js
export default function handler(req, res) {
  const { method } = req
  
  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'John' })
      break
    case 'POST':
      res.status(200).json({ status: 'created' })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

// 4. Middleware
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)
  
  // Add new request headers
  requestHeaders.set('x-custom-header', 'custom-value')
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

// 5. Image Optimization
import Image from 'next/image'

function OptimizedImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  )
}

// 6. Internationalization
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
    ],
  },
}

// 7. Performance Optimization
// Component level code splitting
const DynamicComponent = dynamic(() => import('../components/hello'))

// Prefetching pages
import { useRouter } from 'next/router'
function MyComponent() {
  const router = useRouter()
  return (
    <button onMouseEnter={() => router.prefetch('/dashboard')}>
      Dashboard
    </button>
  )
}

// 8. Environment Variables
// .env.local
// DB_HOST=localhost
// API_KEY=secret

// Usage
console.log(process.env.DB_HOST)
console.log(process.env.NEXT_PUBLIC_API_KEY)

// 9. Custom App and Document
// pages/_app.js
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// 10. Error Handling
// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}

// pages/500.js
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
}

// Best Practices:
/*
1. Use proper folder structure
   - pages/
   - components/
   - lib/
   - public/
   - styles/

2. Implement proper SEO
   - Use next/head
   - Add meta tags
   - Implement proper sitemap
   - Handle robots.txt

3. Performance optimization
   - Use Image component
   - Implement proper code splitting
   - Use proper caching strategies
   - Optimize bundle size

4. Security considerations
   - Validate API routes
   - Implement proper authentication
   - Handle CORS properly
   - Sanitize user input

5. Development workflow
   - Use TypeScript
   - Implement proper testing
   - Use proper linting
   - Follow proper Git workflow
*/
