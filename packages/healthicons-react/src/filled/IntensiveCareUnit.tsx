import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntensiveCareUnit = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm21.667 2.111V10h2v1.111a1 1 0 0 0 1 1h4a2 2 0 0 1 2 2v9.7A3.09 3.09 0 0 1 38 26.36c0 1.684-1.338 3.053-3 3.085v2.112h3v2h-2.17a2.722 2.722 0 1 1-4.217 0H16.387a2.722 2.722 0 1 1-4.217 0H10v-2h2v-8.403l-.315-.316a3.137 3.137 0 0 1 0-4.415 3.073 3.073 0 0 1 2.774-.855l.644-.644a3.156 3.156 0 0 1 4.462.002l1.4 1.4a3.154 3.154 0 0 1-.001 4.462l-.287.287.128.13c.045.044.106.07.17.07h13.692V14.11h-3.445v.556h.333a1 1 0 0 1 1 1v4.222a1 1 0 0 1-1 1H28.89a1 1 0 0 1-1-1v-4.222a1 1 0 0 1 1-1h.333v-.926a3 3 0 0 1-1.555-2.63Zm-8.4 10.544.283-.283a1.155 1.155 0 0 0 0-1.633l-1.4-1.4a1.156 1.156 0 0 0-1.633-.001l-.273.273 3.023 3.044ZM33 29.445v2.11H14v-6.388l3.992 4.019a.874.874 0 0 0 .62.258H33Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIntensiveCareUnit);
export default ForwardRef;
