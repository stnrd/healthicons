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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.736 16.564A2.513 2.513 0 0 1 7 14.787v-1.544a1 1 0 0 0-.293-.707L5 10.828a4 4 0 0 1 0-5.656L5.172 5a4 4 0 0 1 5.656 0l1.708 1.707a1 1 0 0 0 .707.293h1.544c.667 0 1.306.265 1.778.736l8.789 8.79A5.621 5.621 0 0 1 27 20.5c0 .43.17.842.475 1.146l15.44 15.44a4.121 4.121 0 0 1-5.83 5.828l-15.439-15.44A1.622 1.622 0 0 0 20.5 27c-1.49 0-2.92-.592-3.975-1.646l-8.789-8.79ZM6.414 6.586l.172-.172a2 2 0 0 1 2.828 0l1.707 1.707A3 3 0 0 0 13.243 9h1.544c.136 0 .267.054.363.15l8.79 8.79c.678.678 1.06 1.6 1.06 2.56s.381 1.881 1.06 2.56L41.5 38.5a2.121 2.121 0 0 1-3 3L23.06 26.06c-.678-.678-1.6-1.06-2.56-1.06s-1.881-.382-2.56-1.06l-8.79-8.79a.513.513 0 0 1-.15-.363v-1.544a3 3 0 0 0-.879-2.122L6.414 9.414a2 2 0 0 1 0-2.828Z"
      />
      <path d="M27 26a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 29a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM33 32a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM36 35a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM39 38a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.586 11a2 2 0 0 1 2.828 0L23 18.586a2 2 0 0 1 0 2.828L21.414 23a2 2 0 0 1-2.828 0L11 15.414a2 2 0 0 1 0-2.828L12.586 11ZM14 12.414 12.414 14 20 21.586 21.586 20 14 12.414Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPatientBandAlt);
export default ForwardRef;
