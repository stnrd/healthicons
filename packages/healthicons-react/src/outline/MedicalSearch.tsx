import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSearch = (
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
        d="M24 24h-4v-6h4v-4h6v4h4v6h-4v4h-6v-4Zm-2-2v-2h4v-4h2v4h4v2h-4v4h-2v-4h-4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 36c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 3.782 1.4 7.238 3.71 9.876l-1.893 1.893-2.707-.121-6.524 6.524 4.242 4.242 6.472-6.471-.004-2.825 1.828-1.828A14.943 14.943 0 0 0 27 36Zm0-2c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13 5.82 13 13 13ZM8.828 40.586l-1.414-1.414 4.486-4.487 1.397.063.002 1.367-4.47 4.47Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalSearch);
export default ForwardRef;
