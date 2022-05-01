import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import Usuarios from "./src/controllers/Usuarios-controller.js";
import Bebidas from "./src/controllers/Bebidas-controller.js";
import Petiscos from "./src/controllers/Petiscos-controller.js";
import Ingressos from "./src/controllers/Ingressos-controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 1337

app.use(express.json());

app.listen(port, ()=> {
    console.log(`Servidor em http://localhost:${port}`)
});

app.use(cors());

Usuarios.routers(app);
Bebidas.routers(app);
Petiscos.routers(app);
Ingressos.routers(app);

