import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
swaggerDefinition: {
    openapi: "3.0.0",
    info: {
    title: "SGLAAP API",
    version: "1.0.0",
    description: "API para gestionar empleados de SGLAAP",
    },
    servers: [
    {
        url: "http://localhost:9000",
    },
    ],
},
    apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
