import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineCommunication = (
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
        d="M26 33h3.5C36.404 33 42 27.404 42 20.5S36.404 8 29.5 8h-11C11.596 8 6 13.596 6 20.5c0 7.915 5.217 12.754 10.924 15.726 2.835 1.477 5.69 2.43 7.849 3.015.442.12.853.224 1.227.313V33Zm2 9s-.756-.11-2-.392C20.236 40.3 4 35.305 4 20.5 4 12.492 10.492 6 18.5 6h11C37.508 6 44 12.492 44 20.5S37.508 35 29.5 35H28v7Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-16-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineCommunication);
export default ForwardRef;
