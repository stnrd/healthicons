import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultOutStock = (passedProps: SvgProps) => {
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
        d="M27.707 6.293a1 1 0 0 1 0 1.414L25.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L24 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.415L22.586 10l-2.293-2.293a1 1 0 1 1 1.415-1.414L24 8.586l2.293-2.293a1 1 0 0 1 1.414 0ZM19.198 32.728A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504l8.198 2.732Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m37 37.5-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996V37.5Zm-3.684-2.051a1 1 0 0 0-.632-1.898l-4.5 1.5a1 1 0 0 0 .632 1.898l4.5-1.5ZM24.327 15.055a1 1 0 0 0-.654 0l-12.998 4.5-.023.007a.996.996 0 0 0-.442.325l-3.99 4.988a1 1 0 0 0 .464 1.574l13.5 4.5a1 1 0 0 0 1.135-.376L24 26.743l2.68 3.83a1 1 0 0 0 1.136.376l13.5-4.5a1 1 0 0 0 .465-1.574l-3.99-4.988a.995.995 0 0 0-.466-.333l-12.998-4.499ZM24 23.942l9.943-3.442L24 17.058 14.057 20.5 24 23.942Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRdtResultOutStock;
