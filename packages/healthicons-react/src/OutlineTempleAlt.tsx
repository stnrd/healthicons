import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineTempleAlt = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14 14.048v-2h20v2H14Zm0 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v4h-2v-4H13v4h-2v-4h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-2Zm8 24h4v-4h-4v4Zm15-12v2H11v-2h26Zm-21-10h16v-2H16v2Zm-3 2v2h22v-2H13Zm21 4H14v2h20v-2Zm-14 10h8v8h-8v-8Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.126 10.048h7.748a4.002 4.002 0 0 0-7.748 0Zm-2.126 1a6 6 0 1 1 12 0v1H18v-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M25 12h-2v18h2V12Zm-4-2v22h6V10h-6Zm-6 27v-6h2v6h-2Zm16 0v-6h2v6h-2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9 40v-2h11v2H9Zm-1 2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8Zm20-2v-2h11v2H28Zm-1 2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H27Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineTempleAlt);
export default ForwardRef;
