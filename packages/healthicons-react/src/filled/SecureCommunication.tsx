import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSecureCommunication = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 20.5C4 12.492 10.492 6 18.5 6h11C37.508 6 44 12.492 44 20.5S37.508 35 29.5 35H28v7l-2.5-.5C9 37.5 4 28.508 4 20.5ZM27.333 18H29v9H19v-9h1.667v-2.77c0-1.554 1.492-2.813 3.333-2.813 1.841 0 3.333 1.259 3.333 2.812V18ZM24 14.417c.47 0 .841.161 1.067.352.222.187.266.357.266.46v2.688h-2.666v-2.688c0-.103.044-.273.266-.46.226-.19.597-.352 1.067-.352Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSecureCommunication);
export default ForwardRef;
