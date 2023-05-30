import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseBicycle = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 22a7.003 7.003 0 0 0-6.78 5.25l-1.936-.5a9 9 0 1 1 1.404 7.498l1.624-1.167A7 7 0 1 0 33 22Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.58 28H14.02A4.02 4.02 0 0 0 10 32.02c0 2.67 2.556 4.598 5.124 3.865l17.846-5.1A1.42 1.42 0 0 0 32.58 28Zm-18.56-2A6.02 6.02 0 0 0 8 32.02c0 3.999 3.828 6.886 7.673 5.788l17.846-5.1A3.42 3.42 0 0 0 32.58 26H14.02ZM35.4 36.2a1 1 0 0 1 1.4.2l2.7 3.6H41a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2h1l-1.8-2.4a1 1 0 0 1 .2-1.4Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6 36.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2Z"
        fill="#000"
      />
      <Path
        d="M7 41a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM14 32a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        fill="#000"
      />
      <Path d="M16 32a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.702 18.046a1 1 0 0 1 1.252.656l2.5 8a1 1 0 0 1-1.909.596l-2.5-8a1 1 0 0 1 .657-1.252ZM35.343 6.06a1 1 0 0 1 .596 1.283l-1 2.738a1 1 0 0 1-.574.588l-3.588 1.405 3.161 8.58a1 1 0 1 1-1.876.692l-3.5-9.5a1 1 0 0 1 .573-1.277l4.08-1.598.846-2.314a1 1 0 0 1 1.282-.596Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m13.438 16.754-4.503-.45A.85.85 0 1 0 8.85 18h4.525a.625.625 0 0 0 .063-1.246Zm-4.304-2.44A2.85 2.85 0 1 0 8.85 20h4.525a2.625 2.625 0 0 0 .261-5.236l-4.502-.45Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgExerciseBicycle;
