import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineLetrinaAlt = (
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
        d="M20 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29 36.94c6.7-.54 12.055-4.733 12.888-11.94.074-.643.112-1.31.112-2H12v5c0 1.5 1.753 2 2.5 2v12H29v-5.06ZM27 40v-4.905l1.839-.148c3.25-.263 6.027-1.478 7.977-3.445 1.571-1.584 2.692-3.741 3.056-6.502H14v2.848a1.32 1.32 0 0 0 .504.152H16.5v12H27Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M23.5 35h5v2h-5v-2ZM15 8H9a1 1 0 0 0-1 1v14h8V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v16h12V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M7 10h10.5v2H7v-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineLetrinaAlt);
export default ForwardRef;
