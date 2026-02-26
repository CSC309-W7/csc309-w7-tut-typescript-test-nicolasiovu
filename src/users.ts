import type { User } from "./types";

export const apiResponse: { name: string, age: number | string }[] = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

function fixUser(user: { name: string, age: number | string }) : User {
  const result: User = {
    name: user.name,
    age: Number(user.age)
  };
  return result;
}

export function getUsersData(): User[] {
  return apiResponse.map((u) => fixUser(u));
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}
