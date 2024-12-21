import express from "express";
import {createTask, deleteTask, getTask, getTasks, updateTask,} from "../controllers/task/taskController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the Task Management API!"); // Or return a more appropriate response
});
router.post("/task/create", protect, createTask);
router.get("/tasks", protect, getTasks);
router.get("/task/:id", protect, getTask);
router.patch("/task/:id", protect, updateTask);
router.delete("/task/:id", protect, deleteTask);

export default router;