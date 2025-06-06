import Patient from "../models/Patient.js";

export const getAllPacients = async () => {
  try {
    const pacients = await Patient.find();
    return pacients;
  } catch (err) {
    throw new Error("Erro ao obter os pacientes.");
  }
};

export const createPacient = async (pacientData) => {
  try {
    const { cpf } = pacientData;

    // Verifica se o CPF já está cadastrado
    const existingPacient = await Patient.findOne({ cpf });
    if (existingPacient) {
      throw new Error("CPF já registrado.");
    }

    const newPacient = new Patient(pacientData);
    await newPacient.save();

    return {
      pacient: {
        _id: newPacient._id,
        name: newPacient.name,
        age: newPacient.age,
        cpf: newPacient.cpf,
        gender: newPacient.gender,
        isActive: newPacient.isActive
      },
    };
  } catch (err) {
    console.error(err);
    throw new Error("Erro ao criar o paciente.");
  }
};

export const deletePacient = async (pacientId) => {
  try {
    const result = await Patient.findByIdAndDelete(pacientId);
    if (!result) {
      throw new Error("Paciente não encontrado.");
    }
    return result;
  } catch (err) {
    throw new Error("Erro ao deletar o paciente.");
  }
};

export const deleteAllPacients = async () => {
  try {
    const result = await Patient.deleteMany({});
    return result;
  } catch (err) {
    throw new Error("Erro ao apagar todos os pacientes.");
  }
};
