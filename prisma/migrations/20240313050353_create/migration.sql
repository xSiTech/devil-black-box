/*
  Warnings:

  - You are about to drop the column `posterId` on the `PosterText` table. All the data in the column will be lost.
  - Added the required column `poster_id` to the `PosterText` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PosterText" DROP CONSTRAINT "PosterText_posterId_fkey";

-- AlterTable
ALTER TABLE "PosterText" DROP COLUMN "posterId",
ADD COLUMN     "poster_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PosterText" ADD CONSTRAINT "PosterText_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "Poster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
