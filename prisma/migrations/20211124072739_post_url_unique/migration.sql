/*
  Warnings:

  - A unique constraint covering the columns `[urlname]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Post.urlname_unique` ON `Post`(`urlname`);
