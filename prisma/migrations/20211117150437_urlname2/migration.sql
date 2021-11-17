/*
  Warnings:

  - Added the required column `urlname` to the `Catalog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlname` to the `Catalogtop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlname` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Catalog` ADD COLUMN `urlname` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Catalogtop` ADD COLUMN `urlname` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `urlname` VARCHAR(191) NOT NULL;
