import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true },
    fecha_contratacion: { type: Date, default: Date.now }
});

export default mongoose.model("Employee", employeeSchema);
