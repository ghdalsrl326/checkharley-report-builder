import { PostPreview } from "@/data/post.type";
import { urlFor } from "@/service/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { post: PostPreview };

const ReviewCard = ({
  post: { mainImage, title, summary, tags, publishedAt },
}: Props) => {
  const mainImageUrl = urlFor(mainImage).url();

  return (
    <Link href={`/review/${encodeURIComponent(title)}`}>
      <article className="overflow-hidden">
        <div className="filter grayscale hover:grayscale-0 transition duration-300">
          <Image
            className="w-full"
            src={mainImageUrl}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className="flex flex-col items-start p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <time className="self-start text-gray-700">
            {publishedAt.toString()}
          </time>
        </div>
      </article>
    </Link>
  );
};

export default ReviewCard;
