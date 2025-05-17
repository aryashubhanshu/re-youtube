import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Entertainment",
  "Gaming",
  "Film and Animation",
  "How-to and Style",
  "Live",
  "Science and Technology",
  "People and Blogs",
  "Pets and Animals",
  "Music",
  "News and Politics",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seeding categories");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded");
  } catch (err) {
    console.error("Error seeding categories ", err);
    process.exit(1);
  }
}

main();
