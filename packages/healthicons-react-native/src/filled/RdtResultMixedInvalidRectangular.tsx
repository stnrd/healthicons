import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultMixedInvalidRectangular = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8Zm36-4a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-7.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM20 23h2v2h-2v-2Zm-2 0h-7a1 1 0 1 0 0 2h7v-2Zm8 2h-2v-2h2a1 1 0 1 1 0 2Zm-15 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6H11Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6h15Zm4.231.335A5.027 5.027 0 0 0 29.001 20H38a3.992 3.992 0 0 0-3.091 1.461A3.488 3.488 0 0 0 32.5 20.5c-.866 0-1.658.314-2.269.835ZM34 24a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-3.769 2.665A5.027 5.027 0 0 1 29.001 28h8.996a3.992 3.992 0 0 1-3.088-1.461 3.488 3.488 0 0 1-2.409.961 3.486 3.486 0 0 1-2.269-.835ZM42 24v-4h-4a4 4 0 0 1 4 4Zm0 0v4h-3.997A4 4 0 0 0 42 24ZM8 20a4.992 4.992 0 0 0-2 4v-4h2Zm0 8H6v-4c0 1.636.785 3.088 2 4Zm12-5h2v2h-2v-2Zm-2 2h-7a1 1 0 1 1 0-2h7v2Zm6-2h2a1 1 0 1 1 0 2h-2v-2ZM6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6Zm32-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM11.593 11.026a1.207 1.207 0 0 0-.742.079 1.384 1.384 0 0 0-.609.537A1.621 1.621 0 0 0 10 12.5c0 .31.087.61.242.858.156.248.37.432.609.537.237.105.494.131.742.079.248-.053.485-.185.677-.39a1 1 0 0 1 1.46 1.368 3.3 3.3 0 0 1-1.722.978 3.208 3.208 0 0 1-1.966-.206 3.383 3.383 0 0 1-1.495-1.304A3.62 3.62 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.383 3.383 0 0 1 1.495-1.304 3.207 3.207 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368 1.302 1.302 0 0 0-.677-.39ZM13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0v-5Zm2 2h1.5a.5.5 0 0 0 0-1H15v1ZM27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0v-5Zm2 2h1.5a.5.5 0 0 0 0-1H29v1ZM22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 13v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2 1 1 0 0 1 0 2Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRdtResultMixedInvalidRectangular);
export default ForwardRef;
