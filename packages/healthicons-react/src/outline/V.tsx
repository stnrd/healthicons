import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgV = (
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
        d="M21.23 37.154a3 3 0 0 0 5.54 0l10-24a3 3 0 0 0-5.54-2.308L24 28.2l-7.23-17.354a3 3 0 0 0-5.54 2.308l10 24ZM24 37a1 1 0 0 1-.923-.615l-10-24a1 1 0 1 1 1.846-.77l8.154 19.57a1 1 0 0 0 1.846 0l8.154-19.57a1 1 0 0 1 1.846.77l-10 24A1 1 0 0 1 24 37Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgV);
export default ForwardRef;
