import styled from "styled-components";

export const CadastroContainer = styled.div`
    display: flex;
    padding: 32px;
    box-sizing: border-box;
    gap: 30px;
    width: 100%;
    height: 100vh;
    background-color: var(--gray-700);
`;

export const PacienteContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-600);

    p{
        max-width: 300px;
        text-align: center;
        word-wrap: break-word;
        white-space: normal;
    }
`;

export const UsuarioContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-600);

    p{
        max-width: 300px;
        text-align: center;
        word-wrap: break-word;
        white-space: normal;
    }
`;

export const componente = styled.div`
    display: flex;
    border: 1px solid blue;
`;