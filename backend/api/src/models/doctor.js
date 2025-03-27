import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },  // Referência para User
  crm: { type: String, required: true },
  specialty: { type: String, required: true },
  education: { type: String, required: true },
  professionStartDate: { type: Date, required: true },
  clinic: { type: String, required: true },
  schedule: { type: [String], required: true }
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
