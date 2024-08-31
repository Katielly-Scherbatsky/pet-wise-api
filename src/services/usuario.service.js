import { PrismaClient } from '@prisma/client';
import criptografia from '../helpers/criptografia.js';

const prisma = new PrismaClient();

class UsuarioService {
  async criarUsuario(data) {
    try {
      const senhaEncriptada = await criptografia.encriptar(data.senha);

      const usuario = await prisma.user.create({
        data: {
          nome: data.nome,
          email: data.email,
          senha: senhaEncriptada,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          urlImagemPerfil: true
        }
      });

      return usuario;
    } catch (error) {
      throw new Error('Erro ao cadastrar usuário: ' + error.message);
    }
  }

  async atualizarAnimal(id, data) {
    try {
      const animal = await prisma.user.update({
        data: {
          nome: data.nome,
          dataNascimento: data.dataNascimento
        },
        where: { id: Number(id),
        }
      });

      return animal;
    } catch (error) {
      throw new Error('Erro ao atualizar usuário: ' + error.message);
    }
  }
}

export default new UsuarioService();
