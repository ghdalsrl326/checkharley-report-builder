import { PostPreview } from "@/data/post.type";
import { urlFor } from "@/service/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MarkdownViewer from "../report/MarkdownViewer";

type Props = { post: PostPreview };

const PostCard = ({
  post: { mainImage, title, summary, tags, publishedAt },
}: Props) => {
  const mainImageUrl = urlFor(mainImage).url();

  return (
    <Link href={`/posts/${encodeURIComponent(title)}`}>
      <article className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="filter grayscale hover:grayscale-0 transition duration-300">
          <Image
            className="w-full"
            src={mainImageUrl}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-start p-4 gap-4">
          <h3 className=" text-2xl font-bold">{title}</h3>
          <MarkdownViewer content={summary} />
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
