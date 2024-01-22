import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeApron = (
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
        d="m20.342 6.62-.292-.657-.716.068A7 7 0 0 0 13 13v12a3 3 0 0 0 3 3h1v11.72l3.521 1.174a11 11 0 0 0 6.957 0L31 39.721V28h1a3 3 0 0 0 3-3V13a7 7 0 0 0-6.334-6.969l-.716-.068-.292.658a4.001 4.001 0 0 1-7.316 0ZM19 23v2h10v-2H19Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeApron);
export default ForwardRef;
