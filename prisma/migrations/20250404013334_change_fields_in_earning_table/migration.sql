/*
  Warnings:

  - You are about to drop the column `amount` on the `earnings` table. All the data in the column will be lost.
  - You are about to drop the column `earning` on the `earnings` table. All the data in the column will be lost.
  - You are about to drop the column `earning_date` on the `earnings` table. All the data in the column will be lost.
  - Added the required column `date` to the `earnings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `earnings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `earnings` DROP COLUMN `amount`,
    DROP COLUMN `earning`,
    DROP COLUMN `earning_date`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `value` DOUBLE NOT NULL;
