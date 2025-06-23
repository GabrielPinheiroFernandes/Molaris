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
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-600);
    cursor: pointer;
    
    &:hover{
        path {fill: var(--color-cyan)}
        h2{color: var(--color-cyan)}
        p {color: var(--color-cyan);}
        border: 1px solid var(--color-cyan)
    }
    
    h2{
        font-weight: bold;
        font-size:18px;
        margin-bottom: 16px;
    }
    p{
        max-width: 300px;
        text-align: center;
        word-wrap: break-word;
        white-space: normal;
    }

    .ajuda {
        position: absolute;
        bottom: 42px;
        right: 50px;
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--blue-500);
        font-size: 14px;
        font-style: underline;
        text-decoration: underline;
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
          }
    }

    
`;

export const UsuarioContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-600);
    cursor: pointer;


    &:hover{
        
        path {fill: var(--color-cyan)}
        h2{color: var(--color-cyan)}
        p {color: var(--color-cyan);}
        border: 1px solid var(--color-cyan)
    }

    h2{
        font-weight: bold;
        font-size:18px;
        margin-bottom: 16px;
    }

    p{
        max-width: 300px;
        text-align: center;
        word-wrap: break-word;
        white-space: normal;
    }

    .ajuda {
        position: absolute;
        bottom: 42px;
        right: 50px;
        display: flex;
        align-items: center;
        gap: 6px;

        color: var(--blue-500);
        font-size: 14px;
        font-style: underline;
        text-decoration: underline;
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
          }
    }
`;

export const componente = styled.div`
    display: flex;
    border: 1px solid blue;
`;