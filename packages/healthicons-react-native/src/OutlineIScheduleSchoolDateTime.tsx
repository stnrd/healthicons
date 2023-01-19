import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineIScheduleSchoolDateTime = (
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
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1ZM14 23h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm10 2h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm10 2h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM14 31h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm10 2h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M8 12a1 1 0 0 1 1-1h5V9H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h20.255a6.972 6.972 0 0 1-.965-2H9a1 1 0 0 1-1-1V12Zm26 16.07a7.062 7.062 0 0 1 2 0V12a3 3 0 0 0-3-3h-3v2h3a1 1 0 0 1 1 1v16.07ZM16 11h10.563V9H16v2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M36 18H8v-2h28v2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm14 0a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineIScheduleSchoolDateTime);
export default ForwardRef;
