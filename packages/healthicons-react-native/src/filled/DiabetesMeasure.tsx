import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetesMeasure = (passedProps: SvgProps) => {
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
        d="M12.952 4.092a3 3 0 0 0-2.997 3.002l.02 25a3 3 0 0 0 3.003 2.998l4.75-.004c.69-.001 1.25-.561 1.249-1.251 0-.69.558-1.25 1.249-1.251l7.5-.007c.69 0 1.25.559 1.25 1.25.001.69.561 1.249 1.252 1.248l4.75-.003a3 3 0 0 0 2.997-3.003l-.02-25a3 3 0 0 0-3.003-2.998l-22 .019Zm20.004 3.983-18 .015.014 18 18-.015-.014-18ZM15.973 29.59a1 1 0 0 1 1-1l4-.004a1 1 0 0 1 .001 2l-4 .003a1 1 0 0 1-1-.999Zm11-1.009a1 1 0 1 0 .001 2l4-.003a1 1 0 1 0-.002-2l-4 .003Z"
        fill="#333"
      />
      <Path
        d="M27.964 18.334c.002 2.134-1.757 3.811-3.997 3.813-2.24.002-4.001-1.673-4.003-3.806-.002-2.134 3.995-6.86 3.995-6.86s4.003 4.872 4.005 6.853Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m27.976 33.08-8 .006.008 9 8-.007-.008-9Zm-10.001-1.993.01 13 12-.01-.01-13-12 .01Z"
        fill="#333"
      />
      <Path d="M25.98 38.08a2 2 0 1 1-4 .004 2 2 0 0 1 4-.003Z" fill="#333" />
    </Svg>
  );
};
export default SvgDiabetesMeasure;
