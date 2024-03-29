import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirus = (
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
        d="M14.832 13.419A13.94 13.94 0 0 1 23 10.035V12a1 1 0 0 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.39 1.39a1 1 0 0 0 1.415 1.414l1.39-1.39A13.94 13.94 0 0 1 37.964 23H36a1 1 0 0 0 0 2h1.965a13.941 13.941 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.389 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.415-1.413l-1.389 1.388A13.941 13.941 0 0 1 10.035 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415l-1.39-1.39ZM20 25a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm4 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM21 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1v2a1 1 0 0 1-2 0V6h-1a1 1 0 0 1-1-1ZM24 39a1 1 0 0 1 1 1v2h1a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2h1v-2a1 1 0 0 1 1-1ZM12.686 39.557a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414l.707.707 1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414.707.707a1 1 0 0 1 0 1.415ZM34.606 13.394a1 1 0 0 1 0-1.414l1.415-1.415-.708-.707a1 1 0 0 1 1.415-1.414l2.828 2.828a1 1 0 0 1-1.414 1.415l-.707-.707-1.414 1.414a1 1 0 0 1-1.415 0ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1ZM39 24a1 1 0 0 1 1-1h2v-1a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0v-1h-2a1 1 0 0 1-1-1ZM8.443 12.687a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 1 1 1.414 1.414l-.707.707 1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415-.707.708a1 1 0 0 1-1.415 0ZM34.606 34.607a1 1 0 0 1 1.415 0l1.414 1.414.707-.707a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 0 1-1.415-1.415l.708-.707-1.415-1.414a1 1 0 0 1 0-1.414Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirus);
export default ForwardRef;
