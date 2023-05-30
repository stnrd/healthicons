import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVespaMotorcycle = (
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
      <g clipPath="url(#vespa_motorcycle_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM16.95 33a2.5 2.5 0 0 1-4.9 0h4.9Zm-7.928 0H4.47C4.21 33 4 32.82 4 32.6 4 27.85 8.516 24 14.086 24h8.07c.466 0 .844.322.844.72V26h6.875l.93-7.437c.502.278 1.08.437 1.695.437H35v8.759A5.499 5.499 0 0 1 37.933 27H38a5.5 5.5 0 1 1-5.475 6.032.802.802 0 0 1-.02-.021l-.01-.011H21v-.002a2.556 2.556 0 0 1-.111.002h-.911a5.5 5.5 0 0 1-10.956 0ZM38 35a2.5 2.5 0 0 0 2.456-2.971l-4.925.868A2.5 2.5 0 0 0 38 35ZM9 21a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1H9v-1Zm23.5-11c-1.286 0-2.41.694-3.018 1.727L25.346 11 25 12.97l4.004.704A3.5 3.5 0 0 0 32.5 17h3.885c.34 0 .615-.276.615-.615v-5.77a.615.615 0 0 0-.615-.615H32.5Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="vespa_motorcycle_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVespaMotorcycle);
export default ForwardRef;
