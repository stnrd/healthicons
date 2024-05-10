import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTreatedWater = (
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
        d="m25.598 29 .402-.419V25h-2v4h-2v-4h-2v4h-2v-4h-2v3.581l.402.419h-4.688c-.947 0-1.714.767-1.714 1.714v1.475c2.344 1.36 4.688 1.034 7.032-.975 2.796 2.397 5.592 2.397 8.389 0 2.193 1.88 4.386 2.285 6.579 1.216v-1.716c0-.947-.767-1.714-1.714-1.714h-4.688ZM29 40.202V42h2v-1.924c1.725-.444 3-2.01 3-3.874v-3.19h1.506a1 1 0 0 1 1 1v1.696H41v-1.19a6.002 6.002 0 0 0-4.898-5.9h3.1v-2h-4.494v1.9h-1.427a3.737 3.737 0 0 0-.901-.872A3.697 3.697 0 0 0 30.286 27s.683-.713 1.463-1.81C32.79 23.726 34 21.582 34 19.53V5.643H8V19.53c0 2.053 1.211 4.197 2.25 5.66A17.658 17.658 0 0 0 11.715 27 3.71 3.71 0 0 0 8 30.714v5.488a4.002 4.002 0 0 0 3 3.874V42h2v-1.798h16Zm3-25.054V7.643H10V15c8.464 1.397 13.455 1.385 22 .148ZM39.5 42c.828 0 1.5-.814 1.5-1.818C41 38.59 39.5 37 39.5 37S38 38.59 38 40.182c0 1.004.672 1.818 1.5 1.818Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTreatedWater);
export default ForwardRef;
