import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg3 = (
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
        d="M25.87 14c2.322 0 4.13 1.831 4.13 4s-1.808 4-4.13 4h-4.088a2 2 0 1 0 0 4h4.087C28.192 26 30 27.831 30 30s-1.808 4-4.13 4h-4.088c-1.823 0-3.344-1.137-3.9-2.68a2 2 0 0 0-3.763 1.36c1.126 3.118 4.147 5.32 7.663 5.32h4.087C30.32 38 34 34.459 34 30a7.91 7.91 0 0 0-2.753-6A7.91 7.91 0 0 0 34 18c0-4.459-3.681-8-8.13-8h-4.088c-3.516 0-6.537 2.202-7.663 5.32a2 2 0 0 0 3.762 1.36c.557-1.543 2.078-2.68 3.901-2.68h4.087Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg3);
export default ForwardRef;
