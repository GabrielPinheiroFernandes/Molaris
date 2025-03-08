import doctorRepository from "../repository/doctor.repository.js";

async function getAllDoctor() {
  const doctors = await doctorRepository.getAllDoctor();
  return doctors;
}
async function getIdDoctor(id) {
  const doctors = await doctorRepository.getIdDoctor(id);
  return doctors;
}
async function addDoctor(body) {
  // console.log(body)
  const { NOME, CRO, HORA_ENTRADA, HORA_SAIDA, OBSERVACAO } = body;

  const doctors = await doctorRepository.addDoctor(
    NOME,
    CRO,
    HORA_ENTRADA,
    HORA_SAIDA,
    OBSERVACAO
  );
  console.log(doctors);
  return doctors;
}
async function editDoctor(id) {
  const doctors = await doctorRepository.editDoctor(id);
  return doctors;
}
async function delDoctor(id) {
  const doctors = await doctorRepository.delDoctor(id);
  return doctors;
}

export default { getAllDoctor, getIdDoctor, addDoctor, editDoctor, delDoctor };
