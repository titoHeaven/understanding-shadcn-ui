import type { SignupInput } from "@/schemas/signup.schema";

export const signup = async (data: SignupInput) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Signup failed');
  }

  return res.json();
};
