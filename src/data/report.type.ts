type EvaluationScore = 1 | 2 | 3 | 4 | 5;

export type ImageType = {
  _type: string;
  asset: {
    _ref: string;
    _key?: string;
    _type: string;
  };
};

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
  evaluationGrade: string;
  evaluationExterior: EvaluationScore;
  evaluationExpendables: EvaluationScore;
  evaluationElectronics: EvaluationScore;
  evaluationPainting: EvaluationScore;
  evaluationEngine: EvaluationScore;
  abolitionCertComment: boolean;
  abolitionCertImage: ImageType;
  transferCertwithStampComment: boolean;
  transferCertwithStampImage: ImageType;
  sellerIdCardComment: boolean;
  sellerIdCardImage: ImageType;
  keyCountComment: string;
  keyCountImage: ImageType;
  oilComment: string;
  oilImages: ImageType[];
  engineOilMeasure: string;
  isEngineOilError: boolean;
  missionOilMeasure: string;
  isMissionOilError: boolean;
  primaryOilMeasure: string;
  isPrimaryOilError: boolean;
  frontBrakeOilMeasure: string;
  isFrontBrakeOilError: boolean;
  rearBrakeOilMeasure: string;
  isRearBrakeOilError: boolean;
  tireComment: string;
  tireImages: ImageType[];
  frontTireMeasure: string;
  isFrontTireError: boolean;
  rearTireMeasure: string;
  isRearTireError: boolean;
  brakeComment: string;
  brakeImages: ImageType[];
  frontBrakePadMeasure: string;
  isFrontBrakePadError: boolean;
  rearBrakePadMeasure: string;
  isRearBrakePadError: boolean;
  frontBrakeDiskMeasure: string;
  isFrontBrakeDiskError: boolean;
  rearBrakeDiskMeasure: string;
  isRearBrakeDiskError: boolean;
  extraComment: string;
  extraImages: ImageType[];
  beltTensionMeasure: string;
  isBeltTensionError: boolean;
  clutchLeverMeasure: string;
  isClutchLeverError: boolean;
  frontBrakeMeasure: string;
  isFrontBrakeError: boolean;
  rearBrakeMeasure: string;
  isRearBrakeError: boolean;
  sparkPlugMeasure: string;
  isSparkPlugError: boolean;
  chargingSystemComment: string;
  chargingSystemImages: ImageType[];
  initialVoltageMeasure: string;
  isInitialVoltageError: boolean;
  chargedVoltageMeasure: string;
  isChargedVoltageError: boolean;
  engineCooldownVoltageMeasure: string;
  isEngineCooldownVoltageError: boolean;
  isBatteryLooksError: boolean;
  accTuningComment: string;
  accTuningList: {
    accTuningName: string;
    accTuningImage: ImageType;
    accTuningLocation: string;
    accTuningBrand: string;
    accTuningGrade: string;
  }[];
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

export type EvaluationInfo = Pick<
  Report,
  | "evaluationComment"
  | "evaluationGrade"
  | "evaluationExterior"
  | "evaluationExpendables"
  | "evaluationElectronics"
  | "evaluationPainting"
  | "evaluationEngine"
>;

export type CertInfo = Pick<
  Report,
  | "abolitionCertComment"
  | "abolitionCertImage"
  | "transferCertwithStampComment"
  | "transferCertwithStampImage"
  | "sellerIdCardComment"
  | "sellerIdCardImage"
  | "keyCountComment"
  | "keyCountImage"
>;

export type ExpendablesInfo = Pick<
  Report,
  | "oilComment"
  | "oilImages"
  | "engineOilMeasure"
  | "isEngineOilError"
  | "missionOilMeasure"
  | "isMissionOilError"
  | "primaryOilMeasure"
  | "isPrimaryOilError"
  | "frontBrakeOilMeasure"
  | "isFrontBrakeOilError"
  | "rearBrakeOilMeasure"
  | "isRearBrakeOilError"
  | "tireComment"
  | "tireImages"
  | "frontTireMeasure"
  | "isFrontTireError"
  | "rearTireMeasure"
  | "isRearTireError"
  | "brakeComment"
  | "brakeImages"
  | "frontBrakePadMeasure"
  | "isFrontBrakePadError"
  | "rearBrakePadMeasure"
  | "isRearBrakePadError"
  | "frontBrakeDiskMeasure"
  | "isFrontBrakeDiskError"
  | "rearBrakeDiskMeasure"
  | "isRearBrakeDiskError"
  | "extraComment"
  | "extraImages"
  | "beltTensionMeasure"
  | "isBeltTensionError"
  | "clutchLeverMeasure"
  | "isClutchLeverError"
  | "frontBrakeMeasure"
  | "isFrontBrakeError"
  | "rearBrakeMeasure"
  | "isRearBrakeError"
  | "sparkPlugMeasure"
  | "isSparkPlugError"
>;

export type ElectronicsInfo = Pick<
  Report,
  | "chargingSystemComment"
  | "chargingSystemImages"
  | "initialVoltageMeasure"
  | "isInitialVoltageError"
  | "chargedVoltageMeasure"
  | "isChargedVoltageError"
  | "engineCooldownVoltageMeasure"
  | "isEngineCooldownVoltageError"
  | "isBatteryLooksError"
>;

export type TuningInfo = Pick<Report, "accTuningComment" | "accTuningList">;
