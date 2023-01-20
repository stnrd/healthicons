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
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        d="M33.02 7.98a1 1 0 1 1 2 0v34a1 1 0 1 1-2 0v-34ZM13.02 7.98a1 1 0 1 1 2 0v34a1 1 0 1 1-2 0v-34ZM23.02 11.98a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4ZM23.02 22.98a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4ZM23.02 33.98a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPavedRoadAlt);
export default ForwardRef;
