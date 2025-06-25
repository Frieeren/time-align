"use server";

import { cookies } from "next/headers";

async function setCookie(key: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
}

async function getCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
}

async function deleteCookie(key: string) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}

export { setCookie, getCookie, deleteCookie };
