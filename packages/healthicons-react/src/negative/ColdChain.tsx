import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgColdChain = (
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
      <g clipPath="url(#cold_chain_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm15.33 11a1 1 0 0 1 1 1v3.268l2.83-1.634a1 1 0 1 1 1 1.732L17.33 17l2.83 1.634a1 1 0 1 1-1 1.732l-2.83-1.634V22a1 1 0 0 1-2 0v-3.268l-2.83 1.634a1 1 0 1 1-1-1.732L13.33 17l-2.83-1.634a1 1 0 1 1 1-1.732l2.83 1.634V12a1 1 0 0 1 1-1ZM25 29.755a8 8 0 1 0 10 0V9.357C35 6.398 32.761 4 30 4s-5 2.398-5 5.357v20.398Zm8-7.694c-1.457.024-2.822-.33-4.018-.64-.73-.19-1.396-.362-1.982-.422V9.357c0-1.775 1.343-3.214 3-3.214s3 1.439 3 3.214v.619h-2a1 1 0 0 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2.085Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="cold_chain_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgColdChain);
export default ForwardRef;
