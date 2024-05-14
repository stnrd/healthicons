import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCancel = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-7.272 12.728A17.944 17.944 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.97 2.015-9.47 5.272-12.728l25.456 25.456Zm1.336-1.492-25.3-25.3A17.924 17.924 0 0 1 24 6c9.941 0 18 8.059 18 18 0 4.25-1.473 8.156-3.936 11.236Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCancel);
export default ForwardRef;
