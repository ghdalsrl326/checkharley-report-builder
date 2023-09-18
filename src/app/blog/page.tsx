import PostsGrid from "@/components/blog/PostGrid";
import Tabs from "@/components/blog/Tabs";
import { getAllBlogPostPreview } from "@/service/blogPost";
import React from "react";

const BlogPage = async () => {
  const previews = await getAllBlogPostPreview();

  return (
    <div className="pl-44 pr-36 pt-40 pb-44 sm:p-4 md:p-16 lg:p-24">
      <h1 className="text-3xl font-bold mb-8">블로그</h1>
      <Tabs posts={previews} />
    </div>
  );
};

export default BlogPage;
