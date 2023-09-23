import { ImageType } from "@/data/image.type";

export type Report = {
  mechanic: string;
  bikeModelName: string;
  bikeNumber: string;
  modelYear: number;
  mileage: number;
  price: number;
  sellerName: string;
  sellerPhone: string;
  bikeLocation: string;
  salesArticleCaptureImage: ImageType;
  salesArticleURL: string;
  evaluationComment: string;
  abolitionCertCondition: string;
  abolitionCertImage: ImageType;
  transferCertwithStampCondition: string;
  transferCertwithStampImage: ImageType;
  sellerIdCardCondition: string;
  sellerIdCardImage: ImageType;
  keyCountCondition: string;
  keyCountImage: ImageType;
  oilComment: string;
  oilImages: ImageType[];
  engineOilMeasure: string;
  engineOilCondition: string;
  missionOilMeasure: string;
  missionOilCondition: string;
  primaryOilMeasure: string;
  primaryOilCondition: string;
  frontBrakeOilMeasure: string;
  frontBrakeOilCondition: string;
  rearBrakeOilMeasure: string;
  rearBrakeOilCondition: string;
  tireComment: string;
  tireImages: ImageType[];
  frontTireMeasure: string;
  frontTireCondition: string;
  rearTireMeasure: string;
  rearTireCondition: string;
  brakeComment: string;
  brakeImages: ImageType[];
  frontBrakePadMeasure: string;
  frontBrakePadCondition: string;
  rearBrakePadMeasure: string;
  rearBrakePadCondition: string;
  frontBrakeDiskMeasure: string;
  frontBrakeDiskCondition: string;
  rearBrakeDiskMeasure: string;
  rearBrakeDiskCondition: string;
  extraComment: string;
  extraImages: ImageType[];
  beltTensionMeasure: string;
  beltTensionCondition: string;
  clutchLeverMeasure: string;
  clutchLeverCondition: string;
  frontBrakeLeverMeasure: string;
  frontBrakeLeverCondition: string;
  rearBrakeLeverMeasure: string;
  rearBrakeLeverCondition: string;
  sparkPlugMeasure: string;
  sparkPlugCondition: string;
  chargingSystemComment: string;
  chargingSystemImages: ImageType[];
  initialVoltageMeasure: string;
  initialVoltageCondition: string;
  chargedVoltageMeasure: string;
  chargedVoltageCondition: string;
  engineCooldownVoltageMeasure: string;
  engineCooldownVoltageCondition: string;
  batteryLooksCondition: string;
  paintingsComment: string;
  paintingsImages: ImageType[];
  frontFenderMeasure: string;
  frontFenderCondition: string;
  rearFenderMeasure: string;
  rearFenderCondition: string;
  fuelTankMeasure: string;
  fuelTankCondition: string;
  sideCoverMeasure: string;
  sideCoverCondition: string;
  saddleBagMeasure: string;
  saddleBagCondition: string;
  tourBagMeasure: string;
  tourBagCondition: string;
  accTuningList: AccTuningType[];
};

export type BikeInfo = Pick<
  Report,
  "mechanic" | "bikeModelName" | "bikeNumber" | "modelYear" | "mileage"
>;

export type SellerInfo = Pick<
  Report,
  | "price"
  | "sellerName"
  | "sellerPhone"
  | "bikeLocation"
  | "salesArticleCaptureImage"
  | "salesArticleURL"
>;

export type EvaluationInfo = Pick<Report, "evaluationComment">;

export type CertInfo = Pick<
  Report,
  | "abolitionCertCondition"
  | "abolitionCertImage"
  | "transferCertwithStampCondition"
  | "transferCertwithStampImage"
  | "sellerIdCardCondition"
  | "sellerIdCardImage"
  | "keyCountCondition"
  | "keyCountImage"
>;

export type ExpendablesInfo = Pick<
  Report,
  | "oilComment"
  | "oilImages"
  | "engineOilMeasure"
  | "engineOilCondition"
  | "missionOilMeasure"
  | "missionOilCondition"
  | "primaryOilMeasure"
  | "primaryOilCondition"
  | "frontBrakeOilMeasure"
  | "frontBrakeOilCondition"
  | "rearBrakeOilMeasure"
  | "rearBrakeOilCondition"
  | "tireComment"
  | "tireImages"
  | "frontTireMeasure"
  | "frontTireCondition"
  | "rearTireMeasure"
  | "rearTireCondition"
  | "brakeComment"
  | "brakeImages"
  | "frontBrakePadMeasure"
  | "frontBrakePadCondition"
  | "rearBrakePadMeasure"
  | "rearBrakePadCondition"
  | "frontBrakeDiskMeasure"
  | "frontBrakeDiskCondition"
  | "rearBrakeDiskMeasure"
  | "rearBrakeDiskCondition"
  | "extraComment"
  | "extraImages"
  | "beltTensionMeasure"
  | "beltTensionCondition"
  | "clutchLeverMeasure"
  | "clutchLeverCondition"
  | "frontBrakeLeverMeasure"
  | "frontBrakeLeverCondition"
  | "rearBrakeLeverMeasure"
  | "rearBrakeLeverCondition"
  | "sparkPlugMeasure"
  | "sparkPlugCondition"
>;

export type ElectronicsInfo = Pick<
  Report,
  | "chargingSystemComment"
  | "chargingSystemImages"
  | "initialVoltageMeasure"
  | "initialVoltageCondition"
  | "chargedVoltageMeasure"
  | "chargedVoltageCondition"
  | "engineCooldownVoltageMeasure"
  | "engineCooldownVoltageCondition"
  | "batteryLooksCondition"
>;

export type PaintingsInfo = Pick<
  Report,
  | "paintingsComment"
  | "paintingsImages"
  | "frontFenderMeasure"
  | "frontFenderCondition"
  | "rearFenderMeasure"
  | "rearFenderCondition"
  | "fuelTankMeasure"
  | "fuelTankCondition"
  | "sideCoverMeasure"
  | "sideCoverCondition"
  | "saddleBagMeasure"
  | "saddleBagCondition"
  | "tourBagMeasure"
  | "tourBagCondition"
>;

export type AccTuningType = {
  accTuningName: string;
  accTuningImages: ImageType[];
  accTuningBrand: string;
  accTuningCondition: string;
  accTuningComment: string;
};

export type AccTuningInfo = Pick<Report, "accTuningList">;
