-- AlterTable
ALTER TABLE "Animal" ALTER COLUMN "dataNascimento" DROP NOT NULL,
ALTER COLUMN "urlImagemPerfil" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pesagem" ADD COLUMN     "observacoes" TEXT;

-- AlterTable
ALTER TABLE "Suplementacao" ADD COLUMN     "observacoes" TEXT,
ALTER COLUMN "dataProximaAplicacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tratamento" ADD COLUMN     "observacoes" TEXT,
ALTER COLUMN "dataProximaAplicacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "urlImagemPerfil" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vacinacao" ALTER COLUMN "dataProximaAplicacao" DROP NOT NULL;
