import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg2 = (
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
      <g clipPath="url(#2_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM30 18a4 4 0 0 0-4-4h-4a4.002 4.002 0 0 0-3.773 2.666 2 2 0 0 1-3.771-1.332A8.003 8.003 0 0 1 22 10h4a8 8 0 0 1 5.364 13.935L20.948 34H32a2 2 0 1 1 0 4H16a2 2 0 0 1-1.39-3.438l14-13.528.056-.052A3.985 3.985 0 0 0 30 18Z"
        />
      </g>
      <defs>
        <clipPath id="2_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg2);
export default ForwardRef;
