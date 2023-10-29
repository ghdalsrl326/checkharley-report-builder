import Image from "next/image";
import React from "react";

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
    <section className="py-4">
      {images.map((image, index) => (
        <Image key={index} src={image} alt={image} width={1920} height={1080} />
      ))}
    </section>
  );
};

export default PreviewPage;
