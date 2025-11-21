import { prisma } from '@/lib/prisma';
import BlogPageContent from '@/components/BlogPageContent';

// Ensure this page runs on Node.js runtime and is never statically generated
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Blog - Maintafox Insights',
  description:
    'Practical guides, benchmarks, and thought leadership on maintenance reliability, CMMS best practices, and digital transformation.',
};

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'APPROVED' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
      take: 20,
    });

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogPageContent posts={posts} />;
}
