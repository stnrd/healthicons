import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHome = (
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
        d="M4 37a1 1 0 0 1 1-1h36a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 22v15h28V22l-14-8-14 8Zm18 3h6v11h-6V25Zm-3 0H14v6h11v-6Z"
        fill="#333"
      />
      <path d="M32 14.818V12h3v5l-3-2.182Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 12a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1.588.809l-3-2.182a1 1 0 0 1-.412-.809V12Zm2 1v1.309l1 .727V13h-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.493 10.138a1 1 0 0 1 1.014 0l17.862 10.507-1.014 1.724L24 12.16 6.645 22.37l-1.014-1.724 17.862-10.507Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
