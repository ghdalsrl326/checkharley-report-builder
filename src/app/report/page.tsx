import BikeInfo from "@/components/BikeInfo";
import CertInfo from "@/components/CertInfo";
import ElectronicsInfo from "@/components/ElectronicsInfo";
import EvaluationInfo from "@/components/EvaluationInfo";
import ExpendablesInfo from "@/components/ExpendablesInfo";
import SellerInfo from "@/components/SellerInfo";
import {
  getBikeInfo,
  getSellerInfo,
  getEvaluationComment,
  getCertInfo,
  getExpendablesInfo,
  getElectronicsInfo,
  getTuningInfo,
} from "@/service/report";
import React from "react";

//TDOO: 각 컴포넌트에서 쿼리 써서 받아오도록 수정
const ReportPage = async () => {
  const reportId = "9bc7b286-98ca-41cd-8cde-c082261e5246";

  const bikeInfo = await getBikeInfo(reportId);
  const sellerInfo = await getSellerInfo(reportId);
  const evaluationComment = await getEvaluationComment(reportId);
  const certInfo = await getCertInfo(reportId);
  const expendablesInfo = await getExpendablesInfo(reportId);
  const electronicsInfo = await getElectronicsInfo(reportId);
  const tuningInfo = await getTuningInfo(reportId);

  return (
    <>
      <BikeInfo {...bikeInfo} />
      <SellerInfo {...sellerInfo} />
      <EvaluationInfo {...evaluationComment} />
      <CertInfo {...certInfo} />
      <ExpendablesInfo {...expendablesInfo} />
      <ElectronicsInfo {...electronicsInfo} />
      {/* <TuningInfo {...tuningInfo} /> */}
      <div id="portal" />
    </>
  );
};

export default ReportPage;
