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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.445 6.168a1 1 0 0 1 1.11 0l6 4A1 1 0 0 1 24 11v8a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-8a1 1 0 0 1 .445-.832l6-4ZM16 18h2v-4h-2v4Zm4 0v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5h-2v-6.465l5-3.333 5 3.333V18h-2ZM34.496 12.132a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 26 17v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V17a1 1 0 0 0-.504-.868l-7-4ZM37 26h3v-8.42l-6-3.428-6 3.428V26h3v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Zm-2 0v-5h-2v5h2ZM23.447 28.106l-8-4a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 6 29v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V29a1 1 0 0 0-.553-.894ZM16 34v6h-2v-6h2Zm2-1v7h4V29.618l-7-3.5-7 3.5V40h4v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVillage);
export default ForwardRef;
