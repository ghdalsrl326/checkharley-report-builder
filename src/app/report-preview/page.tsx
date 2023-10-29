import Image from "next/image";
import React from "react";

export const metadata = {
  title: "체크할리 | CheckHarley - 점검 리포트 미리보기",
  description: "할리 데이비슨 전문 정비사의 점검 리포트를 확인하세요.",
};

const PreviewPage = () => {
  const images = [
    "/images/report-preview/CheckHarleyReport-01.png",
    "/images/report-preview/CheckHarleyReport-02.png",
    "/images/report-preview/CheckHarleyReport-03.png",
    "/images/report-preview/CheckHarleyReport-04.png",
    "/images/report-preview/CheckHarleyReport-05.png",
    "/images/report-preview/CheckHarleyReport-06.png",
    "/images/report-preview/CheckHarleyReport-07.png",
    "/images/report-preview/CheckHarleyReport-08.png",
    "/images/report-preview/CheckHarleyReport-09.png",
    "/images/report-preview/CheckHarleyReport-10.png",
  ];

  return (
    <section className="flex flex-col px-6 py-16 gap-12">
      <h1 className="text-3xl md:text-5xl font-bold">점검 리포트 미리보기</h1>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={image} width={1920} height={1080} />
      ))}
    </section>
  );
};

export default PreviewPage;
