import mongoose from "mongoose";

const mongoURI = "mongodb://mongo_database:27017/mydatabase";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("🌱 Conexão com o MongoDB estabelecida com sucesso.");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    process.exit(1);
  }
};
