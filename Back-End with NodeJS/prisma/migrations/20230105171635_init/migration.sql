/*
  Warnings:

  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "likedBy" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Post" ("content", "id", "likedBy", "likes", "username") SELECT "content", "id", "likedBy", "likes", "username" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
