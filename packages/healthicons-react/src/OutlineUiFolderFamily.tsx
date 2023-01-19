import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineUiFolderFamily = (
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
        d="M35.5 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM28 32a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9v-2Zm-9.5-8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM11 32a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9v-2Zm15-5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 33a3 3 0 1 1 6 0v1h-6v-1Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M25.97 17H39a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h13.082a1 1 0 0 1 .877.518l1.753-.963A3 3 0 0 0 22.082 9H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3H27.154l-2.442-4.445-1.753.963L25.97 17Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 15h19.5v2H8v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineUiFolderFamily);
export default ForwardRef;
