import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHospitalSymbol = (
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
        d="M23.964 3.98C12.918 3.99 3.97 12.951 3.98 23.997c.01 11.045 8.97 19.992 20.017 19.983 11.045-.009 19.992-8.97 19.983-20.016-.009-11.046-8.97-19.993-20.016-19.984ZM19.99 33.047v-7h8v7h4v-18h-4v7h-8v-7h-4v18h4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHospitalSymbol);
export default ForwardRef;
