import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledIUtensils = (
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
        d="M28 4h-9v40h9v-4h-4v-2h4v-3h-2v-2h2v-3h-2v-2h2v-3h-4v-2h4v-3h-2v-2h2v-3h-2v-2h2v-3h-4V8h4V4Zm5 24a2 2 0 0 0-2 2v5h7v-5a2 2 0 0 0-2-2h-3Zm5 9h-7v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-5Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33 30v3h3v-3h-3Zm5 0a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v5h7v-5Zm-7 7h7v5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5Zm5 2h-3v3h3v-3ZM13 11a3 3 0 0 0-3 3v3h6v-3a3 3 0 0 0-3-3Zm3 8h-6v21l3 4 3-4V19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledIUtensils);
export default ForwardRef;
