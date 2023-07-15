import AccTuningInfo from "@/components/AccTuningInfo";
import BikeInfo from "@/components/BikeInfo";
import CertInfo from "@/components/CertInfo";
import ElectronicsInfo from "@/components/ElectronicsInfo";
import EvaluationInfo from "@/components/EvaluationInfo";
import ExpendablesInfo from "@/components/ExpendablesInfo";
import Footer from "@/components/Footer";
import PaintingsInfo from "@/components/PaintingsInfo";
import SellerInfo from "@/components/SellerInfo";
import {
  getBikeInfo,
  getSellerInfo,
  getEvaluationComment,
  getCertInfo,
  getExpendablesInfo,
  getElectronicsInfo,
  getAccTuningInfo,
  getPaintingsInfo,
} from "@/service/report";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const ReportPage = async ({ params: { slug } }: Props) => {
  const reportId = slug;
  const bikeInfo = await getBikeInfo(reportId);
  const sellerInfo = await getSellerInfo(reportId);
  const evaluationComment = await getEvaluationComment(reportId);
  const certInfo = await getCertInfo(reportId);
  const expendablesInfo = await getExpendablesInfo(reportId);
  const electronicsInfo = await getElectronicsInfo(reportId);
  const paintingsInfo = await getPaintingsInfo(reportId);
  const accTuningInfo = await getAccTuningInfo(reportId);

  return (
    <>
      <BikeInfo {...bikeInfo} />
      <SellerInfo {...sellerInfo} />
      <EvaluationInfo {...evaluationComment} />
      <CertInfo {...certInfo} />
      <ExpendablesInfo {...expendablesInfo} />
      <ElectronicsInfo {...electronicsInfo} />
      <PaintingsInfo {...paintingsInfo} />
      <AccTuningInfo {...accTuningInfo} />
      <Footer mechanic={bikeInfo.mechanic} />
      <div id="portal" />
    </>
  );
};

export default ReportPage;
