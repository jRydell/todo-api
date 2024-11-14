import { Router, Request, Response, NextFunction } from "express";
import Todo from "../models/todo";

const router = Router();

// Get all todos
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

// Get a single todo by ID
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// Create a new todo
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    next(err);
  }
});

// Update a todo by ID
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (err) {
    next(err);
  }
});

// Delete a todo by ID
router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ message: "Todo deleted" });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
