import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgReferral = (
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
        d="M13 6a2 2 0 0 0-2 2v1H6v19h22V9h-5V8a2 2 0 0 0-2-2h-8Zm8 12a2 2 0 0 0 2-2v-1h3v11h-5v-6h-8v6H8V15h3v1a2 2 0 0 0 2 2h8ZM8 11h3v2H8v-2Zm18 2h-3v-2h3v2Zm-7 9v4h-4v-4h4ZM16 8v3h-3v2h3v3h2v-3h3v-2h-3V8h-2Z"
      />
      <path d="M30 27a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4ZM34 33c-2.67 0-8 1.462-8 4.364V40h-9c-.729 0-1.202-.263-1.503-.602C15.18 39.041 15 38.537 15 38v-3.586l3.293 3.293 1.414-1.414L14 30.586l-5.707 5.707 1.414 1.414L13 34.414V38c0 .963.32 1.959 1.003 2.727C14.702 41.513 15.729 42 17 42h25v-4.636C42 34.462 36.67 33 34 33Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgReferral);
export default ForwardRef;
