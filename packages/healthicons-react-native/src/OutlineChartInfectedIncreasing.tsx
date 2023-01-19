import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineChartInfectedIncreasing = (
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M38.18 14.017a1 1 0 0 1 .803 1.164c-1.457 7.928-4.976 13.426-9.935 16.921C24.112 35.582 17.858 37 11.052 37H7a1 1 0 1 1 0-2h4.052c6.552 0 12.354-1.368 16.843-4.532 4.467-3.148 7.743-8.15 9.122-15.649a1 1 0 0 1 1.164-.803Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M38.616 13.03a1 1 0 0 1 .644.505l2.625 5a1 1 0 1 1-1.77.93l-2.102-4.004-3.447 2.364a1 1 0 1 1-1.132-1.65l4.376-3a1 1 0 0 1 .806-.146ZM8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.5 11.4a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm-6.1 4.1a6.1 6.1 0 1 1 12.2 0 6.1 6.1 0 0 1-12.2 0ZM18.65 7a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M19.5 11.25v-3.4h2v3.4h-2Zm5.393-3.257a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m23.193 11.393 2.55-2.55 1.414 1.414-2.55 2.55-1.414-1.414ZM29 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24.6 15.5a1 1 0 0 1 1-1H29a1 1 0 1 1 0 2h-3.4a1 1 0 0 1-1-1Zm4.257 4.393a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m25.457 18.193 2.55 2.55-1.414 1.414-2.55-2.55 1.414-1.414ZM18.65 24a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.5 19.6a1 1 0 0 1 1 1V24a1 1 0 1 1-2 0v-3.4a1 1 0 0 1 1-1Zm-7.507.293a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m17.807 19.607-2.55 2.55-1.414-1.414 2.55-2.55 1.414 1.414ZM12 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M11 15.5a1 1 0 0 1 1-1h3.4a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Zm5.107-7.507a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m16.393 12.807-2.55-2.55 1.414-1.414 2.55 2.55-1.414 1.414Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineChartInfectedIncreasing);
export default ForwardRef;
