import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlertTriangle = (
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
        d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.403 42H7.599a1 1 0 0 1-.9-1.437L23.101 6.849ZM22 20a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V20Zm1.966 14a1.966 1.966 0 0 0 0 3.933h.068a1.966 1.966 0 1 0 0-3.933h-.067Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlertTriangle);
export default ForwardRef;
