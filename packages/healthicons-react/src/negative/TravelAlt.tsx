import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTravelAlt = (
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
      <g clipPath="url(#travel_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm35 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM17 18a2 2 0 0 1 2-2h17a6 6 0 0 1 1 11.917V40a2 2 0 1 1-4 0v-9h-3v9a2 2 0 1 1-4 0V20h-7a2 2 0 0 1-2-2Zm20 2a2 2 0 1 1 0 4v-4ZM6 32a2 2 0 0 1 2-2h3v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8Zm10-2v-2h-3v2h3Zm-6 9v-6h2v6h-2Zm7-6v6h2v-6h-2Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="travel_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTravelAlt);
export default ForwardRef;
