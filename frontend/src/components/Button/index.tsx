import { StyledButton } from "./style";

export type ButtonVariation =
	| "accent"
	| "neutral"
	| "ghost"
	| "danger"
	| "success";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variation?: ButtonVariation;
	children: React.ReactNode;
}

export default function Button({
	children,
	variation = "neutral",
	...rest
}: ButtonProps) {
	return (
		<StyledButton variation={variation} {...rest}>
			{children}
		</StyledButton>
	);
}
