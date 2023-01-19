import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineHealthWorkerForm = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13 9a1 1 0 0 0-1 1v31a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-5.583V7H35a3 3 0 0 1 3 3v31a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h5.583v2H13Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Zm-5 15a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm0-5a1 1 0 0 1 1-1h15.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1Zm2 13v2h2v-2h-2Zm-1-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4Zm12 2a1 1 0 1 0 .002-1.998A1 1 0 0 0 28 29Zm0 2a3 3 0 1 0 0-6 3 3 0 1 0 0 6Zm-4 4.28a.927.927 0 0 1 .055-.059c.164-.16.48-.372.976-.583 1-.425 2.234-.638 2.969-.638.735 0 1.969.213 2.969.638.496.21.812.423.976.583a.927.927 0 0 1 .055.058V37h-8v-1.72ZM28 32c-2.003 0-6 1.066-6 3.182V39h12v-3.818C34 33.066 30.003 32 28 32Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineHealthWorkerForm);
export default ForwardRef;
