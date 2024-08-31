import { PrismaClient } from '@prisma/client';
import criptografia from '../helpers/criptografia.js';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

class AutenticacaoService {

  async login(email, senha) {
    const usuario = await prisma.user.findFirst({
      where: {
        email,
      }
    });

    if (!usuario) {
      throw new Error('Usuário ou senha inválida');
    }

    const senhaValida = await criptografia.comparar(senha, usuario.senha);
    if (!senhaValida) {
      throw new Error('Usuário ou senha inválida');
    }

    const token = jwt.sign(
      { 
        sub: usuario.id,
        email: usuario.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return {
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        urlImagemPerfil: usuario.urlImagemPerfil,
      },
      token
    };
  }
}

export default new AutenticacaoService();

