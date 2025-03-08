import userService from "../services/user.service.js";

async function getAlluser(req, res) {
  const users = await userService.getAlluser();
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':users});
}

async function getIduser(req, res) {
  const users = await userService.getIduser(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':users});
}
async function adduser(req, res) {
    // console.log(req.body)
  
    const users = await userService.adduser(req.body);
    if (users != null) {
      return res.status(200).json({"message": "Requisição bem-sucedida!", 'data': users});
    } else {
      return res.status(500).json({"message": "Já existe um usuário com esse email", 'data': users});
    }
  }

async function edituser(req, res) {
  const users = await userService.edituser(req.params.id,req.body);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':users});
}

async function deluser(req, res) {
  const users = await userService.deluser(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':users});
}

export default { getAlluser, getIduser, adduser, edituser, deluser };
