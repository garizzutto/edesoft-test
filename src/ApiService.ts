import { User } from "./types";

export async function getAllUsers() {
  const res = await fetch("https://fakestoreapi.com/users");
  return res.json() as Promise<User[]>;
}

export async function addNewUser(user: User) {
  const res = await fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  return res.json() as Promise<User[]>;
}
