import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusResearch = (passedProps: SvgProps) => {
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
        d="M20 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM7 20a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM32.192 9.565a1 1 0 0 1 1.415 0l2.828 2.828a1 1 0 1 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.02 10.98a1 1 0 0 1 0 1.413l-2.828 2.829a1 1 0 0 1-1.414-1.414l2.829-2.829a1 1 0 0 1 1.414 0ZM13.808 9.565a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 0 1-1.414-1.415l2.828-2.828a1 1 0 0 1 1.415 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.98 10.98a1 1 0 0 1 1.413 0l2.829 2.828a1 1 0 1 1-1.414 1.414l-2.829-2.829a1 1 0 0 1 0-1.414ZM13.808 36.435a1 1 0 0 1-1.415 0l-2.828-2.828a1 1 0 0 1 1.414-1.414l2.829 2.828a1 1 0 0 1 0 1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.98 35.02a1 1 0 0 1 0-1.413l2.828-2.829a1 1 0 0 1 1.414 1.415l-2.829 2.828a1 1 0 0 1-1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.454 34.988A9.996 9.996 0 0 1 22 32c0-5.523 4.477-10 10-10 1.04 0 2.044.159 2.988.454C34.702 16.08 29.444 11 23 11c-6.627 0-12 5.373-12 12 0 6.444 5.08 11.702 11.454 11.988ZM19 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 26a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.293 36.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVirusResearch;
