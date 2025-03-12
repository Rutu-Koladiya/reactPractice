"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid input");

    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  // coz if we use not it in oroduction then it not update the meals coz it prefetch the whole data while building it
  revalidatePath("/meals"); // but it not revalidate nested path of meals
  //   revalidatePath('/', 'layout') -> to validate all
  redirect("/meals");
}

// only assests that are in public directory at build time will be served by next.js files added at request time won't be available. we recommand using a third-party service like AWS S3 for persistent file storage.
