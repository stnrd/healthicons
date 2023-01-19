import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePills4 = (
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
        d="M18.058 13.341a1 1 0 0 0-1.104-1.667l-6.012 3.985a1 1 0 0 0 1.104 1.667l6.012-3.985Zm15.13-2.571a1 1 0 1 0-1.876.694l2.5 6.765a1 1 0 1 0 1.876-.693l-2.5-6.765ZM16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 0 1 1.846-.77l2.78 6.655a1 1 0 0 1-.538 1.308Zm20.609-5.848a1 1 0 0 0-1.306-1.514l-5.462 4.71a1 1 0 0 0 1.306 1.514l5.462-4.71Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM14.5 23a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm19 0a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM23 33.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0ZM33.5 42a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePills4);
export default ForwardRef;
