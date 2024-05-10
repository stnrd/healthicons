import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRupee = (
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
      <g clipPath="url(#rupee_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 10a2 2 0 1 0 0 4h2c1.48 0 2.773.804 3.465 2H18a2 2 0 1 0 0 4h5.465A3.998 3.998 0 0 1 20 22h-2a2 2 0 0 0-1.664 3.11l8 12a2 2 0 1 0 3.328-2.22l-6.037-9.056A8.012 8.012 0 0 0 27.748 20H30a2 2 0 1 0 0-4h-2.252a7.954 7.954 0 0 0-.818-2H30a2 2 0 1 0 0-4H18Z"
        />
      </g>
      <defs>
        <clipPath id="rupee_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRupee);
export default ForwardRef;
