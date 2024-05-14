import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultPvInvalid = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H28Zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1Z"
      />
      <Path d="M11.593 11.026a1.207 1.207 0 0 0-.742.079 1.384 1.384 0 0 0-.609.537A1.621 1.621 0 0 0 10 12.5c0 .31.087.61.242.858.156.248.37.432.609.537.237.105.494.131.742.079.248-.053.485-.185.677-.39a1 1 0 0 1 1.46 1.368 3.3 3.3 0 0 1-1.722.978 3.208 3.208 0 0 1-1.966-.206 3.383 3.383 0 0 1-1.495-1.304A3.62 3.62 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.383 3.383 0 0 1 1.495-1.304 3.207 3.207 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368 1.302 1.302 0 0 0-.677-.39Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H14Zm2.5 3H15v-1h1.5a.5.5 0 0 1 0 1Z"
      />
      <Path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503.564-1.503a1 1 0 1 1 1.872.702l-1.5 4ZM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2 1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.116 2.116 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1ZM13 23h-2a1 1 0 1 0 0 2h2v-2ZM15 23v2h7v-2h-7ZM24 25h2a1 1 0 1 0 0-2h-2v2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12H10Zm30-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-7.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6h15Z"
      />
    </Svg>
  );
};
export default SvgRdtResultPvInvalid;
