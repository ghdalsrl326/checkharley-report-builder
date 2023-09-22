import React from "react";

type Props = {
  number: string;
  title: string;
  description: string;
};

const RecommendationItem = ({ number, title, description }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center z-10">
      <h2
        className={`text-[34px] md:text-[80px] text-[#ffffff99] font-semibold`}
      >
        {number}
      </h2>
      <div className="flex flex-col justify-between">
        <h2 className="text-[14px] md:text-[24px] font-semibold">{title}</h2>
        <h2 className="text-[12px] md:text-[18px] font-light">{description}</h2>
      </div>
    </div>
  );
};

export default RecommendationItem;
