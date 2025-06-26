import styled, { keyframes } from "styled-components";

interface MenuContainerProps {
  $isHovering?: boolean;
  $isActive?: boolean;
}

export const opacityTransition = keyframes`
    from {
        padding-left: 0;
        opacity: 0;
    }

    to {
        padding-left: .5rem;
        opacity: 1;
    }
`;

export const MenuContainer = styled.aside<MenuContainerProps>`
  background-color: #1c1c1e;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: var(--neutral-600);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  padding: 0.75rem;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: ${({ $isHovering }) => ($isHovering ? "14rem" : "4rem")};
`;

export const LogoContainer = styled.div<MenuContainerProps>`
  display: flex;

  img {
    border-radius: 0.25rem;
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
  }

  div {
    animation: ${opacityTransition} 0.5s ease forwards;
    display: ${({ $isHovering }) => ($isHovering ? "flex" : "none")};
    flex-direction: column;
    gap: 0.25rem;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    h2,
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    h2 {
      font-size: 0.875rem;
      font-weight: 700;
    }

    span {
      font-size: 0.625rem;
    }
  }
`;

export const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuButton = styled.a<MenuContainerProps>`
  align-items: center;
  background-color: ${({ $isActive }) =>
    $isActive ? "#00AEF2" : "transparent"};
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#00AEF2" : "#27272A")};
  }

  div {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
  }

  span {
    animation: ${opacityTransition} 0.5s ease forwards;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 4.5rem);
  }
`;

export const ButtonsContainer = styled.div`
  bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  left: 0.75rem;
  position: absolute;
  width: calc(100% - 1.5rem);

  button {
    align-items: center;
    background-color: transparent;
    border-radius: 0.5rem;
    border: none;
    color: var(--neutral-300);
    cursor: pointer;
    display: flex;
    padding: 0;

    &:hover {
      background-color: var(--zinc-800);
    }

    div {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 2.5rem;
      width: 2.5rem;
    }

    span {
      animation: ${opacityTransition} 0.5s ease forwards;
      display: flex;
      font-size: 0.85rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: calc(100% - 4.5rem);
    }
  }
`;

export const SettingsButton = styled.button<MenuContainerProps>`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--indigo-500)" : "transparent"} !important;

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "var(--indigo-500)" : "var(--zinc-800)"} !important;
  }
`;
