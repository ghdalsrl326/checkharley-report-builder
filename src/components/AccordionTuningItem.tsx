import { AccTuningType } from "@/data/report.type";
import { urlFor } from "@/service/sanity";
import Image from "next/image";
import React from "react";
import MarkdownViewer from "./MarkdownViewer";
import ImageSlide from "./ImageSlide";

type Props = {
  idx: number;
};

const AccordionTuningItem = ({
  accTuningName,
  accTuningImages,
  accTuningBrand,
  accTuningCondition,
  accTuningComment,
  idx,
}: AccTuningType & Props) => {
  return (
    <section className="flex flex-col gap-4 items-start w-10/12 bg-gray-100 p-10 rounded-[0.25rem] mb-8">
      <div className="flex flex-row w-full justify-between">
        <h3 className="text-lg font-bold">{`${idx + 1}. ${accTuningName}`}</h3>
        {accTuningCondition === "이상있음" ? (
          <div className="text-center w-24 text-orange-500 bg-white text-xl font-bold border-solid border-[1px] border-orange-500 rounded-[1rem]">
            <p>이상있음</p>
          </div>
        ) : null}
      </div>
      <Image
        className="w-full"
        src={`/images/line_1.svg`}
        alt={"line_1"}
        width={760}
        height={31}
      />
      <p className="w-11/12 mb-9">
        <h4 className="mt-8 mb-4">✔️ 담당 정비사 코멘트</h4>
        <div className="pl-8">
          <MarkdownViewer content={accTuningComment} />
        </div>
      </p>
      <p className="w-11/12 mb-9">
        <ImageSlide images={accTuningImages} />
      </p>
      <p className="flex flex-row gap-10">
        <div className="flex flex-row gap-4">
          <h4>브랜드</h4>
          <h4 className="font-bold">{accTuningBrand}</h4>
        </div>
      </p>
    </section>
  );
};

export default AccordionTuningItem;
