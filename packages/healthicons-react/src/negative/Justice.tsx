import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJustice = (
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
      <g clipPath="url(#justice_svg__a)" fill="#000">
        <path d="m37.696 17-3.236-5.177L30.901 17h6.795ZM17.803 23.218l-3.839-5.933-4.188 5.933h8.027Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM32.14 11.669l-.464.124 2.565-2.759a.995.995 0 0 1 1.12.455L40.053 17H42c0 4.418-3.358 8-7.5 8-4.142 0-7.5-3.582-7.5-8h1.474l3.665-5.331ZM13.62 31.218c4.142 0 7.5-3.582 7.5-8h-.935l-4.6-7.108 5.842-1.567A3.01 3.01 0 0 0 23 15.829V38h-3v2h-6v2h20v-2h-6v-2h-3V15.83a3.001 3.001 0 0 0 2-2.782l4.672-1.254 2.564-2.758-7.875 2.112A3.006 3.006 0 0 0 25 10.171V6h-2v4.17a3.004 3.004 0 0 0-1.97 2.409l-7.29 1.955a1 1 0 0 0-.557.39l-5.855 8.294H6.12c0 4.418 3.358 8 7.5 8Z"
        />
      </g>
      <defs>
        <clipPath id="justice_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgJustice);
export default ForwardRef;
