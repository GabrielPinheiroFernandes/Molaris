import Input from "../../components/Input";
import { LoginContainer, LoginForm } from "./style";
import logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../constants/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
	const navigate = useNavigate();
  const changeUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
    2;
  };

  const changePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(api.urlBase + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Erro no login:", data.message || "Erro desconhecido");
        alert(
          "Falha no login: " + (data.message || "Verifique suas credenciais")
        );
        return;
      }

      // Salvando token no localStorage
      localStorage.setItem("token", data.token);

      console.log("✅ Login bem-sucedido!");
      // redirecionar, se quiser:
      navigate("/cadastro");
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
      alert("Erro inesperado. Tente novamente mais tarde.");
    }
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
