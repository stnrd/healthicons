import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg6 = (passedProps: SvgProps) => {
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
        d="M25.968 14a4.033 4.033 0 0 1 3.804 2.67 2 2 0 1 0 3.77-1.34A8.032 8.032 0 0 0 25.967 10h-3.936C17.606 10 14 13.572 14 18v12c0 4.428 3.606 8 8.032 8h3.936C30.394 38 34 34.428 34 30s-3.606-8-8.032-8h-3.936A8.022 8.022 0 0 0 18 23.08V18c0-2.2 1.795-4 4.032-4h3.936ZM18 30c0-2.2 1.795-4 4.032-4h3.936C28.205 26 30 27.8 30 30s-1.795 4-4.032 4h-3.936C19.795 34 18 32.2 18 30Z"
      />
    </Svg>
  );
};
export default Svg6;
