import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTempleAlt = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14 14.048v-2h20v2H14Zm0 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v4h-2v-4H13v4h-2v-4h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-2Zm23 12v2H11v-2h26Zm-21-10h16v-2H16v2Zm-3 2v2h22v-2H13Zm21 4H14v2h20v-2Zm-6 10h-8v8h8v-8Z"
        fill="#333"
      />
      <Path d="M24 6.048a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.126 10.048h7.748a4.002 4.002 0 0 0-7.748 0Zm-2.126 1a6 6 0 1 1 12 0v1H18v-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 11h-2v19h2V11Zm-4-2v23h6V9h-6ZM9 40v-2h11v2H9Zm-1 2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8ZM28 40v-2h11v2H28Zm-1 2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H27Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTempleAlt);
export default ForwardRef;
