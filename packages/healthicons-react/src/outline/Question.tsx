import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgQuestion = (
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
        d="M24.5 29.253a2 2 0 0 1 1.562-1.951c1.694-.38 3.55-1.047 5.192-2.096C33.856 23.546 36 20.87 36 16.845c0-3.557-1.356-6.247-3.48-8.06-2.097-1.79-4.872-2.664-7.656-2.773-2.634-.103-5.586.52-8.01 1.906-2.394 1.37-4.2 3.433-4.83 6.25a1 1 0 0 0 1.952.437c.943-4.215 5.785-6.792 10.81-6.595 2.443.096 4.755.862 6.437 2.297C32.879 11.721 34 13.844 34 16.845c0 3.175-1.64 5.283-3.821 6.675-2.21 1.41-4.912 2.032-6.749 2.16a1 1 0 0 0-.93.998V32a1 1 0 1 0 2 0v-2.747Zm1.04 4.946c.59-.547.96-1.33.96-2.2v-2.746c1.863-.418 3.947-1.159 5.83-2.36 3.023-1.93 5.67-5.175 5.67-10.048 0-4.114-1.59-7.37-4.18-9.58-2.515-2.146-5.754-3.13-8.878-3.252-5.941-.233-13.317 2.778-14.87 9.718a3 3 0 1 0 5.856 1.31c.647-2.893 4.271-5.209 8.78-5.032 2.1.082 3.949.738 5.216 1.82C31.116 12.844 32 14.402 32 16.844c0 2.338-1.147 3.872-2.897 4.99-1.858 1.185-4.213 1.738-5.812 1.85a3 3 0 0 0-2.791 2.993V32a2.996 2.996 0 0 0 3 3 2.99 2.99 0 0 0 2.04-.8Zm.273 2.235a3.983 3.983 0 0 0-2.313-.403A3.996 3.996 0 0 0 20 40a4 4 0 1 0 5.813-3.567ZM24 38a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;
