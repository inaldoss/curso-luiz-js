// Esse destructuring está importando apenas a classe Routes do framework express
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
