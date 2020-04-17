// Esse destructuring está importando apenas a classe Routes do framework express
import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
