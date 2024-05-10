import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialDistancing = (
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
      <path d="M36.463 15.95a1 1 0 0 0 1.414 1.414l2.121-2.121a2 2 0 0 0 0-2.829l-2.12-2.121a1 1 0 1 0-1.415 1.414L37.756 13H10.244l1.293-1.293a1 1 0 0 0-1.414-1.414l-2.121 2.121a2 2 0 0 0 0 2.829l2.12 2.121a1 1 0 0 0 1.415-1.414l-.95-.95h26.826l-.95.95ZM15 25.5c0 1.934-1.566 3.5-3.5 3.5A3.499 3.499 0 0 1 8 25.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5ZM4 34.267C4 31.429 8.997 30 11.5 30s7.5 1.43 7.5 4.267V38H4v-3.733ZM36.5 29c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5ZM29 34.267C29 31.429 33.997 30 36.5 30s7.5 1.43 7.5 4.267V38H29v-3.733Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSocialDistancing);
export default ForwardRef;
