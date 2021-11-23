/*
  Warnings:

  - You are about to drop the column `postId` on the `Catalog` table. All the data in the column will be lost.
  - Added the required column `catalogId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Catalog` DROP FOREIGN KEY `Catalog_ibfk_2`;

-- AlterTable
ALTER TABLE `Catalog` DROP COLUMN `postId`;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `catalogId` VARCHAR(32) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`catalogId`) REFERENCES `Catalog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
