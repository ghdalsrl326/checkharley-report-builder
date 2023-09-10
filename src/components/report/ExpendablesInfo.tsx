"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ExpendablesInfo } from "@/data/report.type";
import { BsChevronUp as ArrowUpIcon } from "react-icons/bs";
import { BsSignStopFill as StopIcon } from "react-icons/bs";
import { FaOilCan as OilIcon } from "react-icons/fa";
import { MdTireRepair as TireIcon } from "react-icons/md";
import { GiGears as ExtraIcon } from "react-icons/gi";
import SummaryBoard from "@/components/report/SummaryBoard";
import AccordionSection from "@/components/report/AccordionSection";

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
            subTitles={[
              "엔진오일 양",
              "미션오일 양",
              "프라이머리 오일 양",
              "프론트 브레이크 오일 양",
              "리어 브레이크 오일 양",
            ]}
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
          <AccordionSection
            startAdornment={TireIcon}
            title="타이어"
            comment={props.tireComment}
            images={props.tireImages}
            subTitles={["F 타이어 트레드 깊이", "R 타이어 트레드 깊이"]}
            measures={[props.frontTireMeasure, props.rearTireMeasure]}
            conditions={[props.frontTireCondition, props.rearTireCondition]}
          />
          <AccordionSection
            startAdornment={StopIcon}
            title="브레이크"
            comment={props.brakeComment}
            images={props.brakeImages}
            subTitles={[
              "F 브레이크 패드 두께",
              "R 브레이크 패드 두께",
              "F 브레이크 디스크 두께",
              "R 브레이크 디스크 두께",
            ]}
            measures={[
              props.frontBrakePadMeasure,
              props.rearBrakePadMeasure,
              props.frontBrakeDiskMeasure,
              props.rearBrakeDiskMeasure,
            ]}
            conditions={[
              props.frontBrakePadCondition,
              props.rearBrakePadCondition,
              props.frontBrakeDiskCondition,
              props.rearBrakeDiskCondition,
            ]}
          />
          <AccordionSection
            startAdornment={ExtraIcon}
            title="기타"
            comment={props.extraComment}
            images={props.extraImages}
            subTitles={[
              "벨트 텐션",
              "클러치 레버 유격",
              "F 브레이크 레버 유격",
              "R 브레이크 레버 유격",
              "스파크플러그",
            ]}
            measures={[
              props.beltTensionMeasure,
              props.clutchLeverMeasure,
              props.frontBrakeLeverMeasure,
              props.rearBrakeLeverMeasure,
              props.sparkPlugMeasure,
            ]}
            conditions={[
              props.beltTensionCondition,
              props.clutchLeverCondition,
              props.frontBrakeLeverCondition,
              props.rearBrakeLeverCondition,
              props.sparkPlugCondition,
            ]}
          />
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

export default ExpendablesInfo;
