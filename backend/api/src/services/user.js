import User from "../models/user.js"

// Serviço para obter todos os usuários
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error("Erro ao obter os usuários.");
  }
};

// Serviço para criar um usuário
export const createUser = async (
  fullName, email, address, phone, birthDate, gender, role, profilePicture, password, crm, specialty, education, professionStartDate, clinic, schedule
) => {
  try {
    // Verificar se o email já existe
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      throw new Error("Email já registrado");
    }

    // Criar o usuário
    const newUser = new User({
      fullName: fullName, // Alterado de "name" para "fullName"
      email: email,
      password: password,
      phone: phone,
      address: address,
      birthDate: birthDate,
      gender: gender,
      role: role,
      profilePicture: profilePicture,
    });

    // Salvar o usuário
    await newUser.save();

    // Se for médico, criar também o registro de médico
    if (role === "Médico") {
      const newDoctor = new Doctor({
        userId: newUser._id,
        crm: crm,
        specialty: specialty,
        education: education,
        professionStartDate: professionStartDate,
        clinic: clinic,
        schedule: schedule,
      });

      await newDoctor.save();

      // Atualizar o user com doctorId
      newUser.doctorId = newDoctor._id;
      await newUser.save();
    }

    // Montar a resposta com dados importantes
    const response = {
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
        doctorId: newUser.doctorId || null,
      },
    };

    return response;

  } catch (err) {
    console.error(err);  // Loga o erro real para debug
    throw new Error("Erro ao criar o usuário.");
  }
};


// Serviço para deletar um usuário
export const deleteUser = async (userId) => {
  try {
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      throw new Error("Usuário não encontrado.");
    }
    return result;
  } catch (err) {
    throw new Error("Erro ao deletar o usuário.");
  }
};

// Serviço para apagar todos os usuários
export const deleteAllUsers = async () => {
  try {
    const result = await User.deleteMany({});
    return result;
  } catch (err) {
    throw new Error("Erro ao apagar todos os usuários.");
  }
};