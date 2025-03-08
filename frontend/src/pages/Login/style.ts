import styled from "styled-components";
import background from "../../assets/background_landscape.png";

export const LoginContainer = styled.div`
    align-items: center;
    background: url(${`${background}`}) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    img {
        width: 100%;
        height: 40px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`;

export const LoginForm = styled.form`
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: var(--color-bg);
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    padding: 2.5rem 2rem;
    width: 30%;
`;
