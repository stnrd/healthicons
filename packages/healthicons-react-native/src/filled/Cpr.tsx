import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCpr = (passedProps: SvgProps) => {
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
        d="M13 38a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-1.445-2.523A5.978 5.978 0 0 0 11 38c0 1.537.578 2.938 1.528 4h-1.515a3.013 3.013 0 0 1-1.187-5.783l1.729-.74ZM21.472 42h1.515a3.013 3.013 0 0 0 1.187-5.783l-1.729-.74c.356.767.555 1.622.555 2.523a5.978 5.978 0 0 1-1.528 4Z"
        fill="#000"
      />
      <Path
        d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM19 23v8a2 2 0 1 1-4 0V19.271c0-3.43 4.033-5.268 6.623-3.02l9.764 8.48a7.589 7.589 0 0 1 2.537 6.803L33 38h7a2 2 0 1 1 0 4H30a2 2 0 0 1-2-2v-7.204a4 4 0 0 0-1.343-2.99L19 23Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgCpr;
