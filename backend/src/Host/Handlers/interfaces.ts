import { NextFunction, Request, Response } from 'express';

export interface HandlerInterface {
  req: Request;
  res: Response;
  next: NextFunction;
}
