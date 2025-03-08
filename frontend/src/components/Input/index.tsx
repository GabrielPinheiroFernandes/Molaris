import { StyledInput } from "./style";

export default function Input({
	...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
	return <StyledInput {...rest} />;
}
