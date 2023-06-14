"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ElectronicsInfo } from "@/data/report.type";
import { BsChevronUp as ArrowUpIcon } from "react-icons/bs";
import AccordionContent from "./AccordionContent";

const ElectronicsInfo = (props: ElectronicsInfo) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  return (
    <section className="flex flex-col items-center w-full">
      <span
        className="flex flex-row justify-between w-10/12 mt-4 mb-11 text-2xl text-black cursor-pointer"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <h3 className="text-2xl">충전 시스템 점검</h3>
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
            comment={props.chargingSystemComment}
            images={props.chargingSystemImages}
            items={[
              {
                subTitle: "최초 배터리 전압",
                measure: props.initialVoltageMeasure,
                condition: props.initialVoltageCondition,
              },
              {
                subTitle: "충전 전압",
                measure: props.chargedVoltageMeasure,
                condition: props.chargedVoltageCondition,
              },
              {
                subTitle: "엔진 쿨다운(15분) 전압 회복",
                measure: props.engineCooldownVoltageMeasure,
                condition: props.engineCooldownVoltageCondition,
              },
              {
                subTitle: "배터리 육안 검사",
                measure: "",
                condition: props.batteryLooksCondition,
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

export default ElectronicsInfo;
