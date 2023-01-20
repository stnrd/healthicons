import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiFolderFamily = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m24.872 15-1.913-3.482a1 1 0 0 0-.877-.518H9a1 1 0 0 0-1 1v3h16.872ZM12.5 25a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM32.5 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9v-2ZM11 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9v-2ZM24 29.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 34a3 3 0 1 1 6 0v1h-6v-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0Zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.082a3 3 0 0 1 2.63 1.555L27.154 15H39Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUiFolderFamily);
export default ForwardRef;
