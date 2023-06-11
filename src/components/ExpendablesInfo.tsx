"use client";
import React, { useState } from "react";
import { ExpendablesInfo } from "@/data/report.type";
import { BsChevronUp as ArrowUpIcon } from "react-icons/bs";
import { FaOilCan as OilIcon } from "react-icons/fa";
import SummaryBoard from "./SummaryBoard";
import AccordionSection from "./AccordionSection";

const ExpendablesInfo = (props: ExpendablesInfo) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  return (
    <section className="flex flex-col items-center w-full">
      <span
        className="flex flex-row justify-between w-10/12 mt-4 mb-11 text-2xl text-black cursor-pointer"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <h3 className="text-2xl">소모품 체크</h3>
        <div
          className={`transform transition-transform duration-500 ${
            openAccordion ? "rotate-180" : ""
          }`}
        >
          <ArrowUpIcon />
        </div>
      </span>
      {openAccordion && (
        <>
          <SummaryBoard {...props} />
          <AccordionSection
            startAdornment={OilIcon}
            title="오일"
            comment={props.oilComment}
            images={props.oilImages}
            measures={[
              props.engineOilMeasure,
              props.missionOilMeasure,
              props.primaryOilMeasure,
              props.frontBrakeOilMeasure,
              props.rearBrakeOilMeasure,
            ]}
            conditions={[
              props.engineOilCondition,
              props.missionOilCondition,
              props.primaryOilCondition,
              props.frontBrakeOilCondition,
              props.rearBrakeOilCondition,
            ]}
          />
        </>
      )}
    </section>
  );
};

export default ExpendablesInfo;
