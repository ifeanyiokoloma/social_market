"use server";

import { redirect } from "next/navigation";
import { FormState, LoginSchema } from "@/lib/definitions";

export const login = async (state: FormState, fd: FormData) => {
  const email = fd.get("email");
  const password = fd.get("password");

  const validatedFields = LoginSchema.safeParse({
    email,
    password,
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  redirect("/");
};
