import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoadAlt = (
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
      <g clipPath="url(#paved_road_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 .04 0 0l-.04 48 48 .04.04-48ZM12.993 7.97a2 2 0 0 1 2.002-1.998l18 .015a2 2 0 0 1 1.998 2.002l-.026 32a2 2 0 0 1-2.001 1.998l-18-.015a2 2 0 0 1-1.999-2.001l.026-32ZM24.012 10a1 1 0 0 0-1.001 1l-.003 4a1 1 0 1 0 2 0l.003-4a1 1 0 0 0-1-1Zm-.01 11a1 1 0 0 0-1 1l-.003 4a1 1 0 1 0 2 0l.003-4a1 1 0 0 0-1-1Zm-1.01 12a1 1 0 0 1 2 0l-.003 4a1 1 0 0 1-2 0l.004-4Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="paved_road_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPavedRoadAlt);
export default ForwardRef;
