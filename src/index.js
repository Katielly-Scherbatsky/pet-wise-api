import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import authMiddleware from './middlewares/auth.middleware.js';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  if (req.path.startsWith('/api/private')) {
    authMiddleware(req, res, next);
  } else {
    next();
  }
});

app.use(cors());
app.use(express.json());

routes(app);

app.listen(3000);

console.log('servidor iniciado.');
