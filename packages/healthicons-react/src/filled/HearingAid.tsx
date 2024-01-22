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
        d="M15 18c0-6.075 4.925-11 11-11s11 4.925 11 11c0 3.807-1.933 7.163-4.876 9.139C29.628 28.815 27 31.454 27 34.911V35a6 6 0 0 1-12 0v-.858a9 9 0 0 1 1.893-5.521l.779.779a1 1 0 0 0 1.32.082l5.88-4.572a7 7 0 1 0-5.694-5.337L14.76 25.25a1 1 0 0 0 .082 1.321l.626.627A11 11 0 0 0 13 34.142V35a8 8 0 1 0 16 0v-.089c0-2.404 1.87-4.52 4.24-6.112A12.988 12.988 0 0 0 39 18c0-7.18-5.82-13-13-13s-13 5.82-13 13h2Zm5.056 3.7a7.033 7.033 0 0 0 2.56 2.43l-4.154 3.231-1.58-1.58 3.174-4.081Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHearingAid);
export default ForwardRef;
