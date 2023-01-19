import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDefibrilator = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M29.053 7.68a9.504 9.504 0 0 1 10.618 2.491c2.494 2.779 2.897 6.644 1.627 9.91-1.541 3.964-4.488 7.593-7.589 10.952-1.096 1.188-2.205 2.336-3.287 3.457-2.035 2.107-3.98 4.121-5.586 6.134a1 1 0 0 1-1.484.088c-.374-.369-.763-.75-1.162-1.142-2.485-2.438-5.394-5.292-8.065-8.326-3.092-3.514-5.935-7.347-7.448-11.155A9.576 9.576 0 0 1 9.16 9.446c3.879-3.504 9.856-2.905 13.445.695l1.448 1.453 1.79-1.795a9.525 9.525 0 0 1 3.21-2.12Zm3.73 1.323a7.504 7.504 0 0 0-5.523 2.208l-2.498 2.505a1 1 0 0 1-1.416 0l-2.156-2.163c-2.941-2.95-7.706-3.317-10.69-.623v.002a7.551 7.551 0 0 0-2.497 5.418 7.577 7.577 0 0 0 .532 3c1.385 3.484 4.045 7.11 7.092 10.572 2.618 2.975 5.469 5.773 7.957 8.214l.391.384c1.523-1.81 3.307-3.658 5.103-5.52a202.72 202.72 0 0 0 3.162-3.323c3.077-3.335 5.798-6.73 7.194-10.32 1.036-2.665.67-5.709-1.252-7.85v-.001a7.53 7.53 0 0 0-5.398-2.503Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m26.909 14.536-7.94 10.266a.5.5 0 0 0 .395.806h4.527l-1.527 7.75 7.94-10.266a.5.5 0 0 0-.396-.806h-4.526l1.527-7.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDefibrilator);
export default ForwardRef;
