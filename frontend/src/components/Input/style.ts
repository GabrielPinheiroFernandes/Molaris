import styled from "styled-components";

export const StyledInput = styled.input`
    box-sizing: border-box;
    display: inline-flex;
    border-radius: 0.5rem;
    background-color: var(--color-zinc-800);
    color: var(--color-zinc-300);
    font-size: 1rem;
    font-weight: 500;
    height: 2.75rem;
    line-height: 1.5rem;
    padding: 0.75rem 1rem;
    outline: none;
    width: 100%;
    transition: all 0.18s ease-in-out;
    
    &:focus {
        box-shadow: 0 0 0 2px var(--color-zinc-600);
    }
`;
