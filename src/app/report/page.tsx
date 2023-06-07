import BikeInfo from "@/components/BikeInfo";
import CertInfo from "@/components/CertInfo";
import EvaluationInfo from "@/components/EvaluationInfo";
import SellerInfo from "@/components/SellerInfo";
import { getReport } from "@/service/report";
import React from "react";

//TDOO: 각 컴포넌트에서 쿼리 써서 받아오도록 수정
const ReportPage = async () => {
  const report = await getReport("9bc7b286-98ca-41cd-8cde-c082261e5246");
  const { mechanic, bikeModelName, bikeNumber, modelYear, mileage } = report;
  const {
    price,
    sellerName,
    sellerPhone,
    bikeLocation,
    salesArticleCaptureImage,
    salesArticleURL,
  } = report;
  const {
    evaluationComment,
    evaluationGrade,
    evaluationExterior,
    evaluationExpendables,
    evaluationElectronics,
    evaluationPainting,
    evaluationEngine,
  } = report;
  const {
    abolitionCertComment,
    abolitionCertImage,
    transferCertwithStampComment,
    transferCertwithStampImage,
    sellerIdCardComment,
    sellerIdCardImage,
    keyCountComment,
    keyCountImage,
  } = report;
  const {
    oilComment,
    oilImages,
    engineOilMeasure,
    isEngineOilError,
    missionOilMeasure,
    isMissionOilError,
    primaryOilMeasure,
    isPrimaryOilError,
    frontBrakeOilMeasure,
    isFrontBrakeOilError,
    rearBrakeOilMeasure,
    isRearBrakeOilError,
    tireComment,
    tireImages,
    frontTireMeasure,
    isFrontTireError,
    rearTireMeasure,
    isRearTireError,
    brakeComment,
    brakeImages,
    frontBrakePadMeasure,
    isFrontBrakePadError,
    rearBrakePadMeasure,
    isRearBrakePadError,
    frontBrakeDiskMeasure,
    isFrontBrakeDiskError,
    rearBrakeDiskMeasure,
    isRearBrakeDiskError,
    extraComment,
    extraImages,
    beltTensionMeasure,
    isBeltTensionError,
    clutchLeverMeasure,
    isClutchLeverError,
    frontBrakeMeasure,
    isFrontBrakeError,
    rearBrakeMeasure,
    isRearBrakeError,
    sparkPlugMeasure,
    isSparkPlugError,
  } = report;
  const {
    chargingSystemComment,
    chargingSystemImages,
    initialVoltageMeasure,
    isInitialVoltageError,
    chargedVoltageMeasure,
    isChargedVoltageError,
    engineCooldownVoltageMeasure,
    isEngineCooldownVoltageError,
    isBatteryLooksError,
  } = report;
  const { accTuningComment, accTuningList } = report;

  return (
    <>
      <BikeInfo
        mechanic={mechanic}
        bikeModelName={bikeModelName}
        bikeNumber={bikeNumber}
        modelYear={modelYear}
        mileage={mileage}
      />
      <SellerInfo
        price={price}
        sellerName={sellerName}
        sellerPhone={sellerPhone}
        bikeLocation={bikeLocation}
        salesArticleCaptureImage={salesArticleCaptureImage}
        salesArticleURL={salesArticleURL}
      />
      <EvaluationInfo
        evaluationComment={evaluationComment}
        evaluationGrade={evaluationGrade}
        evaluationExterior={evaluationExterior}
        evaluationExpendables={evaluationExpendables}
        evaluationElectronics={evaluationElectronics}
        evaluationPainting={evaluationPainting}
        evaluationEngine={evaluationEngine}
      />
      <CertInfo
        abolitionCertComment={abolitionCertComment}
        abolitionCertImage={abolitionCertImage}
        transferCertwithStampComment={transferCertwithStampComment}
        transferCertwithStampImage={transferCertwithStampImage}
        sellerIdCardComment={sellerIdCardComment}
        sellerIdCardImage={sellerIdCardImage}
        keyCountComment={keyCountComment}
        keyCountImage={keyCountImage}
      />
      <div id="portal" />
    </>
  );
};

export default ReportPage;
