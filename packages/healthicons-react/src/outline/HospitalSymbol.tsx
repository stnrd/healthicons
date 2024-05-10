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
        d="M24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6s18 8.059 18 18-8.059 18-18 18ZM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24Zm15.991 9.048v-7h8v7h4v-18h-4v7h-8v-7h-4v18h4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospitalSymbol);
export default ForwardRef;
