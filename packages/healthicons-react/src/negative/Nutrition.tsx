import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNutrition = (
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
        d="M0 0h48v48H0V0Zm32.65 21.027c-1.108-2.593-.916-5.347 1.057-7.32l-1.414-1.414c-2.33 2.33-2.734 5.377-1.953 8.178C25.765 18.4 21 22.208 21 28c0 5.523 4.925 10 11 10s11-4.477 11-10c0-6.22-5.495-10.151-10.35-6.973Zm6.593 8.003a1 1 0 0 1 .727 1.212 6.426 6.426 0 0 1-4.727 4.728 1 1 0 1 1-.486-1.94 4.426 4.426 0 0 0 3.273-3.273 1 1 0 0 1 1.212-.727ZM34 18c3 0 5-2 5-5-3 0-5 2-5 5Zm-15.065-.613c1.122-1.026 1.888-2.692 2.038-5.383a.954.954 0 0 0-.974-.998c-1.628.024-2.922.123-3.93.462-.417-1.099-1.258-2.136-2.523-3.082a.913.913 0 0 0-1.092 0c-1.255.939-2.093 1.966-2.512 3.055-.98-.289-2.263-.404-3.938-.433a.954.954 0 0 0-.977.996c.15 2.691.916 4.357 2.038 5.384a1.902 1.902 0 0 0-.749 1.832c.12.76.277 1.695.477 2.78H11v2H7.18c.511 2.53 1.215 5.609 2.16 9H12v2H9.917c.406 1.367.85 2.775 1.336 4.209a1.828 1.828 0 0 0 3.494 0A122.919 122.919 0 0 0 17.705 29H12v-2h6.176c.753-3.31 1.23-6.02 1.508-7.78a1.903 1.903 0 0 0-.749-1.832Zm-4.736-5.21.682 1.8 1.825-.614c.503-.169 1.184-.27 2.154-.32-.297 1.932-1.012 2.748-1.665 3.17-.936.605-2.303.787-4.195.787-1.892 0-3.259-.182-4.195-.788-.652-.421-1.367-1.236-1.664-3.164 1 .055 1.713.157 2.235.311l1.768.522.664-1.72c.19-.495.559-1.05 1.192-1.634.64.59 1.01 1.151 1.198 1.65Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNutrition);
export default ForwardRef;
