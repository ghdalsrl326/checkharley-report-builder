"use client";
import React, { useState } from "react";
import { BlogPostPreviewList } from "@/data/blogPost.type";
import PostsGrid from "./PostGrid";
import { BLOGTABS } from "@/data/constant";

const Tabs = ({ posts }: { posts: BlogPostPreviewList }) => {
  const [activeTab, setActiveTab] = useState("전체");

  return (
    <div className="w-full">
      <div className="flex font-medium relative mb-16 text-lg sm:text-lg md:text-xl lg:text-2xl">
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D6D6D6]" />
        {BLOGTABS.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 relative z-10 ${
              activeTab === tab
                ? "bg-white text-black font-bold"
                : "text-[#C2C2C2]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>
        ))}
      </div>
      <PostsGrid posts={posts} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
