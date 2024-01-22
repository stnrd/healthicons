import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBaby0203Alt = (
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
        d="M30 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.432 16.098A1 1 0 0 1 33 17v17.041c0 2.189-.686 4.427-2.186 6.132C29.295 41.9 27.012 43 24 43c-6.209 0-9-5.166-9-8.959v-17.04h.17H15a1 1 0 0 1 1.602-.8c3.209 2.422 5.48 3.46 7.572 3.454 2.082-.005 4.232-1.044 7.199-3.434a1 1 0 0 1 1.059-.123ZM17 19.497V34.04C17 37.071 19.21 41 24 41c2.488 0 4.205-.89 5.312-2.148.857-.975 1.389-2.219 1.593-3.548a.996.996 0 0 1-.307-.373c-1.503-3.145-4.292-6.64-7.246-9.7-2.246-2.325-4.54-4.35-6.352-5.735ZM31 31.55c-1.671-2.657-3.926-5.343-6.21-7.707a67.9 67.9 0 0 0-2.41-2.376c.6.126 1.198.19 1.799.188 2.282-.006 4.44-.95 6.821-2.64V31.55Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBaby0203Alt);
export default ForwardRef;
