import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPeace = (
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
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Zm-1 2.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001L23 23.586V6.027Zm0 35.946a17.928 17.928 0 0 1-11.001-4.557L23 26.413v15.559Zm2-35.946v17.559L37.416 36A17.933 17.933 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973Zm11.001 31.389L25 26.413v15.559a17.928 17.928 0 0 0 11.001-4.557Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPeace);
export default ForwardRef;
