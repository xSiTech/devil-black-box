-- CreateTable
CREATE TABLE "Poster" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "createById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Poster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PosterText" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "y" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "font_size" TEXT NOT NULL,
    "font_family" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "posterId" TEXT NOT NULL,
    "field_name" TEXT NOT NULL,

    CONSTRAINT "PosterText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PosterPersonImage" (
    "id" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "y" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "posterId" TEXT NOT NULL,
    "field_name" TEXT NOT NULL,

    CONSTRAINT "PosterPersonImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Poster" ADD CONSTRAINT "Poster_createById_fkey" FOREIGN KEY ("createById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poster" ADD CONSTRAINT "Poster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poster" ADD CONSTRAINT "Poster_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosterText" ADD CONSTRAINT "PosterText_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "Poster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosterPersonImage" ADD CONSTRAINT "PosterPersonImage_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "Poster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
