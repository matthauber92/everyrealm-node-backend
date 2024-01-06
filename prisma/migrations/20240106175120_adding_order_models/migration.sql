-- CreateEnum
CREATE TYPE "BurritoSize" AS ENUM ('SMALL', 'REGUALR', 'LARGE');

-- CreateTable
CREATE TABLE "Burrito" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" "BurritoSize" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Burrito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "burritoId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_burritoId_fkey" FOREIGN KEY ("burritoId") REFERENCES "Burrito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
