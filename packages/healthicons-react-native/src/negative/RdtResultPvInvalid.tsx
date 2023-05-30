import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
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
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#rdt_result_pv_invalid_svg__a)" fill="#333">
        <Path d="M38 22a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM31 24a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 24a3 3 0 0 0-3-3H11a3 3 0 1 0 0 6h15a3 3 0 0 0 3-3Zm-18-1h2v2h-2a1 1 0 1 1 0-2Zm4 2v-2h7v2h-7Zm11 0h-2v-2h2a1 1 0 1 1 0 2Z"
        />
        <Path d="M16.5 35H15v-1h1.5a.5.5 0 0 1 0 1ZM30.5 12H29v-1h1.5a.5.5 0 0 1 0 1Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6Zm7.593-12.974a1.207 1.207 0 0 0-.742.079 1.384 1.384 0 0 0-.609.537A1.62 1.62 0 0 0 10 12.5c0 .31.087.61.242.858.156.248.37.432.609.537.237.105.494.131.742.079.248-.053.485-.185.677-.39a1 1 0 0 1 1.46 1.368 3.3 3.3 0 0 1-1.722.978 3.208 3.208 0 0 1-1.966-.206 3.383 3.383 0 0 1-1.495-1.304A3.62 3.62 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.383 3.383 0 0 1 1.495-1.304 3.207 3.207 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368 1.302 1.302 0 0 0-.677-.39ZM14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H14Zm13-22a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0v-5Zm-3.564 28.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 0 1 1.872-.702l.564 1.503.564-1.503a1 1 0 1 1 1.872.702l-1.5 4ZM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2 1 1 0 0 1 0 2v2Z"
        />
      </G>
      <Defs>
        <ClipPath id="rdt_result_pv_invalid_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRdtResultPvInvalid;
