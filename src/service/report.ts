import {
  Report,
  BikeInfo,
  SellerInfo,
  EvaluationInfo,
  CertInfo,
  ExpendablesInfo,
  ElectronicsInfo,
  TuningInfo,
} from "@/data/report.type";
import { client } from "./sanity";

export async function getReport(reportId: string): Promise<Report> {
  return client.fetch(`*[_type == "report" && _id == "${reportId}"][0]`);
}

export async function getBikeInfo(reportId: string): Promise<BikeInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{mechanic, bikeModelName, bikeNumber, modelYear, mileage}`
  );
}

export async function getSellerInfo(reportId: string): Promise<SellerInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{price, sellerName, sellerPhone, bikeLocation, salesArticleCaptureImage, salesArticleURL}`
  );
}

export async function getEvaluationComment(
  reportId: string
): Promise<EvaluationInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{evaluationComment}`
  );
}

export async function getCertInfo(reportId: string): Promise<CertInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{abolitionCertComment, abolitionCertImage, transferCertwithStampComment, transferCertwithStampImage, sellerIdCardComment, sellerIdCardImage, keyCountComment, keyCountImage}`
  );
}

export async function getExpendablesInfo(
  reportId: string
): Promise<ExpendablesInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{
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
      isSparkPlugError}`
  );
}

export async function getElectronicsInfo(
  reportId: string
): Promise<ElectronicsInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{
      chargingSystemComment,
      chargingSystemImages,
      initialVoltageMeasure,
      isInitialVoltageError,
      chargedVoltageMeasure,
      isChargedVoltageError,
      engineCooldownVoltageMeasure,
      isEngineCooldownVoltageError,
      isBatteryLooksError}`
  );
}

export async function getTuningInfo(reportId: string): Promise<TuningInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{
      accTuningComment,
      accTuningList}`
  );
}
