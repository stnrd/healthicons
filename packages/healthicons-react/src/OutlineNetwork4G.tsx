import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineNetwork4G = (
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
        d="M35 27H13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1Zm-22-2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V28a3 3 0 0 0-3-3H13Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.282 29.04A1 1 0 0 1 21 30v6a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1h-3.5a1 1 0 0 1-.841-1.54l4.5-7a1 1 0 0 1 1.123-.42ZM19 36v-2.595L17.332 36H19ZM35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.539Zm-9.786-1.947a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8l1.415 1.415Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M32.674 30.262a1 1 0 1 1-1.333 1.49 3.503 3.503 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.503 5.503 0 1 1 0-8.204Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M35 27H13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1Zm-22-2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V28a3 3 0 0 0-3-3H13Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.282 29.04A1 1 0 0 1 21 30v6a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1h-3.5a1 1 0 0 1-.841-1.54l4.5-7a1 1 0 0 1 1.123-.42ZM19 36v-2.595L17.332 36H19ZM35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.539Zm-9.786-1.947a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8l1.415 1.415Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M32.753 31.674a1 1 0 0 1-1.412.079 3.503 3.503 0 1 0-.334 5.486v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.503 5.503 0 1 1 0-8.204 1 1 0 0 1 .079 1.412Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineNetwork4G);
export default ForwardRef;
