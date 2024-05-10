import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPain = (passedProps: SvgProps) => {
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
      <G clipPath="url(#pain_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm18.714 43.199a1 1 0 0 1-.904-1.088l.802-8.716 4.045 2.14.93-5.594a1 1 0 0 1 1.974.329l-1.386 8.33-3.846-2.034-.528 5.729a1 1 0 0 1-1.087.904ZM5.09 28.392a1 1 0 0 0 .976 1.746l5.324-2.976.523 4.534 7.957-3.713a1 1 0 0 0-.846-1.812l-5.443 2.54-.548-4.758-7.943 4.439Zm4.263-18.84a1 1 0 0 1 1.374-.336l7.967 4.835-3.978 2.903 5.069 3.607a1 1 0 1 1-1.16 1.63l-7.329-5.216 3.796-2.77-5.403-3.28a1 1 0 0 1-.336-1.373Zm22.713-3.056a1 1 0 1 0-1.97-.347l-.981 5.567-3.613-2.312-2.046 8.094a1 1 0 1 0 1.94.49l1.365-5.403 3.803 2.433 1.502-8.522Zm11.787 12.867a1 1 0 0 1-.396 1.358l-7.615 4.177-.484-4.509-5.097 2.33a1 1 0 0 1-.831-1.82l7.62-3.482.46 4.284 4.985-2.734a1 1 0 0 1 1.358.396ZM37.29 37.825a1 1 0 1 0 1.038-1.71l-4.954-3.007 3.535-2.58-6.913-4.92a1 1 0 0 0-1.16 1.63l4.653 3.31-3.717 2.714 7.518 4.563Z"
        />
      </G>
      <Defs>
        <ClipPath id="pain_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPain;
