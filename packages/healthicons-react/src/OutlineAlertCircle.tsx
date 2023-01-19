import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAlertCircle = (
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
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Zm0 2C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M26 13a2 2 0 1 0-4 0v14a2 2 0 1 0 4 0V13Zm-2 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAlertCircle);
export default ForwardRef;
