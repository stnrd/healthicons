import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLeg = (
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
      <g clipPath="url(#leg_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM21.33 4.79l-3.196 14.882a5.996 5.996 0 0 0-.134 1.26v2.606a6 6 0 0 0 .301 1.876L22.5 38.167 16 40.795h-3v1.154a2 2 0 0 0 2 2h3.31c.127 0 .252-.012.376-.036l3.982-.761a3.878 3.878 0 0 1 2.532.376 2.908 2.908 0 0 0 4.032-1.441l.055-.132a3.04 3.04 0 0 0-.444-3.104L27 36.59l.397-9.181a8.001 8.001 0 0 0-1.116-4.434L25 20.82s7.266-8.115 8.814-15.702c.12-.59-.347-1.118-.949-1.118H22.308a1 1 0 0 0-.978.79Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="leg_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLeg);
export default ForwardRef;
