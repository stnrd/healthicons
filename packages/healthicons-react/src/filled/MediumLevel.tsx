import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMediumLevel = (
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
      <path d="M35.465 12.12A17.924 17.924 0 0 0 25 8.028V13h-2V8.027a17.925 17.925 0 0 0-10.465 4.094l3 3-1.414 1.415-3.056-3.057A17.926 17.926 0 0 0 6.109 24h3.944v2H6a17.902 17.902 0 0 0 3.864 11.127l2.918-2.918 1.415 1.414-3.005 3.006.018.019-1.42 1.407A19.923 19.923 0 0 1 4 25.99C4 14.95 12.955 6 24 6s20 8.949 20 19.99a19.928 19.928 0 0 1-6.085 14.357l-1.391-1.437.012-.012-3.477-3.477 1.415-1.414 3.42 3.42A17.906 17.906 0 0 0 42 26h-4.316v-2h4.207a17.926 17.926 0 0 0-4.956-10.52L34 16.413 32.586 15l2.88-2.88Z" />
      <path d="M20.627 37.704c-.029.392.087.781.325 1.094l1.923 2.212c1.125.49 1.625.49 2.568 0l1.922-2.212c.238-.313.354-.702.326-1.094L25.31 23.902c-.145-1.997-2.17-2.015-2.314-.018l-2.37 13.82Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMediumLevel);
export default ForwardRef;
