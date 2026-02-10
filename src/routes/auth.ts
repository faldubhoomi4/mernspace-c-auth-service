import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js'

const router = Router();
const Authontroller = new AuthController();

router.post('/register', (req, res) => Authontroller.register(req, res));

export default router;
