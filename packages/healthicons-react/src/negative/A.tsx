import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgA = (
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
      <g clipPath="url(#A_svg__a)" fill="#333">
        <path d="M24 17.2 28.5 28h-9L24 17.2Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25.846 11.23a2 2 0 0 0-3.692 0L14.67 29.19a2.01 2.01 0 0 0-.035.084l-2.482 5.957a2 2 0 1 0 3.692 1.538L17.833 32h12.334l1.987 4.77a2 2 0 0 0 3.692-1.54l-2.482-5.956a1.937 1.937 0 0 0-.035-.085l-7.483-17.958Z"
        />
      </g>
      <defs>
        <clipPath id="A_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgA);
export default ForwardRef;
