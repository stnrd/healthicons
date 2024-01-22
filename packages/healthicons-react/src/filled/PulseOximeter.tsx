import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPulseOximeter = (
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
        d="M26.447 21.066h6.51c-.084.319-.19.747-.3 1.262H29.09a2.525 2.525 0 0 0 0 5.05h2.998c-.003.414.005.836.028 1.262h-1.763a2.525 2.525 0 0 0 0 5.048h2.886c.191.433.41.855.662 1.263h-1.024a2.524 2.524 0 1 0 0 5.049H44l.013-27.344-8.43-3.467a2.518 2.518 0 1 0-1.842 4.688l4.871 1.826c.183.069.329.18.435.314H26.774c.148.636.226 1.3.226 1.983a8.7 8.7 0 0 1-.553 3.066Zm-1.713-4.94a2.526 2.526 0 0 0-.355 4.694c.4-.862.621-1.817.621-2.82 0-.65-.093-1.278-.266-1.875Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12.5c0-.828.705-1.5 1.575-1.5H17.65c4.06 0 7.35 3.134 7.35 7s-3.29 7-7.35 7H5.575C4.705 25 4 24.328 4 23.5v-2.074a2 2 0 0 1 .41-1.213l.23-.3a2 2 0 0 0 .41-1.214V17.3a2 2 0 0 0-.41-1.213l-.23-.3A2 2 0 0 1 4 14.573V12.5ZM22 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-12-2h4v4h-4v-4Zm-2-2h8v8H8v-8Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPulseOximeter);
export default ForwardRef;
