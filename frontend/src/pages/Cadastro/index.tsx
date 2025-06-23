
import { CadastroContainer, PacienteContainer, UsuarioContainer } from "./style";
import person from "../../assets/person.svg"
import people_alt from"../../assets/people_alt.svg"

export default function Cadastro() {
    return <CadastroContainer>
        <PacienteContainer>
            <svg width="114" height="115" viewBox="0 0 114 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_160_1006)">
<rect width="114" height="114" transform="translate(0 0.5)" fill="#27272A"/>
<path d="M57 57.5C67.4975 57.5 76 48.9975 76 38.5C76 28.0025 67.4975 19.5 57 19.5C46.5025 19.5 38 28.0025 38 38.5C38 48.9975 46.5025 57.5 57 57.5ZM57 67C44.3175 67 19 73.365 19 86V90.75C19 93.3625 21.1375 95.5 23.75 95.5H90.25C92.8625 95.5 95 93.3625 95 90.75V86C95 73.365 69.6825 67 57 67Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_160_1006">
<rect width="114" height="114" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

            <h2>Cadastro de Paciente</h2>
            <p>Preencha  os dados para cadastrar
                um novo usuário no sistema</p>
            <span className="ajuda"><img src="/src/assets/help_outline.png" alt="ajuda" />Ajuda</span>
        </PacienteContainer>

        <UsuarioContainer>
        <svg width="114" height="115" viewBox="0 0 114 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_160_1050)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.1826 62.8674C85.6901 67.2849 90.2501 73.2699 90.2501 81.2499V95.4999H104.5C107.113 95.4999 109.25 93.3624 109.25 90.7499V81.2499C109.25 70.8949 92.2926 64.7674 79.1826 62.8674Z" fill="currentColor"/>
<path d="M42.75 57.5C53.2434 57.5 61.75 48.9934 61.75 38.5C61.75 28.0066 53.2434 19.5 42.75 19.5C32.2566 19.5 23.75 28.0066 23.75 38.5C23.75 48.9934 32.2566 57.5 42.75 57.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.2501 57.5C81.7476 57.5 90.2501 48.9975 90.2501 38.5C90.2501 28.0025 81.7476 19.5 71.2501 19.5C69.0176 19.5 66.9276 19.975 64.9326 20.64C68.8751 25.5325 71.2501 31.755 71.2501 38.5C71.2501 45.245 68.8751 51.4675 64.9326 56.36C66.9276 57.025 69.0176 57.5 71.2501 57.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.75 62.25C30.0675 62.25 4.75 68.615 4.75 81.25V90.75C4.75 93.3625 6.8875 95.5 9.5 95.5H76C78.6125 95.5 80.75 93.3625 80.75 90.75V81.25C80.75 68.615 55.4325 62.25 42.75 62.25Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_160_1050">
<rect width="114" height="114" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

            <h2>Cadastro de Usuário</h2>
            <p>Cadastre um novo paciente preenchendo as informações</p>
            <span className="ajuda"><img src="/src/assets/help_outline.png" alt="ajuda" />Ajuda</span>
        </UsuarioContainer>
    </CadastroContainer>
}

// interface SisaqueProps {
//     label: string;
//     description ?: string;
// }

// function PacienteContent({label,description}: SisaqueProps){
//     return <div className="">
//         <h1>{label}</h1>
//         <h1>{description}</h1>
//     </div>
// }