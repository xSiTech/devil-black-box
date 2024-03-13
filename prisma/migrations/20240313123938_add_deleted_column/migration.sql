/*
  Warnings:

  - You are about to drop the column `posterId` on the `PosterPersonImage` table. All the data in the column will be lost.
  - Added the required column `poster_id` to the `PosterPersonImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PosterPersonImage" DROP CONSTRAINT "PosterPersonImage_posterId_fkey";

-- AlterTable
ALTER TABLE "Poster" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PosterPersonImage" DROP COLUMN "posterId",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "poster_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PosterText" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "PosterPersonImage" ADD CONSTRAINT "PosterPersonImage_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "Poster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
