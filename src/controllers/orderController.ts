import { Request, Response } from 'express';
import { prisma } from "../db";
import {Prisma} from "@prisma/client";

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            burrito: true
          },
        },
      }
    });
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrderById = async (req: Request, res: Response) => {
  const orderId = req.params.id;

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId
      },
      include: {
        orderItems: {
          include: {
            burrito: true, // Include the related Burrito for each OrderItem
          },
        },
      },
    });

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const createOrder = async (req: Request, res: Response) => {
  const { orderItems, totalCost } = req.body;

  try {
    const newOrder = await prisma.order.create({
      data: {
        orderItems: {
          create: orderItems.map((orderItem: any) => ({
            quantity: orderItem.quantity,
            burrito: {
              connect: { id: orderItem.burrito.id }, // Replace with the actual unique identifier
            },
          })),
        },
        totalCost,
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export {
  getAllOrders,
  getOrderById,
  createOrder
}
