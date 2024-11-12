import Joi from "joi";

export const employeeSchema = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    cargo: Joi.string().required(),
    salario: Joi.number().required(),
    fecha_contratacion: Joi.date(),
});
