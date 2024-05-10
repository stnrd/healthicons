import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEcoCare = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#eco_care_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M17 24.959c0 2.807 3.142 3.703 5.441 2.957-1.098 3.251-.078 5.784.83 6.764l1.467-1.36c-.356-.384-1.164-1.945-.551-4.267C25.298 31.943 31 31.47 31 27.198V16c-2.882 2.439-5.961 3.403-8.495 4.197C19.323 21.193 17 21.92 17 24.959Zm7.433 3.32-1.867-.707c.5-1.32 1.35-2.752 2.69-4.241a1 1 0 1 1 1.487 1.338c-1.183 1.315-1.901 2.53-2.31 3.61Z" />
        <Path d="M48 0H0v48h48V0ZM15.562 7C10.037 7 6 12.64 6 18.724 6 32.304 24 41 24 41s18-9.256 18-22.276C42 12.642 37.965 7 32.437 7c-3.835 0-6.68 2.531-8.437 6.121C22.243 9.531 19.398 7 15.562 7Z" />
      </G>
      <Defs>
        <ClipPath id="eco_care_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgEcoCare;
