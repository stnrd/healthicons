import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCallCentre = (passedProps: SvgProps) => {
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
      <G clipPath="url(#call_centre_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm23.404 13.826a7.201 7.201 0 0 1 3.836 8.89l7.575 5.883V26.26h1.633a1.998 1.998 0 0 0 1.873-2.7l-4.234-11.273c-.349-.93-1.025-1.55-1.875-2.33l-.297-.275c-1.994-1.849-4.223-3.2-8.511-3.577v7.72Zm-6-7.585v7.605a7.201 7.201 0 0 0 5.673 13.234l10.585 8.22c-.257.12-.544.188-.847.188h-4.293V42H11.41V30.008C9.684 28.216 6 23.742 6 17.975 6 14.3 8.415 7.595 17.404 6.24Zm4 8.851a5.402 5.402 0 0 1 3.477 8.33L38.714 34.16a2.25 2.25 0 1 1-1.182 1.614l-14.07-10.922a5.4 5.4 0 1 1-4.058-9.76V6h2v9.092Zm.798 5.308a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="call_centre_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgCallCentre;
