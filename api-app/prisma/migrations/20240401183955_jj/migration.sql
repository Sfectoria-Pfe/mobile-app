/*
  Warnings:

  - You are about to drop the column `mediaId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `media` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `coverUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_mediaId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `mediaId`,
    ADD COLUMN `coverUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;

-- DropTable
DROP TABLE `media`;
