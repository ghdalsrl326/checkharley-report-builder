import Tabs from "@/components/review/Tabs";
import { getAllReviewPostPreview } from "@/service/reviewPost";
import React from "react";

export const metadata = {
  title: "체크할리 | CheckHarley - 이용후기",
  description: "성공적인 중고 할리데이비슨 거래 후기를 확인하세요.",
};

const ReviewPage = async () => {
  const previews = await getAllReviewPostPreview();

  return (
    <section className="px-4 py-16 sm:p-16 md:p-16 lg:p-24">
      <h1 className="text-3xl font-bold mb-8">이용후기</h1>
      <Tabs posts={previews} />
    </section>
  );
};

export default ReviewPage;
