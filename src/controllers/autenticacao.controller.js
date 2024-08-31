import autenticacaoService from '../services/autenticacao.service.js';

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const token = await autenticacaoService.login(email, senha);

    res.status(200).send(token);
  } catch (error) {
    res.status(401).send(error);
  }
}