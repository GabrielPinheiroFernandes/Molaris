import styled from "styled-components";
import type { ButtonVariation } from ".";

interface IBaseStyle {
	background_color: string;
	color: string;
	hover: {
		color: string;
		background_color: string;
	};
}

const PRESSETS: Record<ButtonVariation, IBaseStyle> = {
	neutral: {
		background_color: "to-do",
		color: "to-do",
		hover: {
			background_color: "to-do",
			color: "to-do",
		},
	},
	accent: {
		background_color: "var(--color-blue-500)",
		color: "var(--color-zinc-300)",
		hover: {
			background_color: "var(--color-blue-500)",
			color: "var(--color-zinc-300)",
		},
	},
	ghost: {
		background_color: "to-do",
		color: "to-do",
		hover: {
			background_color: "to-do",
			color: "to-do",
		},
	},
	danger: {
		background_color: "to-do",
		color: "to-do",
		hover: {
			background_color: "to-do",
			color: "to-do",
		},
	},
	success: {
		background_color: "to-do",
		color: "to-do",
		hover: {
			background_color: "to-do",
			color: "to-do",
		},
	},
};

interface StyledButtonProps {
	variation: ButtonVariation;
}

export const StyledButton = styled.button<StyledButtonProps>`
    align-items: center;
    background-color: ${({ variation }) => PRESSETS[variation].background_color};
    box-sizing: border-box;
    border-radius: 0.5rem;
    color: ${({ variation }) => PRESSETS[variation].color};
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    height: 2.75rem;
    justify-content: center;
    padding: 0.75rem 1rem;
    transition: all 0.18s ease-in-out;

    &:hover {
        background-color: ${({ variation }) => PRESSETS[variation].hover.background_color};
        color: ${({ variation }) => PRESSETS[variation].hover.color};
    }

    &:active {
        transform: scale(0.98);
    }
`;
