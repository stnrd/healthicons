import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNetwork4G = (passedProps: SvgProps) => {
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
        d="M35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.539ZM19.757 9.757a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8l1.415 1.415Z"
      />
      <Path d="M26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 29a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V29Zm10.282.04A1 1 0 0 1 21 30v6a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1h-3.5a1 1 0 0 1-.841-1.54l4.5-7a1 1 0 0 1 1.123-.42ZM19 36v-2.595L17.332 36H19Zm13.753-4.226a1 1 0 0 0-.08-1.412 5.503 5.503 0 1 0 0 8.204 1 1 0 0 0 .334-.745v-3.357a1 1 0 0 0-1-1h-3.002a1 1 0 1 0 0 2h2.002v1.875a3.505 3.505 0 0 1-5.506-2.875 3.503 3.503 0 0 1 5.84-2.611 1 1 0 0 0 1.412-.079Z"
      />
    </Svg>
  );
};
export default SvgNetwork4G;
