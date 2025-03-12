import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all(); // run() if we are inserting data all() coz we are fetching data get() for fetch single row
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // to generate slug
  meal.slug = slugify(meal.title, { lower: true }); // lowecase
  meal.instructions = xss(meal.instructions); // to centerize instruction through  cross-site scripting

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // to write file(image ) in public folder
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // needed for write method
  const bufferedImage = await meal.image.arrayBuffer();

  // 1st arg you wanna write 2nd arg is a function that will be executed once it's done writing
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
