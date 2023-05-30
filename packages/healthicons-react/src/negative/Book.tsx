import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBook = (
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
      <g clipPath="url(#book_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14 5a5 5 0 0 0-5 5v32a1 1 0 0 0 1 1h28v-2H11v-1a3 3 0 0 1 3-3h24a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H14Zm9 16v5h2v-5h5v-2h-5v-5h-2v5h-5v2h5Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="book_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBook);
export default ForwardRef;
