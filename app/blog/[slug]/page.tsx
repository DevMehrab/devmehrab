import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getPost(slug: string) {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    console.log("👉 Next.js is looking for the file here:", filePath);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = getPost(slug);
  if (!post) return {};

  const { title, description, publishedAt, tags, canonicalUrl } =
    post.frontmatter;
  const siteUrl = "https://devmehrab.com";

  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalUrl || `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${siteUrl}/blog/${slug}`,
      authors: ["Mehrab Hossain"],
      tags: tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    author: {
      "@type": "Person",
      name: "Mehrab Hossain",
      url: "https://devmehrab.com",
    },
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt || frontmatter.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devmehrab.com/blog/${slug}`,
    },
    keywords: frontmatter.tags?.join(", "),
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-32 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-normal md:leading-18 mb-4">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm">
          <time dateTime={frontmatter.publishedAt}>
            {new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>//</span>
          <span>By Mehrab Hossain</span>
        </div>
      </header>

      <div className="markdown-content">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
