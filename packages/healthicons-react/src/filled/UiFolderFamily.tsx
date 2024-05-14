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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m27.154 15-2.442-4.445A3 3 0 0 0 22.082 9H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3H27.154ZM9 11a1 1 0 0 0-1 1v3h16.872l-1.913-3.482a1 1 0 0 0-.877-.518H9Zm3.5 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm20 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9v-2Zm-17 0a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9v-2Zm13-3.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 34a3 3 0 1 1 6 0v1h-6v-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiFolderFamily);
export default ForwardRef;
