import { listar, criar, atualizar, excluir } from '../controllers/pet.controller.js';

const petRoutes = app => {
  app.get('/api/private/pet', listar);
  app.post('/api/private/pet', criar);
  app.put('/api/private/pet/:id', atualizar);
  app.delete('/api/private/pet/:id', excluir);
}

export default petRoutes;
