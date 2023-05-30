import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMobileClinic = (
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
      <g clipPath="url(#mobile_clinic_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM4 13a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v6h3.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-3.126a4.002 4.002 0 0 1-7.748 0h-9.252a4.002 4.002 0 0 1-7.748 0h-1.252a4.002 4.002 0 0 1-7.748 0H4V13Zm38 20h-1.126a4.002 4.002 0 0 0-7.748 0H32v-5h10v5Zm-.474-7H32v-5h3.718a1 1 0 0 1 .678.265L41.526 26ZM6 28v5h1.126a4.002 4.002 0 0 1 7.748 0h1.252a4.002 4.002 0 0 1 7.748 0H30v-5H6Zm5 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm11-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm15 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 18v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="mobile_clinic_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMobileClinic);
export default ForwardRef;
