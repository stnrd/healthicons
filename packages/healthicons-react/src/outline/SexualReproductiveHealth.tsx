import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSexualReproductiveHealth = (
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
        d="M17.546 15.48a7 7 0 1 0 4.372 5.454 1 1 0 1 1 1.977-.304 9 9 0 1 1-5.622-7.014 1 1 0 1 1-.727 1.863Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM28.902 15.263a7 7 0 0 0-8.853 7.562 1 1 0 1 1-1.986.236 9 9 0 1 1 5.375 7.204 1 1 0 0 1 .791-1.837 7 7 0 1 0 4.673-13.165Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974-3.974.05a1 1 0 1 1-.026-2l6.026-.076-.076 6.026a1 1 0 0 1-1.013.987Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSexualReproductiveHealth);
export default ForwardRef;
