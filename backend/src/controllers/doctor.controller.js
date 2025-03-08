import doctorService from "../services/doctor.service.js";

async function getAllDoctor(req, res) {
  const doctors = await doctorService.getAllDoctor();
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function getIdDoctor(req, res) {
  const doctors = await doctorService.getIdDoctor(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function addDoctor(req, res) {
  // console.log(req.body)

  const doctors = await doctorService.addDoctor(req.body);

  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function editDoctor(req, res) {
  const doctors = await doctorService.editDoctor(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function delDoctor(req, res) {
  const doctors = await doctorService.delDoctor(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

export default { getAllDoctor, getIdDoctor, addDoctor, editDoctor, delDoctor };
