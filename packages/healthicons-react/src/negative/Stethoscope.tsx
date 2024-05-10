import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStethoscope = (
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
      <g clipPath="url(#stethoscope_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm27 19c.552 0 1.005.449.955.999A11 11 0 0 1 20 29.583V32a3.001 3.001 0 0 1-2 2.83 5.25 5.25 0 0 0 10.5-.08v-4a5.75 5.75 0 0 1 11.5 0v2.42a3.001 3.001 0 1 1-2 0v-2.42a3.75 3.75 0 1 0-7.5 0v4a7.25 7.25 0 0 1-14.5.08A3.001 3.001 0 0 1 14 32v-2.417a11 11 0 0 1-7.955-9.584c-.05-.55.403-.999.955-.999v-9a3 3 0 0 1 3-3h.268A2 2 0 0 1 14 8a2 2 0 0 1-3.732 1H10a1 1 0 0 0-1 1v9h-.21c.553 0 .993.45 1.07.997a7.21 7.21 0 0 0 14.28 0c.077-.547.517-.997 1.07-.997H25v-9a1 1 0 0 0-1-1h-.268A2 2 0 0 1 20 8a2 2 0 0 1 3.732-1H24a3 3 0 0 1 3 3v9Z"
        />
      </g>
      <defs>
        <clipPath id="stethoscope_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStethoscope);
export default ForwardRef;
