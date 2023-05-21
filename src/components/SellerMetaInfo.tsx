import React from "react";
import Image from "next/image";
import ImageUpload from "./ImageUpload";

const SellerMetaInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between w-10/12 mt-4 mb-11">
        <h3 className="text-2xl">셀러 판매 가격</h3>
        <h3 className="text-2xl text-orange-600">12,000,000￦</h3>
      </div>
      <Image
        className="w-10/12"
        src={`/images/line_1.svg`}
        alt={"line_1"}
        width={760}
        height={31}
      />
      <div className="flex flex-row justify-between w-10/12 mt-2 mb-8">
        <div className="flex gap-3">
          <h4 className="text-sm">이름</h4>
          <h4 className="text-sm font-bold">오은화</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">연락처</h4>
          <h4 className="text-sm font-bold">010-0000-0000</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">바이크 위치</h4>
          <h4 className="text-sm font-bold">서울특별시 어쩌고 저쩌고</h4>
        </div>
      </div>
      <ImageUpload />
    </div>
  );
};

export default SellerMetaInfo;
