import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiZoom = (
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
        d="m17.707 31.707-3.5 3.5-1.414-1.414 3.5-3.5 1.414 1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m4.586 39.172 6.524-6.524 3.118.14 1.067 1.066.005 3.089-6.472 6.471-4.242-4.242Zm2.828 0 1.414 1.414 4.47-4.47-.001-1.368-1.397-.063-4.486 4.487ZM27 34c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13 5.82 13 13 13Zm0 2c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiZoom);
export default ForwardRef;
