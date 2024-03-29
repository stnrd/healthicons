import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFingerprint = (
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
        d="M10 18c0-7.732 6.268-14 14-14s14 6.268 14 14v12c0 7.732-6.268 14-14 14s-14-6.268-14-14V18Zm14 0a1 1 0 0 1 1 1v9.787c0 2.258.548 3.766 1.468 4.713.914.942 2.36 1.5 4.532 1.5a1 1 0 1 1 0 2c-2.495 0-4.549-.645-5.968-2.107C23.62 33.437 23 31.338 23 28.787V19a1 1 0 0 1 1-1Zm0-9c-4.986 0-10 3.765-10 9.235v12.549c0 1.245.184 2.53.575 3.664.387 1.12 1.01 2.182 1.956 2.852a1 1 0 1 0 1.157-1.631c-.48-.34-.911-.974-1.223-1.874-.306-.888-.465-1.948-.465-3.012V18.236C16 14.123 19.847 11 24 11c4.153 0 8 3.123 8 7.235v10.309c0 .661-.134 1.171-.334 1.482-.165.258-.383.407-.775.407-.417 0-.732-.174-.968-.48-.251-.325-.423-.82-.423-1.41v-9.306a5.68 5.68 0 0 0-1.602-3.964A5.442 5.442 0 0 0 24 13.62a5.442 5.442 0 0 0-3.898 1.654 5.68 5.68 0 0 0-1.602 3.964v11.616c0 3.393 1.758 6.7 5.657 8.09a1 1 0 0 0 .67-1.885c-2.991-1.065-4.327-3.534-4.327-6.205V19.237a3.68 3.68 0 0 1 1.034-2.568A3.442 3.442 0 0 1 24 15.62c.92 0 1.807.374 2.466 1.05a3.68 3.68 0 0 1 1.034 2.568v9.307c0 .951.273 1.9.842 2.634a3.162 3.162 0 0 0 2.549 1.255c1.108 0 1.945-.525 2.459-1.327.48-.75.65-1.684.65-2.563V18.236C34 12.765 28.986 9 24 9Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFingerprint);
export default ForwardRef;
