import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledFetus = (
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
        d="M28.758 25.612a2.25 2.25 0 0 1 2.399 1.342c.482 1.13.393 2.357.086 3.377-.319 1.056-.926 2.095-1.77 2.996-1.722 1.836-4.457 3.135-8 2.957a2.25 2.25 0 0 1-1.95-1.347l-1.762-4.04-2.061.674a2.25 2.25 0 0 1-1.4-4.277l4.005-1.31a2.25 2.25 0 0 1 2.762 1.238l1.973 4.522c1.242-.156 2.153-.62 2.783-1.148l-.053.008a2.25 2.25 0 0 1-2.47-1.528l-1.446-4.434a2.25 2.25 0 0 1 4.279-1.395l.857 2.627 1.768-.262Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M37 21.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M17.244 38.504A16 16 0 1 0 30.755 9.497a16 16 0 0 0-13.51 29.007l-.845 1.813A18 18 0 1 1 31.6 7.683a18 18 0 0 1-15.2 32.634l.844-1.813Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.986 17.841c-.027.84-.397 1.597-1.128 2.199l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375.5-.134 1.163-.281 1.765.045.298.162.493.391.627.58.118.167.23.366.328.54l.02.035.022.039 1.636 3.626-1.824.823-1.598-3.544a9.362 9.362 0 0 0-.163-.28 3.702 3.702 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.568 2.568 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.314-.259.393-.489.4-.719.01-.287-.095-.684-.368-1.213-.269-.52-.652-1.08-1.094-1.68a74.46 74.46 0 0 0-.5-.669 44.469 44.469 0 0 1-.842-1.138l1.634-1.154c.244.346.5.685.77 1.042.177.234.36.476.548.732.454.617.917 1.282 1.261 1.95.34.658.615 1.413.59 2.194Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledFetus);
export default ForwardRef;
