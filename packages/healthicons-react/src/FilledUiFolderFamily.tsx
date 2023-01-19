import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledUiFolderFamily = (
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
        d="M42 18a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V18Zm-6.5 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM31 30a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3h-3Zm-12.5-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM14 30a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3h-3Zm12-2.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM24 31a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9 11h13.082a1 1 0 0 1 .877.518l3.846 7A1 1 0 0 1 25.929 20H9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm13.082-2a3 3 0 0 1 2.63 1.555l3.846 7c1.098 2-.348 4.445-2.63 4.445H9a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h13.082Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 15h19.5v2H8v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledUiFolderFamily);
export default ForwardRef;
