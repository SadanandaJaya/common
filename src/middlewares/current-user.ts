import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IUserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      // if you use the same name as the existing interface then you are modifying the existing interface
      currentUser?: IUserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session?.jwt,
      process.env.JWT_KEY!
    ) as IUserPayload;

    req.currentUser = payload;
  } catch (err) {}

  next();
};
