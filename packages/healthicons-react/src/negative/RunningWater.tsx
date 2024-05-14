import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRunningWater = (
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
      <g clipPath="url(#running-water_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm7 42V23H6V12h1V6h2v6h1v11H9v19H7ZM19 8h5a1 1 0 1 0 0-2H12a1 1 0 1 0 0 2h5v3h-5v13h13V11h-6V8Zm9 16v6h14v-6h-2v-3c0-5.523-4.477-10-10-10h-3v10h1a2 2 0 0 1 2 2v1h-2Zm7.5 18c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42Z"
        />
      </g>
      <defs>
        <clipPath id="running-water_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRunningWater);
export default ForwardRef;
