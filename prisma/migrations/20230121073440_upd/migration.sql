-- CreateTable
CREATE TABLE "ReadTime" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "ReadTime_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
