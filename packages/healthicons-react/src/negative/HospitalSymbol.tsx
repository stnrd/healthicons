import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospitalSymbol = (
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
        d="M48 0H0v48h48V0ZM3.97 24.291c0-11.046 8.954-20 20-20 11.045 0 20 8.954 20 20s-8.955 20-20 20c-11.046 0-20-8.954-20-20Zm16.021 1.757v7h-4v-18h4v7h8v-7h4v18h-4v-7h-8Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospitalSymbol);
export default ForwardRef;
