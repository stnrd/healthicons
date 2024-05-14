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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#clinical-a_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415V39a5 5 0 0 1-10 0V12.687a1.5 1.5 0 0 1 1-1.414V9h-1a1 1 0 0 1-1-1V5Zm4 4v2.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898a1.5 1.5 0 0 1-1-1.415V9h-4Z"
        />
      </g>
      <defs>
        <clipPath id="clinical-a_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgClinicalA);
export default ForwardRef;
