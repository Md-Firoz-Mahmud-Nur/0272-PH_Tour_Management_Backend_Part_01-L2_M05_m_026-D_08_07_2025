import { request, response } from "express";
import { User } from "./user.model";
import httpStatus from "http-status-codes";

const createUser = async (req = request, res = response) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });

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
