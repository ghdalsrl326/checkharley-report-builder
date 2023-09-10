import AccTuningInfo from "@/components/report/AccTuningInfo";
import BikeInfo from "@/components/report/BikeInfo";
import CertInfo from "@/components/report/CertInfo";
import ElectronicsInfo from "@/components/report/ElectronicsInfo";
import EvaluationInfo from "@/components/report/EvaluationInfo";
import ExpendablesInfo from "@/components/report/ExpendablesInfo";
import Footer from "@/components/report/Footer";
import PaintingsInfo from "@/components/report/PaintingsInfo";
import SellerInfo from "@/components/report/SellerInfo";
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
