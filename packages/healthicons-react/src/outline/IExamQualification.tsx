import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIExamQualification = (
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
        d="M14 5h13.558L37 15.387V40a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
        stroke="#333"
        strokeLinejoin="round"
      />
      <path d="M15 33h18M15 37h12" stroke="#333" strokeLinecap="round" />
      <path
        d="m15 28 5-12 5 12m-8.75-3h7.5"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 22v6M27 25h6" stroke="#333" strokeLinecap="round" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIExamQualification);
export default ForwardRef;
