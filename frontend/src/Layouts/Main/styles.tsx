import styled from "styled-components";

export const ApplicationGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    "menu nav"
    "menu content";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  padding: 0.5rem;
  width: 100vw;
`;

export const NavbarContainer = styled.div`
  display: flex;
  grid-area: nav;
  height: 4rem;
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  grid-area: menu;
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  grid-area: content;
  height: 100%;
  width: 100%;
`;
