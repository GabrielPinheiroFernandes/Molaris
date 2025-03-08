import { Router } from "express";
import doctorController from "../controllers/doctor.controller.js";
import clientsController from "../controllers/clients.controller.js";
import consultaController from "../controllers/consulta.controller.js";
import userController from "../controllers/user.controller.js";


const router = Router();

// Rota inicial
router.get('/', (req, res) => {
    return res.status(200).json({ status: "Hello World!!" });
});

// **Doutores (Doctors)**
router.get('/doutores', doctorController.getAllDoctor);  // Lista todos os doutores
router.get('/doutores/:id', doctorController.getIdDoctor);  // Busca doutor por ID
router.post('/doutores/add', doctorController.addDoctor);  // Adiciona um novo doutor
router.put('/doutores/edit/:id', doctorController.editDoctor);  // Edita um doutor existente
router.delete('/doutores/del/:id', doctorController.delDoctor);  // Deleta um doutor

// **Clientes (Clients)**
router.get('/clientes', clientsController.getAllClients);  // Lista todos os clientes
router.get('/clientes/:id', clientsController.getIdClient);  // Busca cliente por ID
router.post('/clientes/add', clientsController.addClient);  // Adiciona um novo cliente
router.put('/clientes/edit/:id', clientsController.editClient);  // Edita um cliente
router.delete('/clientes/del/:id', clientsController.delClient);  // Deleta um cliente

// **Consultas (Associação entre Doutores e Clientes)**
router.get('/consultas', consultaController.getAllconsultas);  // Lista todas as consultas (associações entre doutores e clientes)

// Rota para listar todos os clientes de um doutor específico
router.get('/consultas/doutor/:id', consultaController.getClientsByDoctor);  // Lista clientes associados a um doutor específico

// Rota para listar todos os doutores de um cliente específico
router.get('/consultas/cliente/:id', consultaController.getDoctorsByClient);  // Lista doutores associados a um cliente específico

// Rota para criar uma nova consulta (associar um cliente a um doutor)
router.post('/consultas/add', consultaController.addConsulta);  // Cria uma nova consulta entre doutor e cliente

// Rota para deletar uma consulta (desassociar um cliente de um doutor)
router.delete('/consultas/del/:consultaId', consultaController.delConsulta);  // Remove a consulta entre doutor e cliente

// Rota para deletar uma consulta (desassociar um cliente de um doutor)
router.put('/consultas/edit/:consultaId', consultaController.putConsulta);  // Remove a consulta entre doutor e cliente

// **Usuarios (Users)**
router.get('/usuarios', userController.getAlluser);  // Lista todos os doutores
router.get('/usuarios/:id', userController.getIduser);  // Busca doutor por ID
router.post('/usuarios/add', userController.adduser);  // Adiciona um novo doutor
router.put('/usuarios/edit/:id', userController.edituser);  // Edita um doutor existente
router.delete('/usuarios/del/:id', userController.deluser);  // Deleta um doutor

export default router;

