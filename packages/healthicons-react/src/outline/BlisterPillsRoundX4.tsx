import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX4 = (
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
        d="M19 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM27 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM32 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19 37a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM32 34a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V8Zm2 0a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v15a1 1 0 1 0 0 2v15a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V25a1 1 0 1 0 0-2V8Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsRoundX4);
export default ForwardRef;
