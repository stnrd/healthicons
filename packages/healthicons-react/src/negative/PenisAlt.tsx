import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPenisAlt = (
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
      <g
        clipPath="url(#penis_alt_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path d="M48 0H0v48h48V0ZM8.999 6S5.901 22.06 6.002 25.07C6.147 29.338 10 42 10 42h28s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6H8.999Z" />
        <path d="M23 23v10a1 1 0 1 0 2 0V23h2v10a3 3 0 1 1-6 0V23h2ZM20 25v1a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3v-1h2ZM28 26v-1h2v1a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1Z" />
        <path d="M23 42v-7h2v7h-2Z" />
      </g>
      <defs>
        <clipPath id="penis_alt_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPenisAlt);
export default ForwardRef;
