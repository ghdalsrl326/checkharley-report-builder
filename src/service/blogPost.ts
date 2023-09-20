import { Post, PostPreview } from "@/data/post.type";
import { client } from "./sanity";

export async function getAllBlogPostPreview(): Promise<PostPreview[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {mainImage, category, title, summary, tags, publishedAt}`
  );
}

export async function getBlogPost(title: string): Promise<Post> {
  return client.fetch(`*[_type == "blogPost" && title == "${title}"][0]`);
}
