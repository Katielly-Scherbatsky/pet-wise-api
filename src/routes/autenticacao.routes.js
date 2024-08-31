import { login } from '../controllers/autenticacao.controller.js';

const autenticacaoRoutes = app => {
  app.post('/api/autenticacao', login);
}

export default autenticacaoRoutes;
