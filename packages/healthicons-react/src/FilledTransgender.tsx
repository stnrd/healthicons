import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledTransgender = (
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
        d="M24 29.93a1 1 0 0 1 1 1V41a1 1 0 0 1-2 0V30.93a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20 37.93a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1ZM24 13a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0-2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M31.29 16.705a1 1 0 0 1 .005-1.414l7.583-7.536a1 1 0 0 1 1.41 1.419l-7.583 7.535a1 1 0 0 1-1.414-.004Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M37.875 15.827a1 1 0 0 1-1.414 0l-4.243-4.242a1 1 0 1 1 1.414-1.415l4.243 4.243a1 1 0 0 1 0 1.414ZM40 13a1 1 0 0 1-1-1V9h-3a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM9.171 7.757l6.996 6.996a1 1 0 1 1-1.414 1.414L7.757 9.171a1 1 0 0 1 1.414-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13 8a1 1 0 0 1-1 1H9v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledTransgender);
export default ForwardRef;
