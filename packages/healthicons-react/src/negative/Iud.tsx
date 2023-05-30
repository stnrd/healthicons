import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIud = (
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
      <g clipPath="url(#iud_svg__a)" fill="#333">
        <path d="M22 40a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM11 6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1 1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H25v30.126A4.002 4.002 0 0 1 24 44a4 4 0 0 1-1-7.874V6H11Z"
        />
      </g>
      <defs>
        <clipPath id="iud_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIud);
export default ForwardRef;
