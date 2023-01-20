import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgQuestionCircle = (
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        fill="#333"
      />
      <path
        d="M31.663 12.303C33.69 13.868 35 16.23 35 19.29c0 3.52-1.954 5.954-4.19 7.445-1.527 1.02-3.258 1.66-4.81 1.994V30a2 2 0 1 1-4 0v-3a2 2 0 0 1 1.874-1.996c1.302-.082 3.2-.584 4.716-1.596C30.054 22.431 31 21.11 31 19.29c0-1.794-.714-2.997-1.782-3.822-1.133-.875-2.776-1.396-4.614-1.461-1.83-.065-3.673.33-5.103 1.08-1.43.751-2.286 1.756-2.56 2.863a2 2 0 1 1-3.883-.96c.627-2.535 2.472-4.336 4.585-5.444 2.114-1.11 4.659-1.623 7.103-1.537 2.437.087 4.956.78 6.917 2.294ZM22 36a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgQuestionCircle);
export default ForwardRef;
