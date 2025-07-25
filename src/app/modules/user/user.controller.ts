import { NextFunction, request, response } from "express";
import httpStatus from "http-status-codes";
import { userService } from "./user.service";
import AppError from "../../errorHelpers/AppError";

const createUser = async (
  req = request,
  res = response,
  next: NextFunction
) => {
  try {
    // throw new Error("Fake Error");
    // throw new AppError(httpStatus.BAD_REQUEST, "Fake Error");

    const user = await userService.createUser(req.body);

    res
      .status(httpStatus.CREATED)
      .json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    // res
    //   .status(httpStatus.INTERNAL_SERVER_ERROR)
    //   .json({ message: `Something went wrong ${error} from user controller`, error });
    next(error);
  }
};

export const userControllers = {
  createUser,
};
