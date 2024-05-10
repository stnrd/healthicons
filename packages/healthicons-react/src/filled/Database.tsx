import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDatabase = (
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
        d="M39 9.75v6.429c0 2.07-6.716 3.75-15 3.75-8.284 0-15-1.68-15-3.75V9.75C9 7.679 15.716 6 24 6c8.284 0 15 1.679 15 3.75ZM9.621 19.714c1.844 1.55 7.584 2.679 14.379 2.679s12.535-1.13 14.379-2.679c.404.34.621.7.621 1.072v6.428c0 2.071-6.716 3.75-15 3.75-8.284 0-15-1.679-15-3.75v-6.428c0-.373.217-.732.621-1.072ZM24 33.68c-6.795 0-12.535-1.13-14.379-2.679-.404.34-.621.7-.621 1.071V38.5c0 2.071 6.716 3.75 15 3.75 8.284 0 15-1.679 15-3.75v-6.429c0-.372-.217-.731-.621-1.071-1.844 1.549-7.584 2.679-14.379 2.679Zm8.333 3.654a1.167 1.167 0 1 1-2.333 0 1.167 1.167 0 0 1 2.333 0Zm3.5 0a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDatabase);
export default ForwardRef;
