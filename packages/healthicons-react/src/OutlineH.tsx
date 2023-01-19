import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineH = (
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
        d="M13 12a3 3 0 1 1 6 0v9h10v-9a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0v-9H19v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V25h14v11a1 1 0 1 0 2 0V12a1 1 0 1 0-2 0v11H17V12a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineH);
export default ForwardRef;
