"use client";
import React, { useState } from "react";
import { ExpendablesInfo } from "@/data/report.type";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// {
//   oilComment,
//   oilImages,
//   engineOilMeasure,
//   isEngineOilError,
//   missionOilMeasure,
//   isMissionOilError,
//   primaryOilMeasure,
//   isPrimaryOilError,
//   frontBrakeOilMeasure,
//   isFrontBrakeOilError,
//   rearBrakeOilMeasure,
//   isRearBrakeOilError,
//   tireComment,
//   tireImages,
//   frontTireMeasure,
//   isFrontTireError,
//   rearTireMeasure,
//   isRearTireError,
//   brakeComment,
//   brakeImages,
//   frontBrakePadMeasure,
//   isFrontBrakePadError,
//   rearBrakePadMeasure,
//   isRearBrakePadError,
//   frontBrakeDiskMeasure,
//   isFrontBrakeDiskError,
//   rearBrakeDiskMeasure,
//   isRearBrakeDiskError,
//   extraComment,
//   extraImages,
//   beltTensionMeasure,
//   isBeltTensionError,
//   clutchLeverMeasure,
//   isClutchLeverError,
//   frontBrakeMeasure,
//   isFrontBrakeError,
//   rearBrakeMeasure,
//   isRearBrakeError,
//   sparkPlugMeasure,
//   isSparkPlugError,
// }
const ExpendablesInfo = (props: ExpendablesInfo) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
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
            <BsChevronDown />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ExpendablesInfo;
