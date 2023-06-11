"use client";
import { CertInfo, ImageType } from "@/data/report.type";
import React, { useState } from "react";
import Image from "next/image";
import ModalPortal from "./ModalPortal";
import ImageModal from "./ImageModal";
import { urlFor } from "@/service/sanity";

const CertInfo = ({
  abolitionCertCondition,
  abolitionCertImage,
  transferCertwithStampCondition,
  transferCertwithStampImage,
  sellerIdCardCondition,
  sellerIdCardImage,
  keyCountCondition,
  keyCountImage,
}: CertInfo) => {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState<ImageType>(abolitionCertImage);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between w-10/12 mt-4 mb-11">
        <h3 className="text-2xl">기본 사항</h3>
        <h3 className="text-sm text-gray-400/75">
          * 각 항목을 클릭하여 관련된 이미지를 직접 확인해 보세요
        </h3>
      </div>
      <div className="flex flex-wrap justify-center w-10/12 gap-4">
        <button
          className="flex flex-row justify-between items-center rounded-lg bg-gray-800/5 w-full md:w-1/2 lg:w-1/3 aspect-[5/1] px-4 border-2 hover:border-orange-500"
          onClick={() => {
            setOpenModal(true);
            setImage(abolitionCertImage);
          }}
        >
          <h4>✔️ 폐지 증명서</h4>
          <h4 className="font-bold">
            {abolitionCertCondition ? "이상있음" : "이상없음"}
          </h4>
        </button>
        <button
          className="flex flex-row justify-between items-center rounded-lg bg-gray-800/5 w-full md:w-1/2 lg:w-1/3 aspect-[5/1] px-4 border-2 hover:border-orange-500"
          onClick={() => {
            setOpenModal(true);
            setImage(transferCertwithStampImage);
          }}
        >
          <h4>✔️ 자동차 양도 증명서</h4>
          <h4 className="font-bold">
            {transferCertwithStampCondition ? "이상있음" : "이상없음"}
          </h4>
        </button>
        <button
          className="flex flex-row justify-between items-center rounded-lg bg-gray-800/5 w-full md:w-1/2 lg:w-1/3 aspect-[5/1] px-4 border-2 hover:border-orange-500"
          onClick={() => {
            setOpenModal(true);
            setImage(sellerIdCardImage);
          }}
        >
          <h4>✔️ 셀러 신분증 사본 확보</h4>
          <h4 className="font-bold">
            {sellerIdCardCondition ? "완료" : "진행중"}
          </h4>
        </button>
        <button
          className="flex flex-row justify-between items-center rounded-lg bg-gray-800/5 w-full md:w-1/2 lg:w-1/3 aspect-[5/1] px-4 border-2 hover:border-orange-500"
          onClick={() => {
            setOpenModal(true);
            setImage(keyCountImage);
          }}
        >
          <h4>✔️ 열쇠 개수 (키팝/열쇠)</h4>
          <h4 className="font-bold">{keyCountCondition}</h4>
        </button>
      </div>
      {openModal && (
        <ModalPortal>
          <ImageModal onClose={() => setOpenModal(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={urlFor(image).fit("max").url()} alt="certImage" />
          </ImageModal>
        </ModalPortal>
      )}
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

export default CertInfo;
