/*
  Warnings:

  - Added the required column `catalogNewId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `catalogNewId` VARCHAR(32) NOT NULL;

-- CreateTable
CREATE TABLE `CatalogNew` (
    `id` VARCHAR(32) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `urlname` VARCHAR(191) NOT NULL,
    `parent` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`catalogNewId`) REFERENCES `CatalogNew`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
