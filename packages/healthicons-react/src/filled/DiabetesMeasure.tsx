import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetesMeasure = (
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
        d="M23.967 22.147c2.24-.002 3.999-1.68 3.997-3.813-.002-1.98-4.005-6.854-4.005-6.854s-3.997 4.727-3.995 6.86c.002 2.134 1.763 3.809 4.003 3.807ZM23.982 40.083a2 2 0 1 0-.003-4 2 2 0 0 0 .003 4Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.952 4.092a3 3 0 0 0-2.997 3.002l.02 25a3 3 0 0 0 3.003 2.998l4.75-.004a1.26 1.26 0 0 0 .25-.026l.007 9.025 12-.01-.007-9.024c.08.016.164.024.25.024l4.75-.003a3 3 0 0 0 2.997-3.003l-.02-25a3 3 0 0 0-3.003-2.998l-22 .019Zm20.004 3.983-18 .015.014 18 18-.015-.014-18ZM15.973 29.59a1 1 0 0 1 1-1l4-.004a1 1 0 0 1 .001 2l-4 .003a1 1 0 0 1-1-.999Zm11-1.009a1 1 0 1 0 .001 2l4-.003a1 1 0 1 0-.002-2l-4 .003Zm1.003 4.5-8 .006.008 9 8-.007-.008-9Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiabetesMeasure);
export default ForwardRef;
