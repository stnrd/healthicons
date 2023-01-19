import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeDatabase = (
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
        d="M48 0H0v48h48V0Zm-9 16.179V9.75C39 7.679 32.284 6 24 6 15.716 6 9 7.679 9 9.75v6.429c0 2.07 6.716 3.75 15 3.75 8.284 0 15-1.68 15-3.75Zm-15 6.214c-6.795 0-12.535-1.13-14.379-2.679-.404.34-.621.7-.621 1.072v6.428c0 2.071 6.716 3.75 15 3.75 8.284 0 15-1.679 15-3.75v-6.428c0-.373-.217-.732-.621-1.072-1.844 1.55-7.584 2.679-14.379 2.679ZM9.621 31c1.844 1.549 7.584 2.679 14.379 2.679S36.535 32.549 38.379 31c.404.34.621.7.621 1.071V38.5c0 2.071-6.716 3.75-15 3.75-8.284 0-15-1.679-15-3.75v-6.429c0-.372.217-.731.621-1.071Zm20.712 8a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM37 36.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeDatabase);
export default ForwardRef;
