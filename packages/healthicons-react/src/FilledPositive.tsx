import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPositive = (
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
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-31 0a1 1 0 0 1 1-1h9v-9a1 1 0 1 1 2 0v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9h-9a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18ZM11 24a3 3 0 0 1 3-3h7v-7a3 3 0 1 1 6 0v7h7a3 3 0 1 1 0 6h-7v7a3 3 0 1 1-6 0v-7h-7a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9v-9a1 1 0 1 0-2 0v9h-9Zm10 21c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPositive);
export default ForwardRef;
