import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Importando o modelo de Doctor
import Doctor from "./doctor.js";  // Certifique-se de importar o modelo Doctor corretamente

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: String,
    number: String,
    neighborhood: String,
    city: String,
    state: String,
    zip: String,
  },
  birthDate: { type: Date, required: true },
  gender: { 
    type: String, 
    enum: ["Masculino", "Feminino", "Outro", "Prefiro não dizer"], 
    default: null 
  },
  registrationDate: { type: Date, default: Date.now },
  profilePicture: { type: String, default: null },
  role: { type: String, required: true, enum: ["Administrador", "Médico"] },
  isActive: { type: Boolean, default: true },

  // Ligação com a coleção de médicos, mas apenas se for um médico
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", default: null }
});

// Hash da senha antes de salvar o usuário
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Método para verificar a senha do usuário
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;