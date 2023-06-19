import { AccTuningType } from "@/data/report.type";
import { urlFor } from "@/service/sanity";
import React from "react";

type Props = {
  idx: number;
};

const AccordionTuningItem = ({
  accTuningName,
  accTuningImage,
  accTuningLocation,
  accTuningBrand,
  accTuningGrade,
  accTuningCondition,
  idx,
}: AccTuningType & Props) => {
  return (
    <span className="flex flex-col gap-4 items-start w-5/12 bg-gray-100 p-10 rounded-[0.25rem] mb-8">
      <div className="flex flex-row w-full justify-between">
        <h3 className="text-lg font-bold">{`${idx + 1}. ${accTuningName}`}</h3>
        {accTuningCondition === "이상있음" ? (
          <div className="text-center w-24 text-orange-500 bg-white text-xl font-bold border-solid border-[1px] border-orange-500 rounded-[1rem]">
            <p>이상있음</p>
          </div>
        ) : null}
      </div>
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-xl w-full aspect-auto"
          src={urlFor(accTuningImage).fit("max").url()}
          alt="image_slide"
        />
      </div>
      <p className="flex flex-row gap-10">
        <div className="flex flex-row gap-4">
          <h4>위치</h4>
          <h4 className="font-bold">{accTuningLocation}</h4>
        </div>
        <div className="flex flex-row gap-4">
          <h4>브랜드</h4>
          <h4 className="font-bold">{accTuningBrand}</h4>
        </div>
        <div className="flex flex-row gap-4">
          <h4>상태</h4>
          <h4 className="flex flex-row gap-4">
            <span className={accTuningGrade === "상" ? "font-bold" : ""}>
              상
            </span>
            <span className={accTuningGrade === "중" ? "font-bold" : ""}>
              중
            </span>
            <span className={accTuningGrade === "하" ? "font-bold" : ""}>
              하
            </span>
          </h4>
        </div>
      </p>
    </span>
  );
};

export default AccordionTuningItem;
