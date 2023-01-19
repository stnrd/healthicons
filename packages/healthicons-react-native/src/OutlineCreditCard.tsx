import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineCreditCard = (
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
        d="M7 38a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H7ZM6 13a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v3H6v-3Zm1 23a1 1 0 0 1-1-1V24h36v11a1 1 0 0 1-1 1H7Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineCreditCard);
export default ForwardRef;
