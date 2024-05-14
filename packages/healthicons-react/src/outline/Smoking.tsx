import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmoking = (
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
      <path d="M38 10a1 1 0 1 0 0 2 3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19H38a1 1 0 1 0 0 2 4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a5.994 5.994 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5Z" />
      <path d="M31 20a3 3 0 0 1 3-3 1 1 0 1 0 0-2 5 5 0 0 0-5 5v1.818a5 5 0 0 0 5 5h3a1 1 0 0 1 1 1V28a1 1 0 1 0 2 0v-.182a3 3 0 0 0-3-3h-3a3 3 0 0 1-3-3V20Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 33a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7Z"
      />
      <path d="M39 31a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM43 31a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSmoking);
export default ForwardRef;
