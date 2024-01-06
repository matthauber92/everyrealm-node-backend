/*
  Warnings:

  - The values [SMALL,REGUALR] on the enum `BurritoSize` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BurritoSize_new" AS ENUM ('REGULAR', 'XL', 'LARGE', 'MEDIUM');
ALTER TABLE "Burrito" ALTER COLUMN "size" TYPE "BurritoSize_new" USING ("size"::text::"BurritoSize_new");
ALTER TYPE "BurritoSize" RENAME TO "BurritoSize_old";
ALTER TYPE "BurritoSize_new" RENAME TO "BurritoSize";
DROP TYPE "BurritoSize_old";
COMMIT;
