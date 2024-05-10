import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInteroperability = (passedProps: SvgProps) => {
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
      <G clipPath="url(#interoperability_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm18-9a3 3 0 0 1-5.255 1.979l-4.874 1.95a1 1 0 0 1-.742-1.857l4.873-1.95A3 3 0 1 1 42 19ZM9 22c.922 0 1.747-.416 2.297-1.07l5.352 2.006a1 1 0 0 0 .702-1.872L12 19.057V19a3 3 0 1 0-3 3ZM21 7.902c0 1.27.788 2.355 1.902 2.793V16.5a1 1 0 1 0 2 0v-5.736A3.001 3.001 0 0 0 24 4.902a3 3 0 0 0-3 3ZM17 38a3 3 0 1 1-2.361-2.932l4.075-5.186a1 1 0 1 1 1.572 1.236l-3.939 5.013c.409.513.653 1.163.653 1.869Zm14.5 0a3 3 0 1 0 2.361-2.932l-4.075-5.186a1 1 0 1 0-1.572 1.236l3.939 5.013A2.987 2.987 0 0 0 31.5 38Z"
        />
      </G>
      <Defs>
        <ClipPath id="interoperability_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgInteroperability;
