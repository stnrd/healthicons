import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPhone = (passedProps: SvgProps) => {
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
      <G clipPath="url(#phone_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM26.42 34.76c-5.66-2.9-10.3-7.52-13.18-13.18l4.4-4.4c.56-.56.72-1.34.5-2.04A22.72 22.72 0 0 1 17 8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2 0 18.78 15.22 34 34 34 1.1 0 2-.9 2-2v-6.98c0-1.1-.9-2-2-2-2.48 0-4.9-.4-7.14-1.14-.7-.24-1.5-.06-2.04.48l-4.4 4.4Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="phone_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPhone;
