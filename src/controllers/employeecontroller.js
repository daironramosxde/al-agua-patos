import Employee from "../models/employee.js";

// Crear un empleado
export const createEmployee = async (req, res) => {
try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
} catch (error) {
    res.status(400).json({ message: error.message });
}
};

// Obtener todos los empleados
export const getEmployees = async (req, res) => {
try {
    const employees = await Employee.find();
    res.json(employees);
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

// Obtener un empleado por ID
export const getEmployeeById = async (req, res) => {
try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(employee);
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

// Actualizar empleado
export const updateEmployee = async (req, res) => {
try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(employee);
} catch (error) {
    res.status(400).json({ message: error.message });
}
};

// Eliminar empleado
export const deleteEmployee = async (req, res) => {
try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json({ message: "Empleado eliminado" });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};
