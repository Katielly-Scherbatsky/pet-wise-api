import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AnimalService {
  async criarAnimal(data) {
    try {
      const animal = await prisma.animal.create({
        data,
        select: {
          id: true,
          nome: true,
          dataNascimento: true,
          urlImagemPerfil: true,
          userId: true,
        }
      });

      return animal;
    } catch (error) {
      throw new Error('Erro ao cadastrar animal: ' + error.message);
    }
  }

  async atualizarAnimal(id, data) {
    try {
      const animal = await prisma.animal.update({
        data: {
          nome: data.nome,
          dataNascimento: data.dataNascimento
        },
        where: { id: Number(id),
          AND: {
            userId: Number(data.userId)
          } 
        }
      });

      return animal;
    } catch (error) {
      throw new Error('Erro ao atualizar animal: ' + error.message);
    }
  }

  async obterAnimais(userId) {
    try {
      const animais = await prisma.animal.findMany({
        where: { userId: Number(userId) },
      });
      
      return animais;
    } catch (error) {
      throw new Error('Erro ao buscar animais: ' + error.message);
    }
  }

  async obterAnimal(userId, animalId) {
    try {
      const animais = await prisma.animal.findMany({
        where: { userId: Number(userId), AND: {
          id : Number(animalId)
        } },
      });
      
      return animais;
    } catch (error) {
      throw new Error('Erro ao buscar animal: ' + error.message);
    }
  }

  async excluir(id, userId) {
    try {
      await prisma.animal.delete({
        where: { id : Number(id),
          AND: {
            userId: Number(userId),
          } 
        },
      });
    } catch (error) {
      throw new Error('Erro ao excluir animal: ' + error.message);
    }
  }
}

export default new AnimalService();