import { getAllBlogPostPreview } from "@/service/blogPost";
import React from "react";

const BlogPage = async () => {
  const previews = await getAllBlogPostPreview();

  return <div></div>;
};

export default BlogPage;
