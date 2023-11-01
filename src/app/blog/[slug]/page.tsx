import PostContent from "@/components/blog/PostContent";
import { getBlogPost } from "@/service/blogPost";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/service/sanity";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getBlogPost(decodeURIComponent(slug));

  return (
    <article className="overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-fit h-fit max-h-[500px]"
        src={urlFor(post.mainImage).url()}
        alt={post.title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
};

export default PostPage;
