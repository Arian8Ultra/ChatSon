/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `username` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "likedBy" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Post" ("content", "id", "likedBy", "likes", "title") SELECT "content", "id", "likedBy", "likes", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
