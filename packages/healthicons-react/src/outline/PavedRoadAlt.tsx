import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoadAlt = (
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
      <path d="M33 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM13 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM23 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 22a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 33a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPavedRoadAlt);
export default ForwardRef;
