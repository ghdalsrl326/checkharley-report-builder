import {
  Report,
  BikeInfo,
  SellerInfo,
  ElectronicsInfo,
  ExpendablesInfo,
} from "@/data/report.type";
import { client } from "./sanity";

export async function getReport(reportId: string): Promise<Report> {
  return client.fetch(`*[_type == "report" && _id == "${reportId}"][0]`);
}

// export async function getBikeInfo(reportId: string): Promise<BikeInfo> {
//   return client.fetch(
//     `*[_type == "report" && _id == "${reportId}"][0]{mechanic, bikeModelName, bikeNumber, modelYear, mileage}`
//   );
// }

// export async function getSellerInfo(reportId: string): Promise<SellerInfo> {
//   return client.fetch(
//     `*[_type == "report" && _id == "${reportId}"][0]{price, sellerName, sellerPhone, bikeLocation, salesArticleCaptureImage, salesArticleURL}`
//   );
// }
