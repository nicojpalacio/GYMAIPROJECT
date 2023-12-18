/*
  Warnings:

  - You are about to drop the column `creator_id` on the `Routine` table. All the data in the column will be lost.
  - Added the required column `creatorId` to the `Routine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Routine" DROP CONSTRAINT "Routine_creator_id_fkey";

-- AlterTable
ALTER TABLE "Routine" DROP COLUMN "creator_id",
ADD COLUMN     "creatorId" INTEGER NOT NULL,
ALTER COLUMN "init" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
