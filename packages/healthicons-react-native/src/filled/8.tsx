import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg8 = (passedProps: SvgProps) => {
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
        d="M25.968 14C28.205 14 30 15.8 30 18s-1.795 4-4.032 4h-3.936C19.795 22 18 20.2 18 18s1.795-4 4.032-4h3.936Zm-9.249 10A7.963 7.963 0 0 1 14 18c0-4.428 3.606-8 8.032-8h3.936C30.394 10 34 13.572 34 18a7.963 7.963 0 0 1-2.72 6A7.963 7.963 0 0 1 34 30c0 4.428-3.606 8-8.032 8h-3.936C17.606 38 14 34.428 14 30a7.963 7.963 0 0 1 2.72-6Zm5.313 2h3.936C28.205 26 30 27.8 30 30s-1.795 4-4.032 4h-3.936C19.795 34 18 32.2 18 30s1.795-4 4.032-4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default Svg8;
