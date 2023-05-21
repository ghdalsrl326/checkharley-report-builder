import React from "react";
import Image from "next/image";

const BikeMetaInfo = () => {
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
        <h1 className="text-3xl font-bold">스트리트 글라이드</h1>
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
          <h4 className="text-sm font-bold">자3827</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">연식</h4>
          <h4 className="text-sm font-bold">2020년</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">주행거리</h4>
          <h4 className="text-sm font-bold">114,23km</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">담당 정비사</h4>
          <h4 className="text-sm font-bold">최상열 정비사</h4>
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

export default BikeMetaInfo;
