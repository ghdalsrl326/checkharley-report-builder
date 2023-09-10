import React from "react";
import Image from "next/image";
import { BikeInfo } from "@/data/report.type";

const BikeInfo = ({
  mechanic,
  bikeModelName,
  bikeNumber,
  modelYear,
  mileage,
}: BikeInfo) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w-11/12"
        src={`/images/line_top.svg`}
        alt={"line_top"}
        width={760}
        height={31}
      />
      <div className="w-10/12 text-left mt-8 mb-4">
        <h1 className="text-3xl font-bold">{bikeModelName}</h1>
      </div>
      <Image
        className="w-10/12"
        src={`/images/line_1.svg`}
        alt={"line_1"}
        width={760}
        height={31}
      />
      <div className="flex flex-row justify-between w-10/12 mt-2 mb-20">
        <div className="flex gap-3">
          <h4 className="text-sm">오토바이 번호</h4>
          <h4 className="text-sm font-bold">{bikeNumber}</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">연식</h4>
          <h4 className="text-sm font-bold">{modelYear}</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">주행거리</h4>
          <h4 className="text-sm font-bold">{mileage.toLocaleString()} km</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">담당 정비사</h4>
          <h4 className="text-sm font-bold">{mechanic} 정비사</h4>
        </div>
      </div>
      <Image
        className="w-10/12"
        src={`/images/line_8.svg`}
        alt={"line_8"}
        width={760}
        height={31}
      />
    </div>
  );
};

export default BikeInfo;
