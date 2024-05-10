import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConstructionWorker = (
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
        d="M30.492 17.142a1 1 0 0 1 1.213.698 8 8 0 1 1-15.41 0 1 1 0 0 1 1.213-.698c3.722.96 9.262.96 12.984 0ZM18.04 19.314a6 6 0 1 0 11.923 0c-3.617.73-8.307.73-11.923 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 28.49C13.013 29.535 6 32.203 6 36v6h36v-6c0-3.797-7.013-6.465-13-7.51V33H19v-4.51ZM13 42v-9h2v9h-2Zm21-9v9h2v-9h-2ZM25 6.058v4.422a1 1 0 0 1-2 0V6a8.928 8.928 0 0 0-3 .69v5.79a1 1 0 0 1-2 0V7.935c-1.37 1.178-2.16 2.706-2.411 4.045a5.572 5.572 0 0 0-.024.14l-.02.02c-.089.629-.04 1.147.088 1.503a1 1 0 0 1-1.882.675 3.629 3.629 0 0 1-.048-.14c-5.807 7.582 26.433 7.578 20.584-.013a4.292 4.292 0 0 1-.048.146 1 1 0 0 1-1.887-.661c.144-.414.186-.93.108-1.5a1.058 1.058 0 0 0-.018-.013C32.226 10.785 31.404 9.29 30 8.112v4.368a1 1 0 0 1-2 0V6.862a9.454 9.454 0 0 0-1.203-.445A10.686 10.686 0 0 0 25 6.057Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgConstructionWorker);
export default ForwardRef;
