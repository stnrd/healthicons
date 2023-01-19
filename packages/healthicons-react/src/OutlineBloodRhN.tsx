import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBloodRhN = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.388 5.535a5.018 5.018 0 0 1 7.224 0l.528.548h5.19c2.573 0 4.67 2.074 4.67 4.646V15.5h-2v-4.771a2.658 2.658 0 0 0-2.67-2.646h-5.616a1 1 0 0 1-.72-.307l-.823-.855a3.018 3.018 0 0 0-4.342 0l-.823.855a1 1 0 0 1-.72.307H15c-1.663 0-3 1.338-3 2.974V28.97a68.776 68.776 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V22.5h2v10.526C38 35.78 35.755 38 33 38h-3v2h-5v4h-2v-4h-5v-2h-3c-2.755 0-5-2.22-5-4.974v-21.97c0-2.752 2.245-4.973 5-4.973h4.86l.528-.548ZM15 36c-1.663 0-3-1.338-3-2.974v-2.055a66.435 66.435 0 0 1 3.627.058l.526.02c1.277.048 2.537.096 3.771.07 2.842-.06 5.627-.513 8.584-2.258 2.407-1.42 4.267-.972 5.56-.22A7.004 7.004 0 0 1 36 30.33v2.696C36 34.662 34.663 36 33 36H15Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M26 15a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-3h3v3a1 1 0 1 0 2 0v-8a1 1 0 1 0-2 0v3h-3v-3Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15 15a1 1 0 0 1 1-1h3.125C20.773 14 22 15.405 22 17c0 1.096-.58 2.103-1.477 2.625l1.383 2.95a1 1 0 0 1-1.811.85L18.488 20H17v3a1 1 0 1 1-2 0v-8Zm5 2c0-.614-.452-1-.875-1H17v2h2.125c.423 0 .875-.386.875-1Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M33 18a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBloodRhN);
export default ForwardRef;
