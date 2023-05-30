import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBandageAdhesive = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#bandage_adhesive_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM27.535 9.15A8 8 0 1 1 38.85 20.466L20.465 38.849A8 8 0 0 1 9.15 27.536L27.536 9.15ZM24 16.929a2 2 0 0 1 2.828 0l4.243 4.243a2 2 0 0 1 0 2.829L24 31.07a2 2 0 0 1-2.828 0l-4.243-4.242a2 2 0 0 1 0-2.828l7.07-7.072Zm5.657 5.657-4.243-4.242-7.071 7.07 4.243 4.243 7.07-7.07Zm2.05-6.464a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Zm2.414-4a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm-5.414 1a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Zm7.414 6a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm-.414-4a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Zm-21 16.586a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414Zm.414 5.414a1 1 0 1 0-1.413-1.414 1 1 0 0 0 1.413 1.414Zm2.586-2.414a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414Zm-4.586-6a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414Zm-2.414 4a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="bandage_adhesive_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBandageAdhesive;
