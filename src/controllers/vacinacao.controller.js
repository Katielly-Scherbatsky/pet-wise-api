import vacinacaoService from '../services/vacinacao.service.js';

export const listar = async (req, res) => {
  try {
    const userId = req.user.sub;
    const { animalId } = req.params;

    const result = await vacinacaoService.obterVacinacoes(animalId, userId);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export const criar = async (req, res) => {
  try {
    const { nomeVacina, dataAplicacao, dataProximaAplicacao, observacoes } = req.body;

    const { animalId } = req.params;

    const result = await vacinacaoService.criarVacinacao({
        animalId,
        nomeVacina,
        dataAplicacao: new Date(dataAplicacao),
        dataProximaAplicacao: dataProximaAplicacao ? new Date(dataProximaAplicacao) : null,
        observacoes
      }
    );

    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export const atualizar = async (req, res) => {
  try {
    const { nomeVacina, dataAplicacao, dataProximaAplicacao, observacoes } = req.body;

    const { animalId, vacinacaoId } = req.params;

    const userId = req.user.sub;

    const result = await vacinacaoService.atualizarVacinacao(vacinacaoId,
      animalId,
      userId,
      {
        nomeVacina,
        dataAplicacao: new Date(dataAplicacao), 
        dataProximaAplicacao: dataProximaAplicacao ? new Date(dataProximaAplicacao) : null,
        observacoes,
      }
    );

    if(!result) {
      return res.status(404).send();
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

export const excluir = async (req, res) => {
  try {
    const userId = req.user.sub;
    
    const { animalId, vacinacaoId } = req.params;

    await vacinacaoService.excluir(vacinacaoId, animalId, userId);

    if(!result) {
      return res.status(404).send();
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
}
