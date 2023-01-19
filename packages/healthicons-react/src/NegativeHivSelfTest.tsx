import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeHivSelfTest = (
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
        d="M0 0h48v48H0V0Zm20.791 11.147 3.423-1.284a1.995 1.995 0 1 0-1.46-3.713l-10.252 4.216a10.491 10.491 0 0 0-6.341 11.527l.226 1.28a8.941 8.941 0 0 0 8.805 7.386c.392 0 .77-.01 1.134-.033.119.022.24.033.366.033h9a2 2 0 1 0 0-4h-1.604c.199-.323.373-.657.525-1h3.079a2 2 0 1 0 0-4h-2.19c.018-.337.025-.671.022-1h3.168a2 2 0 1 0 0-4h-3.62c-.086-.408-.17-.747-.237-1h13.857a2 2 0 1 0 0-4H20.288a.984.984 0 0 1 .503-.412Zm20.21 11.996c0 1.6-1.32 2.857-3 2.857s-3-1.257-3-2.857c0-1.6 3-5.143 3-5.143s3 3.657 3 5.143ZM38.52 42a1 1 0 0 0 .904-.615l2.5-6a1 1 0 0 0-1.846-.77l-1.626 3.903-1.826-3.938a1 1 0 0 0-1.814.84l2.782 6a1 1 0 0 0 .927.58Zm-17.3 0a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v2h3v-2a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0v-2h-3v2a1 1 0 0 1-1 1Zm8.5-8a1 1 0 1 0 0 2h.5v4h-.5a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-.5v-4h.5a1 1 0 0 0 0-2h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeHivSelfTest);
export default ForwardRef;
