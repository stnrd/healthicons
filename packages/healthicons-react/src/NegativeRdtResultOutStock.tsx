import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeRdtResultOutStock = (
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
        d="M48 0H0v48h48V0ZM21.707 6.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293Zm-2.51 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504l8.198 2.732ZM37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996V37.5Zm-3.184-2.051a1 1 0 0 0-.632-1.898l-4.5 1.5a1 1 0 0 0 .632 1.898l4.5-1.5Zm-9.489-20.394a1 1 0 0 0-.654 0l-12.682 4.39a1 1 0 0 0-.93.397l-3.744 5.056a1 1 0 0 0 .482 1.542l13.474 4.564a1 1 0 0 0 1.153-.393L24 26.75l2.574 3.861a1 1 0 0 0 1.153.393l13.474-4.564a1 1 0 0 0 .483-1.542l-3.745-5.056a1 1 0 0 0-.93-.397l-12.682-4.39ZM24 23.975l-9.936-3.478L24 17.058l9.936 3.44L24 23.974Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeRdtResultOutStock);
export default ForwardRef;
