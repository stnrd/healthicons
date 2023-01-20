import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospitalized = (
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
        d="M32 9a1 1 0 0 1-1-1V6h-2v2c0 1.306.835 2.418 2 2.83V12h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1v-1h5v12.066H20.11a.307.307 0 0 1-.218-.09l-.366-.37.369-.367a3.77 3.77 0 0 0 .001-5.333l-1.8-1.8a3.771 3.771 0 0 0-5.333-.003l-.704.704a3.953 3.953 0 0 0-3.892 1.021 4.034 4.034 0 0 0 0 5.676l.833.839V34H6v2h3.05a3.5 3.5 0 1 0 4.899 0h20.102a3.5 3.5 0 1 0 4.899 0H42v-2h-4v-3h.066C40.24 31 42 29.224 42 27.033a3.971 3.971 0 0 0-2-3.455V11a2 2 0 0 0-2-2h-6Zm-18.174 7.868 4.29 4.32.365-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35Zm2.45 13.8c.21.212.497.332.796.332H36v3H11v-8.644l5.275 5.311Zm2.198-6.283c.431.434 1.02.681 1.636.681h17.956c1.052 0 1.934.865 1.934 1.967S39.119 29 38.066 29H17.438l-7.852-7.905a2.034 2.034 0 0 1 0-2.857 1.953 1.953 0 0 1 2.782 0l6.106 6.147ZM13 38.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM36.5 40a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM31 18v-4h2v4h-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospitalized);
export default ForwardRef;
