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

export async function editUser(user: User) {
  const res = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
  return res.json() as Promise<User[]>;
}

export async function deleteUser(id: number) {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`, {
    method: "DELETE",
  });
  return res.json() as Promise<User[]>;
}

export async function getUser(id: string) {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`);
  return res.json() as Promise<User>;
}
