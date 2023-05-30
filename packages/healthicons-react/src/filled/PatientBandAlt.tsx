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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.443 15.857A1.513 1.513 0 0 1 8 14.787v-1.544a2 2 0 0 0-.586-1.415l-1.707-1.707a3 3 0 0 1 0-4.242l.172-.172a3 3 0 0 1 4.242 0l1.707 1.707A2 2 0 0 0 13.243 8h1.544c.402 0 .787.16 1.07.443l8.79 8.79A4.62 4.62 0 0 1 26 20.5c0 .695.276 1.362.768 1.854l15.44 15.439a3.122 3.122 0 0 1-4.415 4.414l-15.44-15.44A2.621 2.621 0 0 0 20.5 26a4.62 4.62 0 0 1-3.268-1.354l-8.789-8.789ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm18 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.293 11.707l-1.586 1.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPatientBandAlt);
export default ForwardRef;
