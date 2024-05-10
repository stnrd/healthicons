import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgArm = (passedProps: SvgProps) => {
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
      <G clipPath="url(#arm_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM4 27v10h9.053c1.29 0 2.57-.208 3.794-.616L21 35h1.343a4 4 0 0 0 2.829-1.172L26 33l2.147-.859a12 12 0 0 0 4.806-3.513L38 22.5l5-3 1-7-.083-.062a2 2 0 0 0-2.989.705L40 15l-2 1.5.712-.978a2 2 0 0 0-.345-2.72L38 12.5l-3.123 3.904a4 4 0 0 0-.877 2.5V21l-5.282 1.668a12 12 0 0 0-6.562 5.083L22 28l-2.567-.642a11.999 11.999 0 0 0-2.91-.358H4Z"
        />
      </G>
      <Defs>
        <ClipPath id="arm_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgArm;
