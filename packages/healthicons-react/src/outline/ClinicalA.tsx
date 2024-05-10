import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgClinicalA = (
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
        d="M19 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v1.273a1.5 1.5 0 0 0-1 1.415V39a5 5 0 0 0 10 0V12.687a1.5 1.5 0 0 0-1-1.414V10h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H19Zm2 9.102a1.5 1.5 0 0 0 1-1.415V10h4v1.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898Zm6 11.883L22.015 20H21v1.157l6 6v-2.172ZM24.844 20 27 22.157v-1.172L26.015 20h-1.171ZM27 29.985l-6-6v2.172l6 6v-2.172Zm0 7.172-6-6v-2.172l6 6v2.172Zm-.125 2.703L21 33.985v2.172l5.041 5.041c.387-.359.679-.819.834-1.338ZM24 42a3 3 0 0 1-3-3v-.015L24.015 42H24ZM20 6v2h8V6h-8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgClinicalA);
export default ForwardRef;
