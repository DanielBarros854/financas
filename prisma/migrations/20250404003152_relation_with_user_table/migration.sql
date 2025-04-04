/*
  Warnings:

  - Added the required column `user_id` to the `earnings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `investments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `earnings` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `expenses` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `investments` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `investments` ADD CONSTRAINT `investments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `earnings` ADD CONSTRAINT `earnings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
