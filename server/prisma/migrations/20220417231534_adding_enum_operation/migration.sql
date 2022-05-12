/*
  Warnings:

  - You are about to drop the `Effort` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Operation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Results` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('ADDITION', 'SUBTRACTION', 'MULTIPLICATION', 'DIVISION', 'EXPONENTIATION', 'ROOTING', 'EQUATION');

-- DropForeignKey
ALTER TABLE "Results" DROP CONSTRAINT "Results_effortId_fkey";

-- DropForeignKey
ALTER TABLE "Results" DROP CONSTRAINT "Results_operationId_fkey";

-- DropForeignKey
ALTER TABLE "Results" DROP CONSTRAINT "Results_userId_fkey";

-- DropTable
DROP TABLE "Effort";

-- DropTable
DROP TABLE "Operation";

-- DropTable
DROP TABLE "Results";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "bornDate" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "results" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "calculation" TEXT NOT NULL,
    "operation" "OperationType" NOT NULL,
    "response" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "duration" TIMESTAMP NOT NULL,
    "effort" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "results_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
