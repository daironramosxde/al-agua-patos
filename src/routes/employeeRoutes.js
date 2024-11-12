import express from "express";
import { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from "../controllers/employeecontroller.js";
import { employeeSchema } from "../validators/employeeValidator.js";
import Joi from "joi";

const router = express.Router();

// Middleware de validación
const validateEmployee = (req, res, next) => {
    const { error } = employeeSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

// Rutas CRUD de empleados
router.post("/", validateEmployee, createEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", validateEmployee, updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
