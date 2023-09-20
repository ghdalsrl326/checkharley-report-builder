import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <ReviewCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewGrid;
