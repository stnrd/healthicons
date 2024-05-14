import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg2G = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M32.485 5.515a11.999 11.999 0 0 1 0 16.97L33.9 23.9a14.001 14.001 0 0 0 0-19.8l-1.415 1.415Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 26a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V29a3 3 0 0 0-3-3H13Zm7 6.25c0-.69-.56-1.25-1.25-1.25h-1.5a1.25 1.25 0 0 0-1.18.833 1 1 0 1 1-1.885-.666A3.25 3.25 0 0 1 17.25 29h1.5a3.25 3.25 0 0 1 2.182 5.658L17.474 38H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.695-1.72l5.25-5.072.028-.026c.257-.23.417-.562.417-.932Zm12.674-1.888a1 1 0 1 1-1.333 1.49 3.505 3.505 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.503 5.503 0 1 1 0-8.204Z"
      />
      <path d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.539ZM18.457 11.704a6 6 0 0 1 1.3-1.947l-1.414-1.414a8 8 0 0 0 0 11.314l1.414-1.414a6 6 0 0 1-1.3-6.539Z" />
      <path d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8l1.415 1.415ZM24 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg2G);
export default ForwardRef;
