import { getAllTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController";
import { Router } from "express";

const router = Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.patch("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

export default router;