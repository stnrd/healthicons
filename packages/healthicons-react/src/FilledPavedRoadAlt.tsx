import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPavedRoadAlt = (
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
        d="M15.02 6.98a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2h-18Zm8 5a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm0 11a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm1 10a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPavedRoadAlt);
export default ForwardRef;
