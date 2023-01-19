import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineSocialDistancing = (
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
      <path stroke="#333" d="M8 14h32" />
      <path
        stroke="#333"
        strokeLinecap="round"
        d="m10.83 11-2.12 2.121a1 1 0 0 0 0 1.415l2.121 2.12m26.339.001 2.121-2.122a1 1 0 0 0 0-1.414L37.17 11"
      />
      <path
        stroke="#333"
        d="M14 25.5a2.499 2.499 0 1 1-5 0 2.499 2.499 0 1 1 5 0Zm-9 8.767c0-.773.709-1.596 2.226-2.288C8.658 31.327 10.392 31 11.5 31s2.842.326 4.274.98C17.29 32.67 18 33.493 18 34.266V37H5v-2.733ZM39 25.5a2.499 2.499 0 1 1-5 0 2.499 2.499 0 1 1 5 0Zm-9 8.767c0-.773.709-1.596 2.226-2.288C33.658 31.327 35.392 31 36.5 31s2.842.326 4.274.98C42.29 32.67 43 33.493 43 34.266V37H30v-2.733Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineSocialDistancing);
export default ForwardRef;
