import userRepository from "../repository/user.repository.js";

async function getAlluser() {
  const users = await userRepository.getAlluser();
  return users;
}
async function getIduser(id) {
  const users = await userRepository.getIduser(id);
  return users;
}
async function adduser(body) {
  // console.log(body)
  const { EMAIL,PASSWORD } = body;

  const users = await userRepository.adduser(
    EMAIL,
    PASSWORD,
  );
  console.log(users);
  return users;
}
async function edituser(id,body) {
    const {EMAIL,PASSWORD,TOKEN} = body

    const users = await userRepository.edituser(id,EMAIL,PASSWORD,TOKEN);
    return users;
}
async function deluser(id) {
  const users = await userRepository.deluser(id);
  return users;
}

export default { getAlluser, getIduser, adduser, edituser, deluser };
