import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDomesticWorker = (
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
        d="M6 37c0-3.878 6.146-6.303 11.842-7.369.39-.072.776-.139 1.159-.199v.068c0 1.93 2.231 3.495 4.987 3.5h.024C26.768 32.995 29 31.43 29 29.5v-.068a40.196 40.196 0 0 1 1.94.354C36.404 30.92 42 33.3 42 37v5H6v-5Zm2 0c0-.83.743-1.987 3.153-3.198 1.456-.73 3.239-1.33 5.097-1.783a4.5 4.5 0 0 0 7.75 4.31 4.5 4.5 0 0 0 7.75-4.31c1.858.454 3.641 1.052 5.097 1.783C39.257 35.013 40 36.17 40 37v3h-4v-4h-2v4H14v-4h-2v4H8v-3Zm14.579-2.111c-1.21-.192-2.336-.628-3.262-1.276a6.07 6.07 0 0 1-1.142-1.034 2.5 2.5 0 0 0 4.404 2.31Zm2.842 0a2.5 2.5 0 0 0 4.404-2.31 6.105 6.105 0 0 1-1.143 1.034c-.925.648-2.05 1.084-3.26 1.276ZM28.622 7.527 24 5.943l-4.622 1.584A5 5 0 0 0 16 12.257V19h.017a7.141 7.141 0 0 0-.017.5c0 4.142 3.582 7.5 8 7.5s8-3.358 8-7.5c0-.168-.006-.335-.017-.5H32v-6.743a5 5 0 0 0-3.378-4.73ZM24 12c-2.39 0-4.534.982-6 2.54v-2.283a3 3 0 0 1 2.027-2.838L24 8.057l3.973 1.362A3 3 0 0 1 30 12.257v2.282C28.534 12.982 26.39 12 24 12Zm0 13c3.437 0 6-2.582 6-5.5S27.437 14 24 14s-6 2.582-6 5.5 2.563 5.5 6 5.5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDomesticWorker);
export default ForwardRef;
