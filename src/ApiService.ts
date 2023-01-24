import { User } from "./types";

export async function getAllUsers() {
  const res = await fetch("https://fakestoreapi.com/users");
  return res.json() as Promise<User[]>;
}
