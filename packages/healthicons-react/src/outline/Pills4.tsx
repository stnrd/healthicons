import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills4 = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.34 11.956a1 1 0 0 1-.282 1.386l-6.011 3.984a1 1 0 0 1-1.105-1.667l6.012-3.985a1 1 0 0 1 1.386.282ZM33.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.903 10.18a1 1 0 0 1 1.285.591l2.5 6.765a1 1 0 1 1-1.876.694l-2.5-6.766a1 1 0 0 1 .59-1.284ZM14.5 40a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 1 1 1.847-.77l2.778 6.655a1 1 0 0 1-.537 1.308ZM33.5 40a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.989 30.492a1 1 0 0 1-.105 1.41l-5.462 4.71a1 1 0 1 1-1.306-1.514l5.462-4.71a1 1 0 0 1 1.41.104Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills4);
export default ForwardRef;
