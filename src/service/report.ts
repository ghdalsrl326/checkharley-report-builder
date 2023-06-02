import { client } from "./sanity";

export async function getReport(report) {
  return client.fetch();
}
