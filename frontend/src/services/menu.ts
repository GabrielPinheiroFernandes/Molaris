import type IMenu from "../interfaces/IMenu";

const apiUrl = import.meta.env.VITE_API_URL;

export default async function fetchMenuData(): Promise<IMenu[]> {
  try {
    const response = await fetch(`${apiUrl}/menu`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    const data: IMenu[] = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
    return [];
  }
}
