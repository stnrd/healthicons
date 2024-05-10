import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEmergencyPost = (
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
        d="M43.935 32.649 38 18.962V10h-9v6h7v2H11.938c-1.348 0-2.536.869-2.924 2.138l-4.883 14C3.543 36.063 5.01 38 7.054 38H29.26c1.348 0 2.536-.869 2.923-2.138l4.803-13.733 4.607 10.249L34.5 34.5l-1 2.5 9.794-3.044-.001-.004.006-.002.04-.014a.995.995 0 0 0 .596-1.287Zm-24.905-.891a1 1 0 1 0 1.94.485L21.78 29H25a1 1 0 1 0 0-2h-2.72l.69-2.757a1 1 0 1 0-1.94-.485L20.22 27H17a1 1 0 1 0 0 2h2.72l-.69 2.758Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyPost);
export default ForwardRef;
