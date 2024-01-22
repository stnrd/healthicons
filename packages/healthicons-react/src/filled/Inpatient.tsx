import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInpatient = (
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
        d="M16.096 11.105a3.771 3.771 0 0 0-5.333-.002l-.704.704a3.953 3.953 0 0 0-3.892 1.021 4.034 4.034 0 0 0 0 5.676l.833.839V30H4v2h2.05a3.5 3.5 0 1 0 4.899 0h26.102a3.5 3.5 0 1 0 4.899 0H44v-2h-4v-3.113a3.962 3.962 0 0 0 3-3.854c0-2.19-1.761-3.967-3.934-3.967H18.11a.307.307 0 0 1-.218-.09l-.366-.37.369-.367a3.77 3.77 0 0 0 .001-5.333l-1.8-1.8Zm.02 6.083.365-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35 4.29 4.32ZM38 30H9v-8.644l5.275 5.311c.212.213.498.333.797.333H38v3Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgInpatient);
export default ForwardRef;
