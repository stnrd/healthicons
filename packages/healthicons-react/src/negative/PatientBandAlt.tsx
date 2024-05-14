import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPatientBandAlt = (
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
      <g clipPath="url(#patient-band-alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM8 14.787c0 .402.16.787.443 1.07l8.79 8.79A4.62 4.62 0 0 0 20.5 26c.695 0 1.362.276 1.854.768l15.439 15.44a3.122 3.122 0 0 0 4.414-4.415l-15.44-15.44A2.621 2.621 0 0 1 26 20.5a4.62 4.62 0 0 0-1.354-3.268l-8.789-8.789A1.513 1.513 0 0 0 14.787 8h-1.544a2 2 0 0 1-1.415-.586l-1.707-1.707a3 3 0 0 0-4.242 0l-.172.172a3 3 0 0 0 0 4.242l1.707 1.707A2 2 0 0 1 8 13.243v1.544ZM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11.707 13.293l1.586-1.586a1 1 0 0 1 1.414 0l7.586 7.586a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-7.586-7.586a1 1 0 0 1 0-1.414Z"
        />
      </g>
      <defs>
        <clipPath id="patient-band-alt_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPatientBandAlt);
export default ForwardRef;
