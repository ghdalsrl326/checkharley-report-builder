import { EmailData } from "./email";

export async function sendReservationEmail(form: EmailData) {
  const response = await fetch("/api/reservation", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "applicatioin/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함");
  }
  return data;
}
