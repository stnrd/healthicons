import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredIncreasing = (
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
        d="M38.18 14.017a1 1 0 0 1 .803 1.164c-1.457 7.928-4.976 13.426-9.935 16.921C24.112 35.582 17.858 37 11.052 37H7a1 1 0 1 1 0-2h4.052c6.552 0 12.354-1.368 16.843-4.532 4.467-3.148 7.743-8.15 9.122-15.649a1 1 0 0 1 1.164-.803Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.616 13.03a1 1 0 0 1 .644.505l2.625 5a1 1 0 1 1-1.77.93l-2.102-4.004-3.447 2.364a1 1 0 1 1-1.132-1.65l4.376-3a1 1 0 0 1 .806-.146Z"
        fill="#333"
      />
      <Path
        d="M27 13.857a1.524 1.524 0 0 0-1.524-1.524h-3.81v-3.81A1.524 1.524 0 0 0 20.144 7h-2.286a1.524 1.524 0 0 0-1.524 1.524v3.81h-3.81A1.524 1.524 0 0 0 11 13.856v2.286a1.524 1.524 0 0 0 1.524 1.524h3.81v3.81A1.524 1.524 0 0 0 17.856 23h2.286a1.524 1.524 0 0 0 1.524-1.524v-3.81h3.81A1.524 1.524 0 0 0 27 16.144v-2.286Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgChartCuredIncreasing);
export default ForwardRef;
