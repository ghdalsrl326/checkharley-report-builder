import React from "react";
import Image from "next/image";
import { SellerInfo } from "@/data/report.type";
import { urlFor } from "@/service/sanity";

const SellerInfo = ({
  price,
  sellerName,
  sellerPhone,
  bikeLocation,
  salesArticleCaptureImage,
  salesArticleURL,
}: SellerInfo) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between w-10/12 mt-4 mb-11">
        <h3 className="text-2xl">셀러 판매 가격</h3>
        <h3 className="text-2xl text-orange-600">{price.toLocaleString()}￦</h3>
      </div>
      <Image
        className="w-10/12"
        src={`/images/line_1.svg`}
        alt={"line_1"}
        width={760}
        height={31}
      />
      <div className="flex flex-row justify-between w-10/12 mt-2 mb-11">
        <div className="flex gap-3">
          <h4 className="text-sm">이름</h4>
          <h4 className="text-sm font-bold">{sellerName}</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">연락처</h4>
          <h4 className="text-sm font-bold">{sellerPhone}</h4>
        </div>
        <div className="flex gap-3">
          <h4 className="text-sm">바이크 위치</h4>
          <h4 className="text-sm font-bold">{bikeLocation}</h4>
        </div>
      </div>
      <div className="flex flex-row justify-center w-10/12">
        <a href={salesArticleURL}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(salesArticleCaptureImage).fit("max").url()}
            alt="salesArticleCaptureImage"
          />
        </a>
      </div>
      <Image
        className="w-10/12 mt-20"
        src={`/images/line_8.svg`}
        alt={"line_8"}
        width={760}
        height={31}
      />
    </div>
  );
};

export default SellerInfo;
