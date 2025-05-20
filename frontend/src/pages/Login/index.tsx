import Input from "../../components/Input";
import { LoginContainer, LoginForm } from "./style";
import logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import { useState } from "react";

export default function Login() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const changeUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser(event.target.value);
		2;
	};

	const changePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		console.log("deu submit XD");
	};

	return (
		<LoginContainer>
			<LoginForm>
				<img src={logo} alt="Logo - Molaris" />
				<div>
					<Input
						value={user}
						onChange={changeUserInput}
						name="login"
						placeholder="Usuário"
					/>
					<Input
						type="password"
						value={password}
						onChange={changePasswordInput}
					name="password"
						placeholder="Senha"
					/>
				</div>
				<Button type="submit" onClick={handleSubmit} variation="accent">
					Entrar
				</Button>
			</LoginForm>
		</LoginContainer>
	);
}
