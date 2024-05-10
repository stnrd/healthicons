import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHearingAid = (
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
        d="M26 7c-6.075 0-11 4.925-11 11h-2c0-7.18 5.82-13 13-13s13 5.82 13 13c0 4.501-2.288 8.467-5.76 10.8C30.87 30.39 29 32.506 29 34.91V35a8 8 0 1 1-16 0v-.858a11 11 0 0 1 2.47-6.945l-.627-.626a1 1 0 0 1-.082-1.32l4.416-5.679a7 7 0 1 1 5.694 5.337l-5.878 4.573a1 1 0 0 1-1.321-.082l-.78-.78A9 9 0 0 0 15 34.143V35a6 6 0 0 0 12 0v-.089c0-3.457 2.628-6.096 5.124-7.772A10.988 10.988 0 0 0 37 18c0-6.075-4.925-11-11-11Zm-3.383 17.13a7.033 7.033 0 0 1-2.56-2.43l-3.175 4.081 1.58 1.58 4.155-3.231ZM26 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHearingAid);
export default ForwardRef;
