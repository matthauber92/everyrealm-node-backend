import { prisma } from "../src/db";
// @ts-ignore
import {BurritoSize} from "@prisma/client";

const seedBurritos = async () => {
  try {
    const burritosData = [
      { name: 'Chicken Burrito', size: BurritoSize.REGULAR, price: 3.0 },
      { name: 'Chicken Burrito', size: BurritoSize.MEDIUM, price: 4.0 },
      { name: 'Chicken Burrito', size: BurritoSize.LARGE, price: 6.0 },
      { name: 'Chicken Burrito', size: BurritoSize.XL, price: 8.0 },
      { name: 'Veggie Burrito', size: BurritoSize.REGULAR, price: 3.0 },
      { name: 'Veggie Burrito', size: BurritoSize.MEDIUM, price: 4.0 },
      { name: 'Veggie Burrito', size: BurritoSize.LARGE, price: 6.0 },
      { name: 'Veggie Burrito', size: BurritoSize.XL, price: 8.0 },
      { name: 'Breakfast Burrito', size: BurritoSize.REGULAR, price: 3.0 },
      { name: 'Breakfast Burrito', size: BurritoSize.MEDIUM, price: 4.0 },
      { name: 'Breakfast Burrito', size: BurritoSize.LARGE, price: 6.0 },
      { name: 'Breakfast Burrito', size: BurritoSize.XL, price: 8.0 },
      { name: 'Steak and Cheese Burrito', size: BurritoSize.REGULAR, price: 4.5 },
      { name: 'Steak and Cheese Burrito', size: BurritoSize.MEDIUM, price: 6.0 },
      { name: 'Steak and Cheese Burrito', size: BurritoSize.LARGE, price: 8.5 },
      { name: 'Steak and Cheese Burrito', size: BurritoSize.XL, price: 10.0 },
      { name: 'Carnitas Burrito', size: BurritoSize.REGULAR, price: 3.0 },
      { name: 'Carnitas Burrito', size: BurritoSize.MEDIUM, price: 4.5 },
      { name: 'Carnitas Burrito', size: BurritoSize.LARGE, price: 7.5 },
      { name: 'Carnitas Burrito', size: BurritoSize.XL, price: 9.0 },
    ];

    // Insert burritos into the database
    await Promise.all(
      burritosData.map(async (burrito) => {
        await prisma.burrito.create({ data: burrito });
      })
    );

    console.log('Burritos seeded successfully.');
  } catch (error) {
    console.error('Error seeding burritos:', error);
  } finally {
    await prisma.$disconnect();
  }
};

async function main() {
  console.log(`Start seeding ...`)
  console.time(`full seed`)

  await seedBurritos()

  console.timeLog(`full seed`)

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
