import { useState } from "react";
import {
  LogoContainer,
  MenuContainer,
  MenuButton,
  MenuLinksContainer,
  ButtonsContainer,
  SettingsButton,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import getIcon, { type IconsNames } from "../../utils/getIcon";
import cat_pfp from "../../assets/cat-pfp.jpg";

interface MenuItem {
  name: string;
  link: string;
  icon: IconsNames;
}

interface MenuProps {
  menus: MenuItem[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function Menu({ menus, setActive }: MenuProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [activeButton, setActiveButton] = useState(-1);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const onMouseEnter = () => setIsHovering(true);

  const onMouseLeave = () => {
    if (!showSubmenu) {
      setIsHovering(false);
    }
  };

  const handleLinkClick = (idx: number) => {
    setActiveLink(idx);
    setActive(idx.toString());
  };

  const handleSettingsClick = (idx: number) => {
    setActiveButton(idx);
    setShowSubmenu(true);
  };

  return (
    <>
      <MenuContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        $isHovering={isHovering}
      >
        <LogoContainer $isHovering={isHovering}>
          <img src={cat_pfp} alt="Profile Avatar" />
          {isHovering && (
            <div>
              <h2>Silly cats Inc.</h2>
              <span>travazap</span>
            </div>
          )}
        </LogoContainer>
        <MenuLinksContainer>
          {menus?.map((menu: MenuItem, idx: number) => (
            <MenuButton
              $isActive={idx === activeLink}
              key={menu.name}
              onClick={() => handleLinkClick(idx)}
            >
              <div>
                <FontAwesomeIcon
                  size="lg"
                  icon={getIcon(menu.icon) as unknown as Solid.IconDefinition}
                />
              </div>
              {isHovering && <span>{menu.name}</span>}
            </MenuButton>
          ))}
        </MenuLinksContainer>

        <ButtonsContainer>
          <SettingsButton
            onClick={() => handleSettingsClick(0)}
            $isActive={activeButton === 0}
          >
            <div>
              <FontAwesomeIcon size="lg" icon={Solid.faGear} />
            </div>
            {isHovering && <span>Settings</span>}
          </SettingsButton>
          <button type="button">
            <div>
              <FontAwesomeIcon size="lg" icon={Solid.faSignOut} />
            </div>
            {isHovering && <span>SingOut</span>}
          </button>
        </ButtonsContainer>
      </MenuContainer>
    </>
  );
}
