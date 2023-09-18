import { BlogPost, BlogPostPreviewList } from "@/data/blogPost.type";
import { client } from "./sanity";

export async function getAllBlogPostPreview(): Promise<BlogPostPreviewList> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {mainImage, category, title, summary, tags, publishedAt}`
  );
}

export async function getBlogPost(title: string): Promise<BlogPost> {
  return client.fetch(`*[_type == "blogPost" && title == "${title}"][0]`);
}
