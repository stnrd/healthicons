import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialDistancing = (
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
      <g clipPath="url(#social_distancing_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM11.537 11.707 10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.12 2.121a1 1 0 0 1-1.415-1.414l.95-.95H10.587l.95.95a1 1 0 0 1-1.414 1.414l-2.121-2.121a2 2 0 0 1 0-2.829l2.12-2.121a1 1 0 0 1 1.415 1.414ZM11.5 29c1.934 0 3.5-1.566 3.5-3.5S13.434 22 11.5 22A3.499 3.499 0 0 0 8 25.5c0 1.934 1.566 3.5 3.5 3.5Zm0 1C8.997 30 4 31.43 4 34.267V38h15v-3.733C19 31.429 14.003 30 11.5 30Zm25-1c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Zm0 1c-2.503 0-7.5 1.43-7.5 4.267V38h15v-3.733C44 31.429 39.003 30 36.5 30Z"
        />
      </g>
      <defs>
        <clipPath id="social_distancing_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSocialDistancing);
export default ForwardRef;
