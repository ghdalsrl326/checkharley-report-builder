import React from "react";
import ReviewCard from "./ReviewCard";
import { PostPreview } from "@/data/post.type";

const ReviewGrid = ({
  posts,
  activeTab,
}: {
  posts: PostPreview[];
  activeTab: string;
}) => {
  const filteredPosts = posts.filter((post) => {
    if (activeTab === "전체") return true;
    return post.category === activeTab;
  });

  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredPosts.map((post) => (
        <li key={post.title}>
          <ReviewCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewGrid;
