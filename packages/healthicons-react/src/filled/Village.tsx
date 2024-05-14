import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVillage = (
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
      <path d="M16.445 6.168a1 1 0 0 1 1.11 0l6 4A1 1 0 0 1 24 11v8a1 1 0 0 1-1 1h-4v-7h-4v7h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 .445-.832l6-4ZM33.504 12.132a1 1 0 0 1 .992 0l7 4A1 1 0 0 1 42 17v10a1 1 0 0 1-1 1h-5v-8h-4v8h-5a1 1 0 0 1-1-1V17a1 1 0 0 1 .504-.868l7-4ZM6.553 28.106l8-4a1 1 0 0 1 .894 0l8 4A1 1 0 0 1 24 29v12a1 1 0 0 1-1 1h-6v-9h-4v9H7a1 1 0 0 1-1-1V29a1 1 0 0 1 .553-.894Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVillage);
export default ForwardRef;
