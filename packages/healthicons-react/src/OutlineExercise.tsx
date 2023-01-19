import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineExercise = (
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
        d="M31 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3a1 1 0 0 1 1 1v6h3v2h-3v6a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-9H17v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H8a1 1 0 0 1-1-1v-6H4v-2h3v-6a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h14v-9ZM13 33h2V15h-2v18Zm-2-15H9v12h2V18Zm26 12V18h2v12h-2Zm-2-15v18h-2V15h2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineExercise);
export default ForwardRef;
