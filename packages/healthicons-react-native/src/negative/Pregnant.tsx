import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPregnant = (passedProps: SvgProps) => {
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
      <G clipPath="url(#pregnant_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm29 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-8.176 19.117c.254.185.537.302.827.353.346 3.873.349 7.675.349 13.53v1a2 2 0 0 0 4 0v-1l1.462-7.692c.2-.061.448-.143.73-.25.677-.256 1.604-.675 2.484-1.316.877-.637 1.816-1.573 2.329-2.892.533-1.372.517-2.93-.148-4.593-1.148-2.869-3.243-5.346-4.943-7.046a32.898 32.898 0 0 0-2.247-2.048 26.494 26.494 0 0 0-.906-.718l-.058-.043-.017-.013-.006-.004-.002-.001c-.001-.001-.002-.002-1.178 1.616l1.176-1.617A2 2 0 0 0 23.5 14H21.5c-.748 0-1.355.32-1.71.543-.397.25-.766.564-1.087.871-.645.617-1.294 1.396-1.848 2.113a42.184 42.184 0 0 0-1.996 2.827l-.033.051-.01.015-.002.004v.001h-.001L16.5 21.5l-1.687-1.074a2 2 0 0 0 .51 2.692l5.5 4Zm-.345-7.72c.195 1.023.366 1.982.514 2.898l-1.75-1.273c.238-.334.502-.692.777-1.05.154-.198.307-.391.459-.576Z"
        />
      </G>
      <Defs>
        <ClipPath id="pregnant_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPregnant;
