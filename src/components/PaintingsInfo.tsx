"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PaintingsInfo } from "@/data/report.type";
import { BsChevronUp as ArrowUpIcon } from "react-icons/bs";
import AccordionContent from "@/components/AccordionContent";

const PaintingsInfo = (props: PaintingsInfo) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  return (
    <section className="flex flex-col items-center w-full">
      <span
        className="flex flex-row justify-between w-10/12 mt-4 mb-11 text-2xl text-black cursor-pointer"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <h3 className="text-2xl">도장 도막 측정</h3>
        <div
          className={`transform transition-transform duration-500 ${
            openAccordion ? "rotate-180" : ""
          }`}
        >
          <ArrowUpIcon />
        </div>
      </span>
      {openAccordion && (
        <section className="flex flex-col w-10/12 mb-4">
          <AccordionContent
            comment={props.paintingsComment}
            images={props.paintingsImages}
            items={[
              {
                subTitle: "F 휀다",
                measure: props.frontFenderMeasure,
                condition: props.frontFenderCondition,
              },
              {
                subTitle: "R 휀다",
                measure: props.rearFenderMeasure,
                condition: props.rearFenderCondition,
              },
              {
                subTitle: "연료 탱크",
                measure: props.fuelTankMeasure,
                condition: props.fuelTankCondition,
              },
              {
                subTitle: "사이드 커버",
                measure: props.sideCoverMeasure,
                condition: props.sideCoverCondition,
              },
              {
                subTitle: "새들백",
                measure: props.saddleBagMeasure,
                condition: props.saddleBagCondition,
              },
              {
                subTitle: "투어백",
                measure: props.tourBagMeasure,
                condition: props.tourBagCondition,
              },
            ]}
            // variant="chargingSystem"
          />
        </section>
      )}
      <Image
        className="w-10/12"
        src={`/images/line_1.svg`}
        alt={"line_1"}
        width={760}
        height={31}
      />
    </section>
  );
};

export default PaintingsInfo;
