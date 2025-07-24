import { request, response } from "express";
import httpStatus from "http-status-codes";
import { userService } from "./user.service";

const createUser = async (req = request, res = response) => {
  try {
    const user = await userService.createUser(req.body);

    res
      .status(httpStatus.CREATED)
      .json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong ${error}`, error });
  }
};

export const userControllers = {
  createUser,
};
