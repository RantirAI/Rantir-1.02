/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Permission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/150';
