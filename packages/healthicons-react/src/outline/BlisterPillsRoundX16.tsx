import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX16 = (
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
        d="M32 6H16a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM16 4a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H16Z"
        fill="#333"
      />
      <path
        d="M15 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM23 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM31 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM35 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsRoundX16);
export default ForwardRef;
