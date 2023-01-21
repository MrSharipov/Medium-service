/*
  Warnings:

  - You are about to drop the `ReadTime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ReadTime";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "readTime" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "readTime_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
