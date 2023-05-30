import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills4 = (passedProps: SvgProps) => {
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
      <G clipPath="url(#pills_4_svg__a)" fill="#333">
        <Path d="M18.058 13.341a1 1 0 0 0-1.104-1.667l-6.012 3.985a1 1 0 0 0 1.104 1.667l6.012-3.985ZM33.188 10.77a1 1 0 1 0-1.876.694l2.5 6.765a1 1 0 1 0 1.876-.693l-2.5-6.765ZM16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 0 1 1.846-.77l2.78 6.655a1 1 0 0 1-.538 1.308ZM36.884 31.902a1 1 0 0 0-1.306-1.514l-5.462 4.71a1 1 0 0 0 1.306 1.514l5.462-4.71Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14.5 23a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm19 0a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM23 33.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0ZM33.5 42a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        />
      </G>
      <Defs>
        <ClipPath id="pills_4_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPills4;
