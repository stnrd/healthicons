import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPoison = (
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
      <g clipPath="url(#poison_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4a7 7 0 0 1 7 7v20a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V21a7 7 0 0 1 7-7v-4h-2a1 1 0 0 1-1-1V5Zm5 5v5a1 1 0 0 1-1 1h-1a5.002 5.002 0 0 0-4.9 4h17.8a5.002 5.002 0 0 0-4.9-4h-1a1 1 0 0 1-1-1v-5h-4Zm5.536 19.829.707.707 1.414-1.415-2.829-2.828-1.414 1.414.708.708L24 30.537l-2.121-2.122.707-.707-1.414-1.414-.708.707-1.414 1.414-.707.707 1.414 1.414.707-.707 2.122 2.122-2.121 2.12-.708-.707-1.414 1.415.708.707 1.414 1.415.707.706 1.414-1.414-.707-.707L24 33.365l2.121 2.121-.707.707 1.414 1.415 2.829-2.829-1.414-1.414-.707.707-2.122-2.121 2.122-2.122Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="poison_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPoison);
export default ForwardRef;
