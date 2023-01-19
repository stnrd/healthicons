import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeHome = (
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
        d="M0 0h48v48H0V0Zm4 37a1 1 0 0 1 1-1h5V22l14-8 14 8v14h3a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm30-1V25h-6v11h6ZM14 25h11v6H14v-6Zm17-11.043V11h5v5.899l5.507 3.24.862.506-1.014 1.724-.862-.507L24 12.16 7.507 21.862l-.862.507-1.014-1.724.862-.507 17-10a1 1 0 0 1 1.014 0L31 13.958Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeHome);
export default ForwardRef;
