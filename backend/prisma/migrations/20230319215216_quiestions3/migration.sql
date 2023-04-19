/*
  Warnings:

  - You are about to drop the column `veriants` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "veriants",
ADD COLUMN     "variants" TEXT[];
