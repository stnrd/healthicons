import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDrone = (passedProps: SvgProps) => {
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
        d="m31.57 19.103-2.29 4.672 2.541 4.987a7 7 0 1 1-3.006 2.956L24 29.163l-4.815 2.555a7 7 0 1 1-3.006-2.956l2.541-4.986-2.29-4.673a7 7 0 1 1 2.895-3.1L24 18.388l4.675-2.385a7 7 0 1 1 2.895 3.1ZM40 13a5 5 0 0 1-7.548 4.303l1.443-2.946a1.75 1.75 0 1 0-.535-.745l-2.902 1.481A5 5 0 1 1 40 13Zm-22.458 2.093a5 5 0 1 0-1.994 2.21l-1.443-2.946a1.75 1.75 0 1 1 .535-.745l2.902 1.481Zm-2.271 15.451a5 5 0 1 0 2.147 2.112l-2.872 1.524a1.75 1.75 0 1 1-.752-.74l1.477-2.896Zm15.311 2.112a5 5 0 1 0 2.147-2.112l1.476 2.896a1.75 1.75 0 1 1-.752.74l-2.87-1.524Z"
      />
    </Svg>
  );
};
export default SvgDrone;
