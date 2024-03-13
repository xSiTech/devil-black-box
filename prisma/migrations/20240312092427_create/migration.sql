/*
  Warnings:

  - You are about to drop the column `userId` on the `Poster` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Poster" DROP CONSTRAINT "Poster_userId_fkey";

-- AlterTable
ALTER TABLE "Poster" DROP COLUMN "userId";
