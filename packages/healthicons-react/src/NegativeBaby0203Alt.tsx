import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBaby0203Alt = (
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
      <g clipPath="url(#negative_baby_0203_alt_svg__a)">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M0 .25h48v48H0v-48Zm24 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-9 16.041V16.697c.99.407 2.012.9 3.047 1.466.191.11.38.215.568.317a40.935 40.935 0 0 1 6.371 4.522c3.579 3.091 6.57 6.764 8.014 10.434v.855c0 3.98-2.813 7.959-9 7.959-6.188 0-9-4.548-9-7.959ZM26.293 21.49a43.134 43.134 0 0 0-1.26-1.048c2.457-.005 4.925-1.013 7.967-3.191v11.83c-1.738-2.752-4.107-5.346-6.707-7.591Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="negative_baby_0203_alt_svg__a">
          <path fill="#fff" d="M0 .25h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBaby0203Alt);
export default ForwardRef;
