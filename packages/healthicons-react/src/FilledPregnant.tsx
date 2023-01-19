import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPregnant = (
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
      <path fill="#333" d="M29 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21.651 27.47a1.992 1.992 0 0 1-.827-.352l-5.5-4a2 2 0 0 1-.511-2.692L16.5 21.5l-1.687-1.074.001-.002.003-.004.009-.015.033-.051a39.433 39.433 0 0 1 .559-.84c.365-.536.873-1.258 1.437-1.987.554-.717 1.203-1.496 1.848-2.113.321-.307.69-.621 1.087-.87.355-.224.962-.544 1.71-.544h1.999a2 2 0 0 1 1.177.383L23.5 16l1.177-1.617.003.002.006.004.017.013.058.043.201.154c.171.131.412.322.705.564a32.876 32.876 0 0 1 2.247 2.048c1.7 1.7 3.795 4.177 4.943 7.046.665 1.662.681 3.22.148 4.593-.513 1.319-1.453 2.255-2.329 2.892-.88.641-1.807 1.06-2.484 1.316-.282.107-.53.189-.73.25L26 41v1a2 2 0 1 1-4 0v-1c0-5.855-.003-9.657-.349-13.53Zm-.658-5.175a105.28 105.28 0 0 0-.514-2.899 32.17 32.17 0 0 0-1.236 1.626l1.75 1.273Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPregnant);
export default ForwardRef;
