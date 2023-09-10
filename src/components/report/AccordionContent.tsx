import React from "react";
import MarkdownViewer from "@/components/report/MarkdownViewer";
import ImageSlide from "@/components/report/ImageSlide";
import AccordionItem from "@/components/report/AccordionItem";
import { ImageType } from "@/data/report.type";

type Props = {
  comment: string;
  images: ImageType[];
  items: {
    subTitle: string;
    measure: string;
    condition: string;
  }[];
  variant?: "chargingSystem" | "painting";
};

const AccordionContent = ({ comment, images, items, variant }: Props) => {
  const backgroundColor =
    variant === "chargingSystem" || "painting" ? "bg-white" : "bg-gray-100";

  return (
    <section className={`flex flex-col items-center ${backgroundColor}`}>
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
