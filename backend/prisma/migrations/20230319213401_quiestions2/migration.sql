/*
  Warnings:

  - You are about to drop the column `questions` on the `Question` table. All the data in the column will be lost.
  - Added the required column `question` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `answer` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "questions",
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "veriants" TEXT[],
DROP COLUMN "answer",
ADD COLUMN     "answer" INTEGER NOT NULL,
ALTER COLUMN "body" DROP NOT NULL;
