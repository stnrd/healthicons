import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegative8 = (
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
        d="M30 18c0-2.2-1.795-4-4.032-4h-3.936C19.795 14 18 15.8 18 18s1.795 4 4.032 4h3.936C28.205 22 30 20.2 30 18Zm-4.032 8h-3.936C19.795 26 18 27.8 18 30s1.795 4 4.032 4h3.936C28.205 34 30 32.2 30 30s-1.795-4-4.032-4Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM14 18a7.963 7.963 0 0 0 2.72 6A7.963 7.963 0 0 0 14 30c0 4.428 3.606 8 8.032 8h3.936C30.394 38 34 34.428 34 30a7.963 7.963 0 0 0-2.72-6A7.963 7.963 0 0 0 34 18c0-4.428-3.606-8-8.032-8h-3.936C17.606 10 14 13.572 14 18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegative8);
export default ForwardRef;
