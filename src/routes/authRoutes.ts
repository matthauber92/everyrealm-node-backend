import express from 'express';
import {login} from "../controllers/authController";

const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Auth login
 *     description: Authenticate a user.
 *     parameters:
 *       - in: formData
 *         name: username
 *         description: The username of the user.
 *         required: true
 *         type: string
 *       - in: formData
 *         name: password
 *         description: The password of the user.
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Successful response with user login
 *       400:
 *         description: Bad request (e.g., invalid input)
 */
router.post('/login', login);

export default router;
