import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyMale0203MAlt = (
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
        d="M16 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9.414l-3.11 3.11a6 6 0 1 1-1.414-1.414L18.587 8H17a1 1 0 0 1-1-1Zm0 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM33 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.432 16.098A1 1 0 0 1 42 17v17.041c0 .116-.002.233-.006.349a.998.998 0 0 1-.015.315c-.126 1.97-.817 3.935-2.166 5.468C38.295 41.9 36.013 43 33 43c-6.209 0-9-5.166-9-8.959v-17.04h.67H24a1 1 0 0 1 1.602-.8c3.209 2.422 5.48 3.46 7.572 3.454 2.082-.005 4.232-1.044 7.199-3.434a1 1 0 0 1 1.059-.123Zm-8.58 9.134c-2.458-2.546-4.973-4.731-6.852-6.11v14.92C26 37.07 28.209 41 33 41c2.488 0 4.205-.89 5.312-2.148.99-1.126 1.545-2.61 1.664-4.171-1.529-3.08-4.248-6.471-7.124-9.45ZM40 30.779c-1.607-2.402-3.647-4.8-5.71-6.936a67.812 67.812 0 0 0-2.297-2.27c.395.056.79.083 1.186.082 2.282-.006 4.44-.95 6.821-2.64V30.78Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyMale0203MAlt);
export default ForwardRef;
