import express from 'express';
import {getAllOrders, getOrderById, createOrder} from '../controllers/orderController';
import {authenticate} from "../middleware/auth";

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retrieve a list of Orders
 *     description: Retrieve a list of Orders.
 *     responses:
 *       200:
 *         description: Successful response with the list of Orders
 */
router.get('/orders', authenticate, getAllOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Retrieve an Order by ID
 *     description: Retrieve an Order by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the order to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with the Order from the ID
 *       404:
 *         description: Order not found
 */
router.get('/orders/:id', authenticate, getOrderById);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new Order
 *     description: Create a new Order.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalCost:
 *                 type: number
 *                 description: The total cost of the order.
 *               orderItems:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/OrderCreateInput'
 *             required:
 *               - totalCost
 *               - orderItems
 *     responses:
 *       201:
 *         description: Successful response with the created Order
 *       400:
 *         description: Bad request (e.g., invalid input)
 */
router.post('/orders', createOrder);

export default router;
