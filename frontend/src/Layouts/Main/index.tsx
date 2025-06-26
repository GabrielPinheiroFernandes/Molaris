import { lazy, Suspense, useEffect, useState } from "react";
import {
  ApplicationGrid,
  ContentContainer,
  MenuContainer,
  NavbarContainer,
} from "./styles";
import type IMenu from "../../interfaces/IMenu";
import fetchMenuData from "../../services/menu";
import Cadastro from "../../pages/Cadastro";
import logo from "../../assets/logo.png";

const Menu = lazy(() => import("../../components/Menu"));

export default function Main() {
  const [menus, setMenus] = useState<IMenu[]>([]);
  const [activeMenu, setActiveMenu] = useState("");

  const getAndSetMenuData = async () => {
    const menuData = await fetchMenuData();
    if (menuData) setMenus(menuData);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <does not make sense in this situation>
  useEffect(() => {
    getAndSetMenuData();
  }, []);

  return (
    <ApplicationGrid>
      <NavbarContainer />
      <MenuContainer>
        <Suspense fallback="carregando">
          <Menu menus={menus} active={activeMenu} setActive={setActiveMenu} />
        </Suspense>
      </MenuContainer>
      <ContentContainer>
        {activeMenu === "3" ? <Cadastro /> : <>EM DESENVOLVIMENTO</>}
      </ContentContainer>
    </ApplicationGrid>
  );
}
