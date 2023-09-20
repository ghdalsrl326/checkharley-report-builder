import { Post, PostPreview } from "@/data/post.type";
import { client } from "./sanity";

export async function getAllReviewPostPreview(): Promise<PostPreview[]> {
  return client.fetch(
    `*[_type == "reviewPost"] | order(publishedAt desc) {mainImage, category, title, summary, tags, publishedAt}`
  );
}

export async function getReviewPost(title: string): Promise<Post> {
  return client.fetch(`*[_type == "reviewPost" && title == "${title}"][0]`);
}
