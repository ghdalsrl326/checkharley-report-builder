import { client } from "./sanity";
import { EmailData } from "./email";
import { uuid } from "@sanity/uuid";

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
    _id: uuid(),
  });
  return newReservation;
}
