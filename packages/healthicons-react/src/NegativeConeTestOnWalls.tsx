import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeConeTestOnWalls = (
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
        d="M30.588 28.68C29.076 27.966 28 26.14 28 24c0-2.14 1.076-3.966 2.588-4.68l-15.013-4.504C16.446 17.018 17 20.316 17 24c0 3.685-.554 6.982-1.425 9.184l15.013-4.504Zm-16.657 3.173c-.318.953-.653 1.588-.931 1.948-.278-.36-.613-.995-.931-1.948C11.429 29.935 11 27.159 11 24s.43-5.935 1.069-7.853c.318-.953.653-1.588.931-1.948.278.36.613.995.931 1.948C14.571 18.065 15 20.841 15 24s-.43 5.935-1.069 7.853Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm17.354 37.578-8.323 3.153A1.5 1.5 0 0 1 7 39.328V8.672A1.5 1.5 0 0 1 9.031 7.27l8.323 3.152a1 1 0 0 1 .646.935v2.099l14.08 4.224c.589-1.487 1.994-2.534 3.634-2.534 2.17 0 3.929 1.832 3.929 4.091 0 .214-.016.424-.046.63 1.434.841 2.403 2.442 2.403 4.28 0 1.836-.969 3.437-2.403 4.28.03.204.046.414.046.628 0 2.26-1.759 4.091-3.929 4.091-1.735 0-3.208-1.172-3.728-2.798L18 34.544v2.099a1 1 0 0 1-.646.935Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeConeTestOnWalls);
export default ForwardRef;
