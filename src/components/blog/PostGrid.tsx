import React from "react";
import PostCard from "./PostCard";
import { BlogPostPreviewList } from "@/data/blogPost.type";

const PostsGrid = ({
  posts,
  activeTab,
}: {
  posts: BlogPostPreviewList;
  activeTab: string;
}) => {
  const filteredPosts = posts.filter((post) => {
    if (activeTab === "전체") return true;
    return post.category === activeTab;
  });

  return (
    <ul className="grid gap-4 grid-cols-1">
      {filteredPosts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
