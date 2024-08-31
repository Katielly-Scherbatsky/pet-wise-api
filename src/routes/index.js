import petRoutes from './pet.routes.js';
import usuarioRoutes from './usuario.routes.js';
import autenticacaoRoutes from './autenticacao.routes.js';
import vacinacaoRoutes from './vacinacao.routes.js';

const routes = (app) => {
  autenticacaoRoutes(app);
  petRoutes(app);
  usuarioRoutes(app);
  vacinacaoRoutes(app);
};

export default routes;
