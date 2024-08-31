import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class VacinacaoService {
  async criarVacinacao(data) {
    try {
      const vacinacao = await prisma.vacinacao.create({
        data: {
          nomeVacina: data.nomeVacina,
          dataAplicacao: data.dataAplicacao,
          dataProximaAplicacao: data.dataProximaAplicacao,
          observacoes: data.observacoes,
          animalId: Number(data.animalId),
        },
        select: {
          id: true,
          animalId: true,
          nomeVacina: true,
          dataAplicacao: true,
          dataProximaAplicacao: true,
          observacoes: true,          
        }
      });

      return vacinacao;
    } catch (error) {
      throw new Error('Erro ao cadastrar vacinação: ' + error.message);
    }
  }

  async atualizarVacinacao(vacinacaoId, animalId, userId, data) {
    try {
      const result = await prisma.vacinacao.updateMany({
        data: {
          nomeVacina: data.nomeVacina,
          dataAplicacao: data.dataAplicacao,
          dataProximaAplicacao: data.dataProximaAplicacao,
          observacoes: data.observacoes,
        },
        where: { id: Number(vacinacaoId),
          AND: {
            animal: {
              id: Number(animalId),
              userId: Number(userId),
            }
          } 
        }
      });

      return result.count > 0;
    } catch (error) {
      throw new Error('Erro ao atualizar vacinação: ' + error.message);
    }
  }

  async obterVacinacoes(animalId, userId) {
    try {
      const vacinacoes =  await prisma.vacinacao.findMany({
        where: {
          animal: {
            id: Number(animalId),
            userId: Number(userId),
          },
        },
      });
      
      return vacinacoes;
    } catch (error) {
      throw new Error('Erro ao buscar vacinações: ' + error.message);
    }
  }

  async excluir(vacinacaoId, animalId, userId) {
    try {
      const result = await prisma.vacinacao.deleteMany({
        where: {
          id: Number(vacinacaoId),
          animal: {
            userId: Number(userId),
            id: Number(animalId),
          },
        },
      });

      return result.count > 0;
    } catch (error) {
      throw new Error('Erro ao excluir vacinação: ' + error.message);
    }
  }
}

export default new VacinacaoService();