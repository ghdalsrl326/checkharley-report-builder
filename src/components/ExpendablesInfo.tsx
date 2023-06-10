"use client";
import React, { useState } from "react";
import { ExpendablesInfo } from "@/data/report.type";
import { BsChevronUp } from "react-icons/bs";
import SummaryBoard from "./SummaryBoard";

const ExpendablesInfo = (props: ExpendablesInfo) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-row justify-between w-10/12 mt-4 mb-11">
        <h3 className="text-2xl">소모품 체크</h3>
        <button
          className="text-2xl text-black"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          <div
            className={`transform transition-transform duration-500 ${
              openAccordion ? "rotate-180" : ""
            }`}
          >
            <BsChevronUp />
          </div>
        </button>
      </div>
      {openAccordion && <SummaryBoard {...props} />}
    </section>
  );
};

export default ExpendablesInfo;
