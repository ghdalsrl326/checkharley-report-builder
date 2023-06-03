import BikeMetaInfo from "@/components/BikeInfo";
import SellerMetaInfo from "@/components/SellerInfo";
import { getReport } from "@/service/report";
import React from "react";

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
      <BikeMetaInfo
        mechanic={mechanic}
        bikeModelName={bikeModelName}
        bikeNumber={bikeNumber}
        modelYear={modelYear}
        mileage={mileage}
      />
      <SellerMetaInfo
        price={price}
        sellerName={sellerName}
        sellerPhone={sellerPhone}
        bikeLocation={bikeLocation}
        salesArticleCaptureImage={salesArticleCaptureImage}
        salesArticleURL={salesArticleURL}
      />
    </>
  );
};

export default ReportPage;
