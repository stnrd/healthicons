import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgB = (
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
      <g clipPath="url(#B_svg__a)" fill="#000">
        <path d="M30 18a4 4 0 0 1-4 4h-8v-8h8a4 4 0 0 1 4 4ZM26 26h-8v8h8a4 4 0 0 0 0-8Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM16 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h10a8 8 0 0 0 5.292-14A8 8 0 0 0 26 10H16Z"
        />
      </g>
      <defs>
        <clipPath id="B_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgB);
export default ForwardRef;
