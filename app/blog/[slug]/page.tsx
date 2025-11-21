import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import BlogPostContent from '@/components/BlogPostContent';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface PageProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug, status: 'APPROVED' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author.name || ''],
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  // Increment view count (already done in API, but good to track)
  // We don't await this to avoid blocking the render
  fetch(`${process.env.NEXTAUTH_URL}/api/posts/${post.id}`, {
    method: 'GET',
    cache: 'no-store',
  }).catch(() => {});

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Maintafox',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.maintafox.systems/logo.png',
              },
            },
            datePublished: post.publishedAt?.toISOString(),
            dateModified: post.updatedAt.toISOString(),
          }),
        }}
      />

      <BlogPostContent post={post} />
    </>
  );
}
