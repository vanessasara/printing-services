import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.queries'

// Custom components for rendering Portable Text blocks
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-6 relative w-full h-96">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Image'}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      )
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="text-primary underline hover:no-underline"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
}

interface PortableTextRendererProps {
  value: any
  className?: string
}

export default function PortableTextRenderer({ value, className = '' }: PortableTextRendererProps) {
  if (!value) return null

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  )
}
