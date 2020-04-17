// Esse destructuring está importando apenas a classe Routes do framework express
import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
