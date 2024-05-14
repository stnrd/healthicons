import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVih = (
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
      <g clipPath="url(#vih_svg__a)" fill="#000">
        <path d="M17.5 21.5a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V25h1v1.5a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0V23h-1v-1.5ZM21.5 21.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H25v3h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-3h-.5a1 1 0 0 1-1-1ZM31.428 26.871a1 1 0 0 1-1.857 0l-2-5a1 1 0 0 1 1.857-.742l1.072 2.678 1.072-2.678a1 1 0 0 1 1.857.742l-2 5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM22 4a1 1 0 1 0 0 2h1v2a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2h-4Zm3 36a1 1 0 1 0-2 0v2h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-2Zm-13.728-.443-2.828-2.829a1 1 0 1 1 1.414-1.414l.707.707 1.414-1.414a1 1 0 1 1 1.415 1.414l-1.415 1.414.707.707a1 1 0 0 1-1.414 1.415Zm23.335-27.578a1 1 0 0 0 1.414 1.415l1.414-1.415.707.707a1 1 0 0 0 1.414-1.414l-2.828-2.828a1 1 0 1 0-1.414 1.414l.707.707-1.414 1.414ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1Zm35-4a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-2ZM8.444 12.687a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415-.707.708a1 1 0 0 1-1.414 0Zm27.577 21.92a1 1 0 0 0-1.414 1.414l1.414 1.415-.707.707a1 1 0 1 0 1.414 1.414l2.828-2.829a1 1 0 0 0-1.414-1.414l-.707.707-1.414-1.414ZM14.833 13.42A13.94 13.94 0 0 1 23 10.035V12a1 1 0 1 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.389 1.39a1 1 0 0 0 1.414 1.414l1.39-1.39A13.94 13.94 0 0 1 37.964 23H36a1 1 0 1 0 0 2h1.965a13.94 13.94 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.39 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.414-1.413l-1.39 1.388A13.94 13.94 0 0 1 10.036 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415l-1.39-1.39Z"
        />
      </g>
      <defs>
        <clipPath id="vih_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVih);
export default ForwardRef;
