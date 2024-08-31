import animalService from '../services/animal.service.js';
import tokenService  from '../services/token.service.js';

export const listar = async (req, res) => {
  try {
    const userId = req.user.sub;

    const result = await animalService.obterAnimais(userId);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export const criar = async (req, res) => {
  try {
    const { nome, dataNascimento } = req.body;

    const userId = req.user.sub;

    const result = await animalService.criarAnimal(
      {
        nome,
        dataNascimento: new Date(dataNascimento),
        userId,
      }
    );

    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export const atualizar = async (req, res) => {
  try {
    const { nome, dataNascimento } = req.body;
    const { id } = req.params;

    const userId = req.user.sub;

    const result = await animalService.atualizarAnimal(id,
      {
        nome,
        dataNascimento: new Date(dataNascimento),
        userId,
      }
    );

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

export const excluir = async (req, res) => {
  try {
    const userId = req.user.sub;
    
    const { id } = req.params;

    animalService.excluir(id, userId);

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
}
