import { criar, listar, atualizar, excluir } from '../controllers/vacinacao.controller.js';

const vacinacaoRoutes = app => {
  app.get('/api/private/animal/:animalId/vacinacao', listar);
  app.post('/api/private/animal/:animalId/vacinacao', criar);
  app.put('/api/private/animal/:animalId/vacinacao/:vacinacaoId', atualizar);
  app.delete('/api/private/animal/:animalId/vacinacao/:vacinacaoId', excluir);
}

export default vacinacaoRoutes;
