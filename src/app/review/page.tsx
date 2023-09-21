import Tabs from "@/components/review/Tabs";
import { getAllReviewPostPreview } from "@/service/reviewPost";
import React from "react";

const ReviewPage = async () => {
  const previews = await getAllReviewPostPreview();

  return (
    <div className="p-4 sm:p-16 md:p-16 lg:p-24">
      <h1 className="text-3xl font-bold mb-8">이용후기</h1>
      <Tabs posts={previews} />
    </div>
  );
};

export default ReviewPage;
