"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { BsChevronUp as ArrowUpIcon } from "react-icons/bs";
import { ImageType } from "@/data/report.type";
import AccordionContent from "@/components/report/AccordionContent";
import Image from "next/image";

type Props = {
  startAdornment: IconType;
  title: string;
  comment: string;
  images: ImageType[];
  subTitles: string[];
  measures: string[];
  conditions: string[];
};

const AccordionSection = ({
  startAdornment: StartAdornment,
  title,
  comment,
  images,
  subTitles,
  measures,
  conditions,
}: Props) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  return (
    <section className="flex flex-col w-10/12 mb-4">
      <span
        className="flex flex-row items-center justify-between w-full aspect-[15/1] pl-8 pr-8 rounded-[0.25rem] bg-gray-100 object-contain text-2xl text-black cursor-pointer"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <div className="flex flex-row items-center gap-4">
          <StartAdornment />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-row items-center gap-4">
          {conditions.filter((condition) => condition === "이상있음").length ? (
            <div className="text-center w-24 text-orange-500 bg-white text-xl font-bold border-solid border-[1px] border-orange-500 rounded-[1rem]">
              <p>이상있음</p>
            </div>
          ) : null}
          <div
            className={`transform transition-transform duration-500 ${
              openAccordion ? "rotate-180" : ""
            }`}
          >
            <ArrowUpIcon />
          </div>
        </div>
      </span>
      {openAccordion && (
        <>
          <Image
            className="w-full"
            src={`/images/line_1.svg`}
            alt={"line_1"}
            width={760}
            height={31}
          />
          <AccordionContent
            comment={comment}
            images={images}
            items={measures.map((measure, index) => ({
              subTitle: subTitles[index],
              measure: measure,
              condition: conditions[index],
            }))}
          />
        </>
      )}
    </section>
  );
};

export default AccordionSection;
