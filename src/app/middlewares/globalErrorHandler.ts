import { NextFunction, Request, Response } from "express";
import { envVariables } from "../config/env";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = `Something went wrong ${err.message} from global middleware`;

  res.status(statusCode).json({
    success: false,
    message,
    err,
    stack: envVariables.NODE_ENV === "development" ? err.stack : null,
  });
};
