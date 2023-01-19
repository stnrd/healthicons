import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledFinanceDept = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm8 4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H17Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M17 12h14v9H17v-9Zm4.273 12.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm4.363 0a1.636 1.636 0 1 1-3.272 0 1.636 1.636 0 0 1 3.272 0Zm4.364 0a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM21.273 29A1.636 1.636 0 1 1 18 29a1.636 1.636 0 0 1 3.273 0Zm4.363 0a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM30 29a1.636 1.636 0 1 1-3.273 0A1.636 1.636 0 0 1 30 29Zm0 4.364a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm-12 0c0-.904.733-1.637 1.636-1.637H24A1.636 1.636 0 1 1 24 35h-4.364A1.636 1.636 0 0 1 18 33.364Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledFinanceDept);
export default ForwardRef;
