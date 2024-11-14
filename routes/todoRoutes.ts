import { Router, Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";
import { User } from "../models/user";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    next(err);
  }
});
