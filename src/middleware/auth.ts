import {NextFunction, Request, Response} from "express";

const API_KEY = "every-realm";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).send("Not Authenticated");
  }

  next();
};