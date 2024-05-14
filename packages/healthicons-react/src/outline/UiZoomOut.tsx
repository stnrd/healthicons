import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiZoomOut = (
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
      <path d="M33 22H21v-2h12v2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 21c0 8.284-6.716 15-15 15-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828.004 2.825-6.472 6.471-4.242-4.242 6.524-6.524 2.707.12 1.893-1.892A14.943 14.943 0 0 1 12 21c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Zm-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13ZM8.828 40.586l-1.414-1.414 4.486-4.487 1.397.063.002 1.367-4.47 4.47Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiZoomOut);
export default ForwardRef;
