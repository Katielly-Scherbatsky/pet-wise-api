import usuarioService from '../services/usuario.service.js';

export const criar = async (req, res) => {
  try {
    const { nome, email, senha, dataNascimento } = req.body;

    await usuarioService.criarUsuario({
      nome,
      email,
      senha,
    });

    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

export const atualizar = async (req, res) => {
  try {
    const { nome, dataNascimento } = req.body;

    const userId = req.user.sub;

    const result = await usuarioService.atualizar(userId,
      {
        nome,
        dataNascimento: new Date(dataNascimento),
      }
    );

    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
}