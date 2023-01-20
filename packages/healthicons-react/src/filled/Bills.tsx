import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBills = (
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
        d="M10.49 32v4a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H40v3.669a2.994 2.994 0 0 0 2.49 1.327V33a3 3 0 0 0-2.983 3H15.485a3.002 3.002 0 0 0-2.996-2.962V32h-2Z"
        fill="#333"
      />
      <path d="M25 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H6Zm2.998 2h24.003A2.999 2.999 0 0 0 36 14.996V25a2.998 2.998 0 0 0-2.983 3H8.996A3 3 0 0 0 6 25.038V15a2.998 2.998 0 0 0 2.998-3Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBills);
export default ForwardRef;
