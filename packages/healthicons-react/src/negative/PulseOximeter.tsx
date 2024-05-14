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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#pulse-oximeter_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm26.447 21.066h6.51c-.084.319-.19.747-.3 1.262H29.09a2.524 2.524 0 1 0 0 5.05h2.998c-.003.414.005.836.028 1.262h-1.764a2.524 2.524 0 1 0 0 5.048h2.887c.191.433.41.855.662 1.263h-1.024a2.524 2.524 0 1 0 0 5.049H44l.013-27.344-8.43-3.467a2.518 2.518 0 1 0-1.842 4.688l4.87 1.826c.184.069.33.18.436.314H26.774c.148.636.226 1.3.226 1.983a8.7 8.7 0 0 1-.553 3.066Zm-2.068-.246C23.24 23.282 20.656 25 17.65 25H5.575C4.705 25 4 24.328 4 23.5v-2.074a2 2 0 0 1 .41-1.213l.23-.3a2 2 0 0 0 .41-1.214V17.3a2 2 0 0 0-.41-1.213l-.23-.3A2 2 0 0 1 4 14.573V12.5c0-.828.705-1.5 1.575-1.5H17.65c3.378 0 6.223 2.17 7.084 5.125.173.597.266 1.226.266 1.875a6.694 6.694 0 0 1-.621 2.82ZM20 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-4h-4v4h4v-4Zm-6-2v8h8v-8H8Z"
        />
      </g>
      <defs>
        <clipPath id="pulse-oximeter_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPulseOximeter);
export default ForwardRef;
