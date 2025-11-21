import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import PostEditor from '@/components/PostEditor';

interface PageProps {
  params: { id: string };
}

export default async function EditBlogPage({ params }: PageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  const post = await prisma.post.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      title: true,
      excerpt: true,
      content: true,
      category: true,
      tags: true,
      coverImage: true,
      status: true,
      authorId: true,
    },
  });

  if (!post) {
    notFound();
  }

  // Check if user is author or admin
  if (post.authorId !== session.user.id && session.user.role !== 'ADMIN') {
    redirect('/blog');
  }

  // Transform null coverImage to undefined to match PostEditor props
  const initialData = {
    ...post,
    coverImage: post.coverImage || undefined,
  };

  return <PostEditor mode="edit" initialData={initialData} />;
}
