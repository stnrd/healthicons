import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg3G = (
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
      <path
        d="M12.913 9.408a12 12 0 0 1 2.602-3.893L14.1 4.1a14 14 0 0 0 0 19.799l1.415-1.415a12 12 0 0 1-2.602-13.077ZM32.485 5.515a12 12 0 0 1 0 16.97L33.9 23.9a14 14 0 0 0 0-19.8l-1.415 1.415Z"
        fill="#000"
      />
      <path
        d="M28.243 9.757a6 6 0 0 1 0 8.486l1.414 1.414a8 8 0 0 0 0-11.314l-1.414 1.414ZM19.757 9.757a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414ZM26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 26a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V29a3 3 0 0 0-3-3H13Zm7 6.25c0-.67-.561-1.25-1.3-1.25h-1.532c-.577 0-1.054.36-1.227.84a1 1 0 1 1-1.882-.68A3.297 3.297 0 0 1 17.17 29H18.7C20.503 29 22 30.435 22 32.25c0 .88-.351 1.67-.918 2.25.567.58.918 1.37.918 2.25 0 1.815-1.497 3.25-3.3 3.25h-1.532a3.297 3.297 0 0 1-3.108-2.16 1 1 0 1 1 1.88-.68c.174.48.65.84 1.228.84h1.533c.738 0 1.299-.58 1.299-1.25s-.561-1.25-1.3-1.25h-1.532a1 1 0 0 1 0-2h1.533c.738 0 1.299-.58 1.299-1.25Zm12.674-1.888a1 1 0 1 1-1.333 1.49 3.503 3.503 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 1 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.503 5.503 0 1 1 0-8.204Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg3G);
export default ForwardRef;
