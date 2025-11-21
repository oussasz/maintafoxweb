'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostContentProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage?: string | null;
    category: string;
    tags: string[];
    publishedAt: Date | null;
    updatedAt: Date;
    readingTime: string;
    viewCount: number;
    author: {
      name: string | null;
      image: string | null;
    };
  };
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { t } = useLanguage();

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand/5 to-slate-100 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand">
              {t.blogPost.home}
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand">
              {t.blogPost.blog}
            </Link>
            <span>/</span>
            <span className="text-brand">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-gradient-to-r from-brand to-brand-dark px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight text-brand md:text-5xl">{post.title}</h1>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name || ''}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : t.blogPost.draft}
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readingTime}
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {post.viewCount} {t.blogPost.views}
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="container mx-auto max-w-4xl px-4 -mt-10">
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        </section>
      )}

      {/* Content */}
      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Back to Blog */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-brand hover:text-accent font-semibold"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t.blogPost.backToPosts}
        </Link>
      </section>
    </main>
  );
}
