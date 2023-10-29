import PostsGrid from "@/components/blog/PostGrid";
import Tabs from "@/components/blog/Tabs";
import { getAllBlogPostPreview } from "@/service/blogPost";
import React from "react";

export const metadata = {
  title: "체크할리 | CheckHarley - 블로그",
  description: "할리데이비슨 라이딩과 관련된 모든 것을 알려드립니다.",
};

const BlogPage = async () => {
  const previews = await getAllBlogPostPreview();

  return (
    <section className="px-4 py-16 sm:p-16 md:p-16 lg:p-24">
      <h1 className="text-3xl font-bold mb-8">블로그</h1>
      <Tabs posts={previews} />
    </section>
  );
};

export default BlogPage;
