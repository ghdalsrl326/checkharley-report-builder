"use client";
import React from "react";
import Image from "next/image";
import MarkdownViewer from "./MarkdownViewer";
import ImageSlide from "./ImageSlide";
import AccordionItem from "./AccordionItem";
import { ImageType } from "@/data/report.type";

type Props = {
  comment: string;
  images: ImageType[];
  items: {
    title: string;
    measure: string;
    condition: string;
  }[];
};

const AccordionContent = ({ comment, images, items }: Props) => {
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
          <MarkdownViewer content={comment} />
        </div>
      </p>
      <p className="w-11/12 mb-9">
        <ImageSlide images={images} />
      </p>
      <p className="flex flex-col gap-4 w-11/12 mb-9">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            measure={item.measure}
            condition={item.condition}
          />
        ))}
      </p>
    </section>
  );
};

export default AccordionContent;
