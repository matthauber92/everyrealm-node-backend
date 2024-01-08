import express from 'express';
import {getAllBurritos} from '../controllers/burritoController';

const router = express.Router();


/**
 * @swagger
 * /api/burrito:
 *   get:
 *     summary: Retrieve a list of Burritos
 *     description: Retrieve a list of Burritos.
 *     security:
 *        - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Successful response with the list of Burritos
 */
router.get('/burrito', getAllBurritos);

export default router;
