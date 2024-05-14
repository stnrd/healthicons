import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCityWorker = (
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
      <g clipPath="url(#city-worker_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm29.96 29.262A.48.48 0 0 1 30.5 29c.359.087.744.178 1.147.272 2.263.53 5.059 1.184 6.545 2.16C39.955 32.589 41 33.953 41 35.5V42H7v-6.5c0-1.547 1.045-2.91 2.808-4.068 1.486-.976 4.282-1.63 6.544-2.16.404-.094.79-.184 1.148-.272a.48.48 0 0 1 .54.262L22 39.696V37l.575-4.021a1 1 0 0 1-.764-.736l-.5-2A1 1 0 0 1 22.28 29h3.438a1 1 0 0 1 .97 1.242l-.5 2a1 1 0 0 1-.764.737L26 37v3.572l3.96-11.31ZM32 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Z"
        />
      </g>
      <defs>
        <clipPath id="city-worker_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCityWorker);
export default ForwardRef;
