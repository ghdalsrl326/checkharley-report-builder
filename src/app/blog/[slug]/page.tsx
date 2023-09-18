import { getBlogPost } from "@/service/blogPost";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getBlogPost(slug);

  console.log(post);
  return <div></div>;
};

export default PostPage;
