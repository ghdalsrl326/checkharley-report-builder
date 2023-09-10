"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AccTuningInfo } from "@/data/report.type";
import { BsChevronUp as ArrowUpIcon } from "react-icons/bs";
import SummaryBoard from "@/components/report/SummaryBoard";
import AccordionTuningItem from "@/components/report/AccordionTuningItem";

const AccTuningInfo = (props: AccTuningInfo) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  return (
    <section className="flex flex-col items-center w-full">
      <span
        className="flex flex-row justify-between w-10/12 mt-4 mb-11 text-2xl text-black cursor-pointer"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <h3 className="text-2xl">악세사리 ACC / 튜닝 용품 검진</h3>
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
          {props.accTuningList.map((item, idx) => (
            <AccordionTuningItem key={item.accTuningName} idx={idx} {...item} />
          ))}
        </>
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

export default AccTuningInfo;
