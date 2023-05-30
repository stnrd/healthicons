import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsOvalX4 = (passedProps: SvgProps) => {
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
      <G clipPath="url(#blister_pills_oval_x4_svg__a)" fill="#333">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 1 0 0 2v15a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V25a1 1 0 1 0 0-2V8Zm3 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
        <Path d="M19.243 11.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829ZM28.243 11.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829ZM19.243 31.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829ZM28.243 31.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829Z" />
      </G>
      <Defs>
        <ClipPath id="blister_pills_oval_x4_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBlisterPillsOvalX4;
