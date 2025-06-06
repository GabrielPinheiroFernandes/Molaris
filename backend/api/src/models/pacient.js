import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  cpf: { type: String, required: true, unique: true },
  rg: { type: String, required: true },
  gender: { type: String, enum: ["M", "F"], required: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String },
    number: { type: String },
    neighborhood: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  notes: { type: String, default: "" }, // Para observações
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
