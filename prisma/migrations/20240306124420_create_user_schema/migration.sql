/*
  Warnings:

  - Made the column `campaignId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "campaignId" SET NOT NULL,
ALTER COLUMN "campaignId" SET DATA TYPE TEXT;
