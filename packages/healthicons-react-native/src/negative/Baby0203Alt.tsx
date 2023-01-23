import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBaby0203Alt = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 49"
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#baby_0203_alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 .25h48v48H0v-48Zm24 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-9 16.041V16.697c.99.407 2.012.9 3.047 1.466.191.11.38.215.568.317a40.935 40.935 0 0 1 6.371 4.522c3.579 3.091 6.57 6.764 8.014 10.434v.855c0 3.98-2.813 7.959-9 7.959-6.188 0-9-4.548-9-7.959ZM26.293 21.49a43.134 43.134 0 0 0-1.26-1.048c2.457-.005 4.925-1.013 7.967-3.191v11.83c-1.738-2.752-4.107-5.346-6.707-7.591Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="baby_0203_alt_svg__a">
          <Path fill="#fff" transform="translate(0 .25)" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBaby0203Alt;
