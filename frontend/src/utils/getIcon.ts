import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

export type IconsNames = keyof typeof SolidIcons;

export default function getIcon(
  name: IconsNames
): SolidIcons.IconDefinition | SolidIcons.IconPrefix | SolidIcons.IconPack {
  const icon = SolidIcons[name];
  return icon ? icon : SolidIcons.fa0;
}
