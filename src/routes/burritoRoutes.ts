import express from 'express';
import { getAllBurritos } from '../controllers/burritoController';

const router = express.Router();

router.get('/burritos', getAllBurritos);

export default router;
