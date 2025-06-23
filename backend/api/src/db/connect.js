import mongoose from "mongoose";
import User from "../models/user.js"; // importação correta, com "user.js" minúsculo

const mongoURI = `mongodb://${process.env.MONGO_HOST || "localhost"}:27017/mydatabase`;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("🌱 Conexão com o MongoDB estabelecida com sucesso.");

    // Procura o admin pelo email correto
    const existingAdmin = await User.findOne({ email: "admin@hotmail.com" });

    if (!existingAdmin) {
      const adminUser = new User({
        fullName: "Admin",
        email: "admin@hotmail.com",
        password: "admin",
        phone: "0000000000", // preencher depois
        address: {
          street: "Rua Admin",
          number: "0",
          neighborhood: "Centro",
          city: "AdminCity",
          state: "AC",
          zip: "00000-000",
        },
        birthDate: new Date("1990-01-01"), // preencher depois
        gender: "Prefiro não dizer", // pode ser opcional
        role: "Administrador", // tem que ser exatamente igual ao enum
      });

      await adminUser.save();
      console.log("✅ Usuário Admin criado com sucesso (email: admin@hotmail.com, senha: admin).");
    } else {
      console.log("ℹ️ Usuário Admin já existe.");
    }
  } catch (err) {
    // Evita crashar no erro de chave duplicada
    if (err.code === 11000) {
      console.log("ℹ️ Usuário Admin já existe (erro de duplicidade ignorado).");
    } else {
      console.error("Erro ao conectar ao MongoDB:", err);
      process.exit(1);
    }
  }
};
