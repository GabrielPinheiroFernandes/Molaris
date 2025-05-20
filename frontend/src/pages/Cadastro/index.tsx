
import { CadastroContainer, PacienteContainer, UsuarioContainer } from "./style";

export default function Cadastro() {
    return <CadastroContainer>
        <PacienteContainer>
            <img src="" alt="" />
            <p>Cadastro de Paciente</p>
            <p>Preencha  os dados para cadastrar
um novo usuário no sistema</p>
        </PacienteContainer>

        <UsuarioContainer>
            <img src="" alt="" />
            <p>Cadastro de Usuário</p>
            <p>Cadastre um novo paciente preenchendo as informações</p>
        </UsuarioContainer>
    </CadastroContainer>
}

interface SisaqueProps {
    label: string;
    description ?: string;
}

function PacienteContent({label,description}: SisaqueProps){
    return <div className="">
        <h1>{label}</h1>
        <h1>{description}</h1>
    </div>
}