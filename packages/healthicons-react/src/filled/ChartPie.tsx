import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartPie = (
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
        d="M9.712 10.005A19.935 19.935 0 0 0 4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4a19.935 19.935 0 0 0-14.288 6.005ZM25 6.027v16.24l14.066-8.12C36.022 9.502 30.888 6.35 25 6.027Zm-.491 18.834-.009.005-15.566 8.987C12.149 38.76 17.696 42 24 42c9.941 0 18-8.059 18-18 0-2.922-.696-5.682-1.932-8.122l-15.56 8.983Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
