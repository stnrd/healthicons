import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCopperIud = (
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
      <g clipPath="url(#copper_iud_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm18.868 6H23v9.257l2 1V6h4.132l-1-2H25a1 1 0 0 0-1 1 1 1 0 0 0-1-1h-3.132l-1 2Zm-1.236-2h-1.764l-1 2h1.764l1-2ZM11 4h2.632l-1 2H11a1 1 0 1 1 0-2Zm14 14.493v1.764l-2-1v-1.764l2 1Zm-2 3v1.764l2 1v-1.764l-2-1Zm0 14.633V25.493l2 1v9.633A4.002 4.002 0 0 1 24 44a4 4 0 0 1-1-7.874ZM24 38a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6.368-34h1.764l1 2h-1.764l-1-2ZM37 4h-2.632l1 2H37a1 1 0 1 0 0-2Z"
        />
      </g>
      <defs>
        <clipPath id="copper_iud_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCopperIud);
export default ForwardRef;
