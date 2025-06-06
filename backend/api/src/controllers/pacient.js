import * as pacientService from "../services/pacient.js";
import * as feedbacks from "../utils/feedbacks.js";
import faker from "faker";

// Criar paciente com dados aleatórios (modo dev/teste)
export const createRandomPacient = async (req, res) => {
  try {
    const newPacient = await pacientService.createPacient({
      name: faker.name.findName(),
      age: faker.datatype.number({ min: 1, max: 100 }),
      cpf: faker.helpers.replaceSymbolWithNumber("###.###.###-##"),
      rg: faker.helpers.replaceSymbolWithNumber("##.###.###-#"),
      gender: faker.helpers.randomize(["M", "F"]),
      birthDate: faker.date.past(50, new Date("2005-01-01")),
      phone: faker.phone.phoneNumber(),
      address: {
        street: faker.address.streetName(),
        number: faker.datatype.number({ min: 1, max: 9999 }).toString(),
        neighborhood: faker.address.county(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zip: faker.address.zipCode(),
      },
      notes: faker.lorem.sentence()
    });

    res.status(201).json({
      message: "Paciente criado com sucesso!",
      pacient: newPacient
    });
    feedbacks.created("pacient");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao criar paciente aleatório." });
  }
};

// Criar paciente com dados do body
export const createPacient = async (req, res) => {
  try {
    const newPacient = await pacientService.createPacient(req.body);
    res.status(201).json(newPacient);
    feedbacks.created("pacient");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Buscar todos os pacientes
export const getAllPacients = async (req, res) => {
  try {
    const pacients = await pacientService.getAllPacients();
    res.json(pacients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Deletar paciente por ID
export const deletePacient = async (req, res) => {
  const pacientId = req.params.id;

  try {
    const result = await pacientService.deletePacient(pacientId);
    res.json({
      message: "Paciente deletado com sucesso.",
      pacient: result,
    });
    feedbacks.deleted("pacient");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
