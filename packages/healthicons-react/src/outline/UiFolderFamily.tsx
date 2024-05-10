import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiFolderFamily = (
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
      <path d="M18.5 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM32.5 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM31 29a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3h-3ZM14 29a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3h-3ZM26 26.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM24 30a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.712 10.555 27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.082a3 3 0 0 1 2.63 1.555ZM9 37a1 1 0 0 1-1-1V17h31a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9Zm15.872-22-1.913-3.482a1 1 0 0 0-.877-.518H9a1 1 0 0 0-1 1v3h16.872Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiFolderFamily);
export default ForwardRef;
