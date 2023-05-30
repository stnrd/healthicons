import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgINoteAction = (
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
        d="M26 6a1 1 0 0 1 1 1v3a1 1 0 1 0 2 0V8h1a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h2V7a1 1 0 1 1 2 0v3a1 1 0 1 0 2 0V8h6V7a1 1 0 0 1 1-1ZM15 18a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H15Zm-1 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H15Z"
        fill="#333"
      />
      <path
        d="M13 42a7 7 0 0 1-7-7V10h2v25a5 5 0 0 0 5 5h17v2H13ZM36 13a3 3 0 1 1 6 0v3h-6v-3ZM36 33V18h6v15l-3 4-3-4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgINoteAction);
export default ForwardRef;
