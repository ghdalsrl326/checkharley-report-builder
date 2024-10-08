import { ImageType } from "@/data/image.type";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-06-01",
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: ImageType) {
  return builder.image(source);
}
