-- CreateEnum
CREATE TYPE "ProjectCategory" AS ENUM ('TON', 'ETHEREUM', 'BITCOIN', 'CORPORATE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "ProjectCategory" NOT NULL,
    "tech_stack" TEXT NOT NULL,
    "link" TEXT,
    "icon_name" TEXT NOT NULL,
    "highlights" TEXT NOT NULL,
    "metrics" JSONB NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "project_name_key" ON "project"("name");
