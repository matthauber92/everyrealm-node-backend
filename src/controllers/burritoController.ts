import { Request, Response } from 'express';
import {prisma} from "../db";

const getAllBurritos = async (req: Request, res: Response) => {
  try {
    const burritos = await prisma.burrito.findMany();
    res.status(200).json(burritos);
  } catch (error) {
    console.error('Error fetching burritos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {
  getAllBurritos
}
