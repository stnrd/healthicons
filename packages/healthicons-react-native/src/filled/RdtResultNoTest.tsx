import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultNoTest = (passedProps: SvgProps) => {
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
        d="M40 24a6 6 0 0 1-6 6h-1.434l-4.803-5.055A2 2 0 0 0 26 22h-1.035l-3.8-4H34a6 6 0 0 1 6 6Zm-4 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-5.248-.75a.751.751 0 1 1 .002 1.502.751.751 0 0 1-.002-1.502Z"
        fill="#000"
      />
      <Path
        d="M12 24a2 2 0 0 1 2-2h2.688l-3.716-3.912A6.002 6.002 0 0 0 14 30h10.29l-3.801-4H14a2 2 0 0 1-2-2Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-2 0c0 5.108-2.128 9.72-5.546 12.996L11.657 10.898A17.938 17.938 0 0 1 24 6c9.941 0 18 8.059 18 18ZM24 42c4.113 0 7.903-1.38 10.934-3.7L10.278 12.35A17.929 17.929 0 0 0 6 24c0 9.941 8.059 18 18 18Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgRdtResultNoTest;
