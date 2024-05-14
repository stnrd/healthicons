import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpreadsheets = (
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
        d="M14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V19Zm2 6v3h4v-3h-4Zm0 8v-3h4v3h-4Zm6 0v-3h4v3h-4Zm6 0v-3h4v3h-4Zm0-8v3h4v-3h-4Zm-6 3h4v-3h-4v3Zm-6-5h16v-3H16v3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5a1 1 0 0 1 1-1h20a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 38 11v32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V5Zm2 1v36h24V12h-5a1 1 0 0 1-1-1V6H12Zm20 1.414V10h2.586L32 7.414Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSpreadsheets);
export default ForwardRef;
