-- CreateTable
CREATE TABLE "Body_Part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "routine_id" INTEGER NOT NULL,

    CONSTRAINT "Body_Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objetive" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "routine_id" INTEGER NOT NULL,

    CONSTRAINT "Objetive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routine" (
    "id" SERIAL NOT NULL,
    "init" TIMESTAMP(3) NOT NULL,
    "creator_id" INTEGER NOT NULL,

    CONSTRAINT "Routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" ( 
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Body_Part_routine_id_key" ON "Body_Part"("routine_id");

-- CreateIndex
CREATE UNIQUE INDEX "Objetive_routine_id_key" ON "Objetive"("routine_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Body_Part" ADD CONSTRAINT "Body_Part_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objetive" ADD CONSTRAINT "Objetive_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
