import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRunningWaterAlt = (
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
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#running_water_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.02.98.02.941l-.04 48 48 .04.04-48ZM24.01 10.96a2 2 0 0 1 1.999 2.002l-.007 8-.003 4-4-.003.003-4 .007-8a2 2 0 0 1 2.001-1.998Zm3.999 2.004-.007 8 6 .005.001-1-2-.002-2-.001.002-2 .002-3a2 2 0 0 1 2.002-1.999l7 .006a2 2 0 0 1 1.998 2.002l-.002 3-.002 2-2-.002-2-.002v1l4 .004a2 2 0 0 1 1.998 2.001l-.003 3 1 .001-.002 2h-1l-14-.012v1l-.002 2-2-.002-6-.005-2-.001.002-2v-1l-14-.012h-1l.002-2h1l.003-3a2 2 0 0 1 2.001-1.998l4 .003.001-1-2-.002-2-.001.002-2 .002-3a2 2 0 0 1 2.002-1.999l7 .006a2 2 0 0 1 1.998 2.002l-.002 3-.002 2-2-.002-2-.002v1l6 .005.006-8a4 4 0 1 1 8 .007Zm-1.012 14v1l-.001 1-6-.006v-1l.001-1 1 .001 4 .003 1 .001ZM23.985 42.96a4 4 0 0 0 4.003-3.997c.003-3.5-3.994-7.003-3.994-7.003s-4.003 3.496-4.006 6.996a4 4 0 0 0 3.997 4.004Zm-11.98-25.01h1l.002-2 2 .002-.001 2 1 .001.002-3-7-.006-.002 3 1 .001.001-2 2 .002-.001 2Zm24 .02-1-.001.002-2-2-.002-.001 2h-1l.002-3 7 .005-.002 3h-1l.001-2-2-.003-.001 2Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="running_water_alt_svg__a">
          <path fill="#fff" transform="translate(.02 .98)" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRunningWaterAlt);
export default ForwardRef;
