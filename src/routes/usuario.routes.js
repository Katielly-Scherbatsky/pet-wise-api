import { criar, atualizar } from '../controllers/usuario.controller.js';

const usuarioRoutes = app => {
  app.post('/api/usuario', criar);
  app.put('/api/private/usuario/:id', atualizar);
}

export default usuarioRoutes;
