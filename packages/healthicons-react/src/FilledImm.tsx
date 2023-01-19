import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledImm = (
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
      <path fill="#333" d="M26 25.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33 24a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-2 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M14.5 11a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM39 31.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M31 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 32a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-2 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledImm);
export default ForwardRef;
