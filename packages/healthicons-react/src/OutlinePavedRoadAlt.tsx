import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlinePavedRoadAlt = (
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
        d="M33.02 7.98a1 1 0 1 1 2 0v34a1 1 0 1 1-2 0v-34Zm-20 0a1 1 0 1 1 2 0v34a1 1 0 1 1-2 0v-34Zm10 4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm0 11a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm0 11a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlinePavedRoadAlt);
export default ForwardRef;
