import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiMenu = (
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
        d="M6 11a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM6 24a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM6 37a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiMenu);
export default ForwardRef;
