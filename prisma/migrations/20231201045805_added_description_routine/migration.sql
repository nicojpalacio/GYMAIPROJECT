/*
  Warnings:

  - You are about to drop the column `routine_id` on the `Objetive` table. All the data in the column will be lost.
  - You are about to drop the `Body_Part` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[description]` on the table `Objetive` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Routine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Body_Part" DROP CONSTRAINT "Body_Part_routine_id_fkey";

-- DropForeignKey
ALTER TABLE "Objetive" DROP CONSTRAINT "Objetive_routine_id_fkey";

-- DropIndex
DROP INDEX "Objetive_routine_id_key";

-- AlterTable
ALTER TABLE "Objetive" DROP COLUMN "routine_id";

-- AlterTable
ALTER TABLE "Routine" ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "Body_Part";

-- CreateTable
CREATE TABLE "BodyPart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BodyPart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BodyPart_name_key" ON "BodyPart"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Objetive_description_key" ON "Objetive"("description");
