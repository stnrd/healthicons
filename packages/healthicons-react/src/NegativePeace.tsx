import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePeace = (
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
        d="M0 0h48v48H0V0Zm23 6.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001l.208-.208L23 23.586V6.027Zm0 35.946a17.928 17.928 0 0 1-11.001-4.557l.208-.209L23 26.414v15.559ZM37.416 36A17.933 17.933 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973v17.559L37.416 36ZM36 37.416a17.928 17.928 0 0 1-11 4.557V26.414l11.001 11.002ZM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePeace);
export default ForwardRef;
