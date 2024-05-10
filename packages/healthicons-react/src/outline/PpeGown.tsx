import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeGown = (
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
        d="M12.66 8.526A5 5 0 0 1 17.637 4H21a3 3 0 1 0 6 0h3.363a5 5 0 0 1 4.977 4.526l1.447 15.19A3.001 3.001 0 0 1 35 26.75V30a1 1 0 0 1-1 1h-2v12a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V31h-2a1 1 0 0 1-1-1v-3.249a3.001 3.001 0 0 1-1.787-3.035l1.447-15.19ZM30 30v-3H18v15h12V30Zm2-3v2h1v-2h-1Zm0-2V11h-2v14H18V11h-2v14h-1.8a1 1 0 0 1-.996-1.095l1.447-15.19A3 3 0 0 1 17.637 6h1.779a5.001 5.001 0 0 0 9.168 0h1.779a3 3 0 0 1 2.986 2.716l1.447 15.19A1 1 0 0 1 33.801 25H32Zm-16 2v2h-1v-2h1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeGown);
export default ForwardRef;
