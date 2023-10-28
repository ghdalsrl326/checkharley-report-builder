import { client } from "./sanity";
import { EmailData } from "./email";

// export async function sendReservationEmail(form: EmailData) {
//   const response = await fetch("/api/reservation", {
//     method: "POST",
//     body: JSON.stringify(form),
//     headers: {
//       "Content-Type": "applicatioin/json",
//     },
//   });
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "서버 요청에 실패함");
//   }
//   return data;
// }

export async function createReservation({
  name,
  contact,
  harleyModel,
  preferredDate,
}: EmailData): Promise<EmailData> {
  const newReservation = await client.createIfNotExists({
    _type: "reservation",
    name,
    contact,
    harleyModel,
    preferredDate,
    _id: `${name}-${contact}-${harleyModel}-${preferredDate}`,
  });
  return newReservation;
}
