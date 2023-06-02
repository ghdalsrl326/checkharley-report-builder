import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
};

export async function addUser({ id, name, email }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    name,
    email,
  });
}
