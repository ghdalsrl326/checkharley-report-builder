import {
  Report,
  BikeInfo,
  SellerInfo,
  EvaluationInfo,
  CertInfo,
  ExpendablesInfo,
  ElectronicsInfo,
  PaintingsInfo,
  AccTuningInfo,
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
      engineOilCondition,
      missionOilMeasure,
      missionOilCondition,
      primaryOilMeasure,
      primaryOilCondition,
      frontBrakeOilMeasure,
      frontBrakeOilCondition,
      rearBrakeOilMeasure,
      rearBrakeOilCondition,
      tireComment,
      tireImages,
      frontTireMeasure,
      frontTireCondition,
      rearTireMeasure,
      rearTireCondition,
      brakeComment,
      brakeImages,
      frontBrakePadMeasure,
      frontBrakePadCondition,
      rearBrakePadMeasure,
      rearBrakePadCondition,
      frontBrakeDiskMeasure,
      frontBrakeDiskCondition,
      rearBrakeDiskMeasure,
      rearBrakeDiskCondition,
      extraComment,
      extraImages,
      beltTensionMeasure,
      beltTensionCondition,
      clutchLeverMeasure,
      clutchLeverCondition,
      frontBrakeLeverMeasure,
      frontBrakeLeverCondition,
      rearBrakeLeverMeasure,
      rearBrakeLeverCondition,
      sparkPlugMeasure,
      sparkPlugCondition}`
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
      initialVoltageCondition,
      chargedVoltageMeasure,
      chargedVoltageCondition,
      engineCooldownVoltageMeasure,
      engineCooldownVoltageCondition,
      batteryLooksCondition}`
  );
}

export async function getPaintingsInfo(
  reportId: string
): Promise<PaintingsInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{
      paintingsComment,
      paintingsImages,
      frontFenderMeasure,
      frontFenderCondition,
      rearFenderMeasure,
      rearFenderCondition,
      fuelTankMeasure,
      fuelTankCondition,
      sideCoverMeasure,
      sideCoverCondition,
      saddleBagMeasure,
      saddleBagCondition,
      tourBagMeasure,
      tourBagCondition}`
  );
}

export async function getAccTuningInfo(
  reportId: string
): Promise<AccTuningInfo> {
  return client.fetch(
    `*[_type == "report" && _id == "${reportId}"][0]{
      accTuningComment,
      accTuningList}`
  );
}
