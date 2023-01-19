import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeTravel = (
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
        d="M29.8 17.396a159.482 159.482 0 0 1-11.583 0 6 6 0 1 0 11.567 0h.016ZM25 30.341l5 1.488V40h-5v-9.659ZM23 40h-5v-8.17l5-1.489V40Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648.59.042 1.299.087 2.12.13l-.011-.001a8 8 0 1 0 15.64 0 112.94 112.94 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6Zm.288 22.042 6.542 1.947 5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797 6.46-1.923A.979.979 0 0 1 24 28a.998.998 0 0 1 .288.042ZM37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3h-2ZM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeTravel);
export default ForwardRef;
