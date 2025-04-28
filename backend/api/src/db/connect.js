import mongoose from "mongoose";
import User from "../models/user.js"; // importação correta, com "user.js" minúsculo

const mongoURI = "mongodb://mongo_database:27017/mydatabase";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("🌱 Conexão com o MongoDB estabelecida com sucesso.");

    const existingAdmin = await User.findOne({ email: "admin" });
    if (!existingAdmin) {
      const adminUser = new User({
        fullName: "Admin",
        email: "admin",
        password: "admin",
        phone: "0000000000", // precisa preencher
        address: {
          street: "Rua Admin",
          number: "0",
          neighborhood: "Centro",
          city: "AdminCity",
          state: "AC",
          zip: "00000-000",
        },
        birthDate: new Date("1990-01-01"), // precisa preencher
        gender: "Prefiro não dizer", // pode ser opcional, mas já que existe enum, é bom passar
        role: "Administrador", // TEM QUE SER exatamente igual ao enum!
      });

      await adminUser.save();
      console.log("✅ Usuário Admin criado com sucesso (email: admin, senha: admin).");
    } else {
      console.log("ℹ️ Usuário Admin já existe.");
    }
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    process.exit(1);
  }
};
