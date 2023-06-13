"use client";
import React from "react";
import MarkdownViewer from "./MarkdownViewer";
import ImageSlide from "./ImageSlide";
import AccordionItem from "./AccordionItem";
import { ImageType } from "@/data/report.type";
import ChargingSystemLegend from "./ChargingSystemLegend";

type Props = {
  comment: string;
  images: ImageType[];
  items: {
    subTitle: string;
    measure: string;
    condition: string;
  }[];
  variant?: "chargingSystem" | "painting" | "tuning";
};

const AccordionContent = ({ comment, images, items, variant }: Props) => {
  if (variant === "chargingSystem") {
    return (
      <section className="flex flex-col items-center">
        <p className="w-full mb-9">
          <h4 className="mt-8 mb-4">✔️ 담당 정비사 코멘트</h4>
          <div>
            <MarkdownViewer content={comment} />
          </div>
        </p>
        <p className="w-full mb-9">
          <ImageSlide images={images} />
        </p>
        <p className="w-full flex flex-row gap-8 justify-end">
          <ChargingSystemLegend />
        </p>
        <p className="flex flex-col gap-4 w-full mb-9">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.subTitle}
              measure={item.measure}
              condition={item.condition}
              variant="chargingSystem"
            />
          ))}
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center bg-gray-100">
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
            title={item.subTitle}
            measure={item.measure}
            condition={item.condition}
          />
        ))}
      </p>
    </section>
  );
};

export default AccordionContent;
