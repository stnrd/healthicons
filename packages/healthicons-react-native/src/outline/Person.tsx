import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPerson = (passedProps: SvgProps) => {
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
        d="M24 24c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm10-8c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10ZM9.223 34.212C8.22 35.022 8 35.629 8 36v4h32v-4c0-.37-.22-.979-1.224-1.788-.98-.791-2.442-1.545-4.214-2.197C31.02 30.712 26.753 30 24 30c-2.753 0-7.02.712-10.562 2.015-1.772.652-3.234 1.406-4.215 2.197ZM24 28c-6.008 0-18 3.035-18 8v6h36v-6c0-4.965-11.992-8-18-8Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPerson;
