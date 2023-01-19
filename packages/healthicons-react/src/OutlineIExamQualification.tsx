import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineIExamQualification = (
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
        stroke="#333"
        strokeLinejoin="round"
        d="M14 5h13.558L37 15.387V40a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
      />
      <path stroke="#333" strokeLinecap="round" d="M15 33h18m-18 4h12" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 28 5-12 5 12m-8.75-3h7.5"
      />
      <path stroke="#333" strokeLinecap="round" d="M30 22v6m-3-3h6" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineIExamQualification);
export default ForwardRef;
