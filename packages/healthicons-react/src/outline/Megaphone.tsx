import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMegaphone = (
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
        d="M10 18a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4V18h-4Zm4 12h-2v8a1 1 0 1 0 2 0v-8Zm-4 0a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v21a3 3 0 1 1-6 0v-8ZM30.481 7.123A1 1 0 0 1 31 8v10a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4v10a1 1 0 0 1-1.537.844l-11-7A1 1 0 0 1 18 30V15a1 1 0 0 1 .463-.844l11-7a1 1 0 0 1 1.018-.033ZM31 25a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2v5Zm-11-9.451V29.45l9 5.727V9.822l-9 5.727ZM40.832 17.445a1 1 0 0 1-.277 1.387l-3 2a1 1 0 1 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277ZM36 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm.168 3.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMegaphone);
export default ForwardRef;
