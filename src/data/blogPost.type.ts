import { ImageType } from "./image.type";

export type BlogPost = {
  mainImage: ImageType;
  category: string;
  title: string;
  summary: string;
  content: string;
  contentImages: ImageType[];
  tags: string[];
  publishedAt: string;
};

export type BlogPostPreview = Pick<
  BlogPost,
  "mainImage" | "category" | "title" | "summary" | "tags" | "publishedAt"
>;

export type BlogPostPreviewList = BlogPostPreview[];
