import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLetrina = (
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
        d="M14 6h20a2 2 0 0 1 2 2v5.4l-2.89-3.084-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64V40a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-3.669l4.357-4.647-1.46-1.368L12 33.407v-2.076l4.357-4.647-1.46-1.368L12 28.407v-2.076l4.357-4.647-1.46-1.368L12 23.407v-2.076l4.357-4.647-1.46-1.368L12 18.407v-2.076l4.357-4.647-1.46-1.368L12 13.407V8a2 2 0 0 1 2-2Zm-4 2a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8Zm11 2h6c.932 0 1.715.637 1.937 1.5A3.983 3.983 0 0 0 27 11h-6c-.703 0-1.363.181-1.937.5A2.001 2.001 0 0 1 21 10Zm10 2v23a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4Zm-4 1a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h6Zm-3 7c1.035 0 1.875-.895 1.875-2s-.84-2-1.875-2c-1.035 0-1.875.895-1.875 2s.84 2 1.875 2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLetrina);
export default ForwardRef;
