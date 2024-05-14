import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredDecreasing = (
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
      <path d="M15.828 18.14C13.684 16.74 11.303 16 8.871 16H8V6H6v35a1 1 0 0 0 1 1h35v-2H8V18h.871c2.016 0 4.021.612 5.864 1.815 1.846 1.204 3.482 2.971 4.765 5.186 1.419 2.45 3.262 4.462 5.402 5.86C27.047 32.258 29.428 33 31.86 33h6.506l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L38.367 31H31.86c-2.016 0-4.022-.612-5.865-1.815-1.845-1.204-3.482-2.971-4.764-5.186-1.419-2.45-3.262-4.462-5.403-5.86Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.857 6a2.524 2.524 0 0 0-2.524 2.524v2.81h-2.81A2.524 2.524 0 0 0 24 13.856v2.286a2.524 2.524 0 0 0 2.524 2.524h2.81v2.81A2.524 2.524 0 0 0 31.856 24h2.286a2.524 2.524 0 0 0 2.524-2.524v-2.81h2.81A2.524 2.524 0 0 0 42 16.144v-2.286a2.524 2.524 0 0 0-2.524-2.524h-2.81v-2.81A2.524 2.524 0 0 0 34.144 6h-2.286Zm-.37 2.153a.524.524 0 0 1 .37-.153h2.286a.524.524 0 0 1 .524.524v3.81a1 1 0 0 0 1 1h3.81a.524.524 0 0 1 .523.523v2.286a.524.524 0 0 1-.524.524h-3.81a1 1 0 0 0-1 1v3.81a.524.524 0 0 1-.523.523h-2.286a.524.524 0 0 1-.524-.524v-3.81a1 1 0 0 0-1-1h-3.81a.524.524 0 0 1-.523-.523v-2.286a.524.524 0 0 1 .524-.524h3.81a1 1 0 0 0 1-1v-3.81c0-.138.055-.271.153-.37Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartCuredDecreasing);
export default ForwardRef;
