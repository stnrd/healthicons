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
      <g clipPath="url(#diabetes_measure_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm12.953 4.336a3 3 0 0 0-2.998 3.002l.02 25a3 3 0 0 0 3.003 2.998l4.75-.004c.086 0 .17-.01.25-.026l.006 7.025.001 2 2-.001 8-.007 2-.001-.001-2-.006-7.025c.08.016.164.025.25.024l4.75-.003a3 3 0 0 0 2.997-3.003l-.02-25a3 3 0 0 0-3.002-2.997l-22 .018Zm20.003 3.983-18 .015.015 18 18-.015-.015-18ZM15.974 29.833a1 1 0 0 1 .999-1l4-.004a1 1 0 1 1 .001 2l-4 .003a1 1 0 0 1-1-.999Zm10.999-1.009a1 1 0 1 0 .001 2l4-.003a1 1 0 0 0-.001-2l-4 .003Zm-3.006-6.433c2.24-.002 4-1.68 3.997-3.813-.001-1.98-4.005-6.853-4.005-6.853s-3.996 4.726-3.995 6.86c.002 2.133 1.763 3.808 4.003 3.806Zm4.01 10.932-8 .007.007 9 8-.007-.008-9Zm-3.995 7.004a2 2 0 1 0-.003-4 2 2 0 0 0 .003 4Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="diabetes_measure_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiabetesMeasure);
export default ForwardRef;
