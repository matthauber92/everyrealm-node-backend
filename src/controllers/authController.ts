import {prisma} from "../db";
import {Request, response, Response} from "express";

const bcrypt = require('bcrypt');

const login = async (req: Request, res: Response) => {
  const {username, password} = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {username: { equals: username }}
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const hashedPassword = user?.password;

    // Check if hashedPassword is defined and is a string
    if (typeof hashedPassword !== 'string') {
      return res.status(500).json({ message: 'Invalid password hash' });
    }

    // Check if password is provided in the request body
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Compare passwords using bcrypt.compareSync
    const passwordMatch = bcrypt.compareSync(password, hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // res['cookie']['session_token'] = user.id;
    res.status(200).json({message: 'Login successful'});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

export {
  login
}
