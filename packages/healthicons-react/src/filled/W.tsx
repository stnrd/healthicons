import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgW = (
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
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.671 10.027a2 2 0 0 0-1.644 2.302l4 24a2 2 0 0 0 3.71.663L24 26.031l6.263 10.961a2 2 0 0 0 3.71-.663l4-24a2 2 0 1 0-3.946-.658l-3.077 18.46-5.214-9.123a2 2 0 0 0-3.473 0l-5.214 9.124-3.076-18.461a2 2 0 0 0-2.302-1.644Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgW);
export default ForwardRef;
