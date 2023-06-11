"use client";
import React from "react";
import Image from "next/image";
import { ExpendablesInfo } from "@/data/report.type";
import MarkdownViewer from "./MarkdownViewer";
import ImageSlide from "./ImageSlide";

const AccordionContent = (props: ExpendablesInfo) => {
  return (
    <section className="flex flex-col items-center bg-gray-100">
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
          <MarkdownViewer content={props.oilComment} />
        </div>
      </p>
      <p className="pl-6 mb-9">
        <ImageSlide images={props.oilImages} />
      </p>
    </section>
  );
};

export default AccordionContent;
