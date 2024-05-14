import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultPfInvalid = (passedProps: SvgProps) => {
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
      <Path d="M11.593 11.026a1.207 1.207 0 0 0-.742.079 1.384 1.384 0 0 0-.609.537A1.621 1.621 0 0 0 10 12.5c0 .31.087.61.242.858.156.248.37.432.609.537.237.105.494.131.742.079.248-.053.485-.185.677-.39a1 1 0 0 1 1.46 1.368 3.3 3.3 0 0 1-1.722.978 3.208 3.208 0 0 1-1.966-.206 3.383 3.383 0 0 1-1.495-1.304A3.62 3.62 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.383 3.383 0 0 1 1.495-1.304 3.207 3.207 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368 1.302 1.302 0 0 0-.677-.39ZM38 22a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM31 24a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3Zm14-1H11a1 1 0 1 0 0 2h11v-2Zm5 1a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7Zm33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10ZM14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H14Zm3 2.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5ZM27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0v-5Zm4 1.5a.5.5 0 0 0-.5-.5H29v1h1.5a.5.5 0 0 0 .5-.5Z"
      />
      <Path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503.564-1.503a1 1 0 1 1 1.872.702l-1.5 4ZM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2 1 1 0 0 1 0 2v2Z" />
    </Svg>
  );
};
export default SvgRdtResultPfInvalid;
