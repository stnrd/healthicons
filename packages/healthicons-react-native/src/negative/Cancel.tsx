import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCancel = (passedProps: SvgProps) => {
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
      <G clipPath="url(#cancel_svg__a)" fill="#000">
        <Path d="M24 42c4.97 0 9.47-2.015 12.728-5.272L11.272 11.272A17.943 17.943 0 0 0 6 24c0 9.941 8.059 18 18 18ZM12.765 9.936l25.299 25.3A17.924 17.924 0 0 0 42 24c0-9.941-8.059-18-18-18-4.25 0-8.156 1.473-11.235 3.936Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        />
      </G>
      <Defs>
        <ClipPath id="cancel_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgCancel;
