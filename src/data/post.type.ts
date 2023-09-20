import { ImageType } from "./image.type";

export type Post = {
  mainImage: ImageType;
  category: string;
  title: string;
  summary: string;
  content: string;
  contentImages: ImageType[];
  tags: string[];
  publishedAt: string;
};

export type PostPreview = Pick<
  Post,
  "mainImage" | "category" | "title" | "summary" | "tags" | "publishedAt"
>;
